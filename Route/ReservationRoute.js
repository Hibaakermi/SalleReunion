const express = require("express")
const router = express.Router()
const Reservationscontrollers=require("../Controllers/ReservationsControllers");

router.post("/ajouter/:id",Reservationscontrollers.addReservation)
router.delete("/delete/:id",Reservationscontrollers.deleteReservation)
router.put("/update/:id",Reservationscontrollers.updateReservation)
router.get("/getallreservation/",Reservationscontrollers.getAllresrrvationarchiver)
router.put("/annulerReservation/:id",Reservationscontrollers.annullerReservation)
router.get("/getonereservation/:id",Reservationscontrollers.getReservationById)

module.exports=router;