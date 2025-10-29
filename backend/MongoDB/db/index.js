import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("",{
      dbName:"smit"
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ Error connecting:", err);
  }
};

connectDB();