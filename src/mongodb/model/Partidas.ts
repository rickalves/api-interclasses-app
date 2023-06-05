import mongoose from "mongoose";
import DBConnect from "../config/DBConnect";


const partidaSchema = new mongoose.Schema(
    {
        timeA:{type: String},
        timeB: {type: String},
        placarA: {type: Number},
        placarB: {type: Number},
        data:{type: String},
        hora:{type: String},
        finalizado: {type: Boolean},
        vencedor:{type: String},
    }
)

const partidasSchema = new mongoose.Schema(
    {
        temporada:{type: Number, required: true},
        rodadas: [[partidaSchema]]    
    },
    {
        versionKey: false
    }
)

async function criaPartidas(){
    const conn = await DBConnect.conectar()
    return conn.models?.Partidas || conn.model("Partidas", partidasSchema)
}


export default criaPartidas;