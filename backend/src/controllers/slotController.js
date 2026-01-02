import Appointment from "../models/Appointment.js";
import { BASE_SLOTS } from "../utils/slots.js";

export const getAvailableSlots = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const bookedAppointments = await Appointment.find({
      date,
      status: "booked",
    });

    const bookedSlots = bookedAppointments.map(a => a.time_slot);

    const availableSlots = BASE_SLOTS.filter(
      slot => !bookedSlots.includes(slot)
    );

    return res.status(200).json({
      date,
      available_slots: availableSlots,
    });
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch slots" });
  }
};
