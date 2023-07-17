import mongoose from "mongoose";

const { Schema } = mongoose;

// const blogSchema = new Schema({
//   title: String,
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: { votes: Number, favs: Number },
// });

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String, required: false },
    country: { type: String, required: true },
    phone: { type: String, required: false },
    desc: { type: String, required: true },
    isSeller: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema)