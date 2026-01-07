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
        setMessage("⚠️ Slot already booked");
      } else if (err.response?.status === 400) {
        setMessage("⚠️ Invalid input");
      } else {
        setMessage("❌ Server error");
      }
    }
  };

  return (
    <div id="book" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center py-20 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Book Your Appointment</h2>
        <p className="text-gray-500">Select a convenient time for you</p>
      </div>

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg border-t-4 border-amber-500">
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2 ml-1">
            Pick a Date
          </label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-gray-700"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2 ml-1">
            Available Time Slots
          </label>
          <div className="relative">
            <select
              value={timeSlot}
              onChange={e => setTimeSlot(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-gray-700 appearance-none"
            >
              <option value="">-- Select a Slot --</option>
              {slots.map(slot => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3.5 rounded-xl hover:from-amber-600 hover:to-amber-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Confirm Booking
        </button>

        {message && (
          <div className={`mt-6 p-4 rounded-xl text-center font-medium ${message.includes('booked') || message.includes('Invalid') || message.includes('error') ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
