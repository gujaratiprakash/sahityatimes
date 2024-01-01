import mongoose from "mongoose";

const connectionString = process.env.MONGODB_URI;

const databaseConnection = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(connectionString);
      console.log("Connected to MongoDB!");
    } catch (err) {
      console.log("Error connecting to MongoDB: " + err.message);
    }
  }
};

export default databaseConnection;
