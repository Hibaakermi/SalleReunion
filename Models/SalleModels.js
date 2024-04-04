const mongoose=require("mongoose")
const Schema=mongoose.Schema

const SalleSchema=new Schema(
    {
        numéro:{
            type:Number,
            required:true
        },
        disponibilté:{
            type:Boolean,
            required:true,
            default:false
        },
        
        capacité:{
            type:Number
        },

        equipement:{
            type:String
        },

        description:{type:String}
    });

module.exports = mongoose.model("Salle",SalleSchema) 