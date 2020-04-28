import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/valiu-dev";

const connect = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await mongoose.connect(MONGODB_URI, {
                useNewUrlParser: true, useUnifiedTopology: true
            })
            resolve();
        }
        catch (err) {
            reject(err);
        }
    })
}

const close = () => {
    return mongoose.disconnect();
}

export default {
    connect,
    close
}