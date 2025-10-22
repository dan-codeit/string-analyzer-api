import express from "express";
import cors from "cors";
import stringRoutes from "./routes/string.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/strings", stringRoutes);

export default app;

