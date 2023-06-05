import { connect, connection } from "mongoose";

export default class DBConnect{    
    static async conectar(){
        const url = process.env.MONGODB_URL || ""
        const conn = await connect(url)
        connection.once("open", () => {
            console.log("Sucesso ao conectar DB!")
        });
        return conn
    }
}

