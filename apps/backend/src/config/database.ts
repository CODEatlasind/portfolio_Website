import mongoose from "mongoose";

export const connectDatabase = async (): Promise<void> => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables");
  }

  const mongoUri = process.env.MONGODB_URI;
  await mongoose.connect(mongoUri);

  console.log("Database connected successfully");
};
