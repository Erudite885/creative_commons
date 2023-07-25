import mongoose from "mongoose";

const { Schema } = mongoose;

const MesssageSchema = new Schema(
  {
    conversationId: { type: String, required: true },
    userId: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Messsage", MesssageSchema);
