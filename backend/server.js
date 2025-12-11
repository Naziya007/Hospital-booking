

// server.js
import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import apointmentRoute from "./routes/apointmentRoute.js"


dotenv.config();
const app = express();
// Middlewares
app.use(cors({ origin: "http://localhost:5173" }));  
app.use(express.json());


// Connect Database
connectDB();


app.get('/', (req, res) => {
res.send('Backend Server Running');
});
app.use("/auth", authRoutes);
app.use("/apoint", apointmentRoute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));