const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        await mongoose.connect(
            "mongodb://admin:huygo12345@ac-cqcmmfo-shard-00-00.l5pgfrd.mongodb.net:27017,ac-cqcmmfo-shard-00-01.l5pgfrd.mongodb.net:27017,ac-cqcmmfo-shard-00-02.l5pgfrd.mongodb.net:27017/?ssl=true&replicaSet=atlas-gtbz6k-shard-0&authSource=admin&appName=Cluster0"
        );

        console.log("MongoDB Atlas Connected");

    } catch (error) {

        console.error(error);
        process.exit(1);

    }
};

module.exports = connectDB;