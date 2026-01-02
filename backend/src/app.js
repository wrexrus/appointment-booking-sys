import express from "express"
import cors from "cors"
import slotRoutes from "./routes/slotRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";



const app = express();

app.use(cors());
app.use(express.json());

app.use("/slots", slotRoutes);
app.use("/book", bookingRoutes);
app.use("/bookings", bookingRoutes);

app.get("/",(req,res)=>{
    res.send("backend running!");
})

app.get("/health",(req,res)=>{
    res.status(200).json({status: "OK"})
})

export default app;