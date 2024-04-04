const mongoose = require("mongoose")

const ReservationSchema = new mongoose.Schema(
    {
        date_debut: Date, date_fin: Date, 
        heure_debut: Date, heure_fin: Date, 
    }
    )

module.exports=mongoose.model("Reservation",ReservationSchema);
