import { useEffect, useState } from "react";
import api from "../api/api";

const Booking = () => {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [timeSlot, setTimeSlot] = useState("");
  const [message, setMessage] = useState("");

  // Fetch slots when date changes
  useEffect(() => {
    if (!date) return;

    api
      .get(`/slots?date=${date}`)
      .then(res => setSlots(res.data.available_slots))
      .catch(() => setMessage("Failed to load slots"));
  }, [date]);

  const handleBooking = async () => {
    setMessage("");

    try {
      const res = await api.post("/book", {
        date,
        time_slot: timeSlot,
        user_id: "user1", // dummy user
      });

      setMessage(res.data.message);
    } catch (err) {
      if (err.response?.status === 409) {
        setMessage("Slot already booked");
      } else if (err.response?.status === 400) {
        setMessage("Invalid input");
      } else {
        setMessage("Server error");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6">Book Appointment</h2>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <label className="block text-gray-700 font-medium mb-2">
          Select Date
        </label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-gray-700 font-medium mb-2">
          Select Time Slot
        </label>
        <select
          value={timeSlot}
          onChange={e => setTimeSlot(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Slot</option>
          {slots.map(slot => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <button
          onClick={handleBooking}
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600"
        >
          Book
        </button>

        {message && (
          <p className="mt-4 text-center text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Booking;
