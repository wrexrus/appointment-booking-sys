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
    <div style={{ padding: "20px" }}>
      <h2>Book Appointment</h2>

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <br /><br />

      <select
        value={timeSlot}
        onChange={e => setTimeSlot(e.target.value)}
      >
        <option value="">Select Slot</option>
        {slots.map(slot => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>

      <br /><br />

      <button onClick={handleBooking}>Book</button>

      <p>{message}</p>
    </div>
  );
};

export default Booking;
