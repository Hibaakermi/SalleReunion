const user=require("../Models/UserModels")
const bcrypt=require("bcryptjs")
const jwt = require ("jsonwebtoken")
const dotenv=require( 'dotenv')
dotenv.config();

//const transporter = nodemailer.createTransport({
   // service: "gmail",
   //auth: {
      //user: 'hibatallahakermi@gmail.com',
        //pass: 'jjkldedede',
    //},
    //tls: {
        //rejectUnauthorized: false
    //},
//});

//add user
exports.Singup=async(req,res)=>{
    try {
        let { nom,prenom,email,password,Numerotelephone }=req.body;
        const existeuser= await user.findOne({
        email:email})
        
        if(existeuser){
            res.status(401).json("user already exist")

           
        }else{
            const salt=await bcrypt.genSalt(10)
            const passwordhash=await bcrypt.hash(password,salt);
            const newUser =new user({
                nom:req.body.nom, 
                prenom: req.body.prenom, 
                email: email, 
                password: passwordhash,
                Numerotelephone:req.body.Numerotelephone
            })
                await newUser.save()
                res.status(200).json("user ajouter avec succes ")
           }
        
    
        } catch (error) {
            console.log(error);
            res.status(400).json("failed  to add user ")
    }
}

exports.Login= async (req, res)=>{
    try{
        let email = req.body.email;
        let user = await user.findOne({email: existemail})
        console.log(user)
    
        if(!existeuser){
            return res.status(404).send("User doesn't exist !")
    
        }else{
            let validPass =await bcrypt.compare(req.body.password , user.password)
    
            if(!validPass){
                return res.status(401).send('password is not correct !')
    
            }else{
                let payload ={
                    _id: user._id,
                    email: user.email,
                    name: user.name
                };
                let token = jwt.sign( payload , process.env.SECRET_KEY)
    
                return res.status(200).json({ resultat: existeuser, token: token, message: "Sign in successful"})
    
            }
        }
    }catch(error){
        console.log(error)
        return res.status(400).json("Failed to sign in");
    }
};


exports.Logout = (req, res, next) => {
    try {
        res.clearCookie('token');
        res.render('sign-in',{loggedIn:false})

      } catch (err) {
      next(err)
    }
  };


