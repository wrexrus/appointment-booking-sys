import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    date: {
      type: String, // YYYY-MM-DD
      required: true,
    },
    time_slot: {
      type: String, // "10:00-10:30"
      required: true,
    },
    user_id: {
      type: String, // simple for now
      required: true,
    },
    status: {
      type: String,
      enum: ["booked", "cancelled"],
      default: "booked",
    },
  },
  { timestamps: true }
);

appointmentSchema.index({ date: 1, time_slot: 1 }, { unique: true });

export default mongoose.model("Appointment", appointmentSchema);
