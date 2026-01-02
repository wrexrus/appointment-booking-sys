import Appointment from "../models/Appointment.js";
import { BASE_SLOTS } from "../utils/slots.js";

// POST /book
export const createBooking = async (req, res) => {
  try {
    const { date, time_slot, user_id } = req.body;

    if (!date || !time_slot || !user_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!BASE_SLOTS.includes(time_slot)) {
      return res.status(400).json({ message: "Invalid time slot" });
    }

    const appointment = await Appointment.create({
      date,
      time_slot,
      user_id,
    });

    return res.status(200).json({
      message: "Booking confirmed",
      appointment,
    });

  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({
        message: "Slot already booked",
      });
    }

    return res.status(500).json({
      message: "Failed to create booking",
    });
  }
};

// GET /bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Appointment.find({ status: "booked" }).sort({
      date: 1,
      time_slot: 1,
    });

    return res.status(200).json(bookings);
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch bookings" });
  }
};
