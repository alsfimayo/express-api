import mongoose from "mongoose";
import logger from "./logger";
import env from "~/env";
export async function connectDB() {
  try {
    await mongoose.connect(env.DATABASE_URI);
    logger.info("Database is connected Successfully:");
  } catch (error) {
    logger.error("Error Occurred while connecting to database", error);
  }
}
