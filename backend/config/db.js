import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://vinayakshree:callme%401234@cluster0.rwyp3.mongodb.net/').then(()=>console.log("DB Connected"))
}