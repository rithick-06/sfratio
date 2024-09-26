import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/user.route.js"
const app = express();
app.use(express.json());
app.use("/", router)
app.listen(5000, () => {
    connectDB()
    console.log("Server started at 5000")
})