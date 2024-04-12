import mongoose from "mongoose";

type ConnectionObj = {
    isConnected?: number
}

const connection: ConnectionObj = {}

async function dbConnect():Promise<void> {
    if(connection.isConnected) {
        console.log("Already connected to Database");
        return;
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || "");
        connection.isConnected = db.connections[0].readyState;
        console.log("DB Connected Successfully")
    } catch( error ) {
        console.log("DB Connection failed ", error);
        process.exit()        
    }
}

export default dbConnect;