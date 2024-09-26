import mongoose from "mongoose";
const SessionSchema = new mongoose.Schema({
    staffId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Staff",
        required: true
    },
    sessionToken: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '7d' 
    }
});

const Session = mongoose.model("Session", SessionSchema);

export default Session;
