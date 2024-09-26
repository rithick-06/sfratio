import Staff from "../models/staff.model.js";
import { v4 as uuid } from "uuid";


export const CreateUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        console.log("User recieved")
        if (!fullName || !email || !password) {
            throw new Error("All fields are required.");
        }
        const ExistingUser = await Staff.findOne({
            email
        })
        if (ExistingUser) {
            throw new Error("User already registered");
        }

        const user = new Staff({
            id: uuid,
            fullName,
            email,
            password
        })
        await user.save()
        res.status(201).json({success: true, data: user})
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: 'Registration failed', details: error.message });
    }

}