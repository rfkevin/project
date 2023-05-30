import mongoose from "mongoose";

let isConnected = false; 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("database is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            dbName: "detachezvous",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("mongoDb connected")
    } catch (error) {
        console.log(error)
    }
}