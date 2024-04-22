const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema(
    {
        date_debut:{ type: Date, required: true },
        date_fin:   { type: Date, required: true }, 
        heure_debut: { type: Date, required: true }, 
        heure_fin: { type: Date, required: true }, 
    }
    );

module.exports=mongoose.model("Reservation",reservationSchema);
