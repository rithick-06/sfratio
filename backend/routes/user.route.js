import express from "express"
import { CreateUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", CreateUser);

export default router;

