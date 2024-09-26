import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
    id: {type: String, required:true,unique: true},
    fullName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'staff', enum: ['staff', 'student'] },
});

const Staff = mongoose.model("Staff", StaffSchema);
export default Staff;