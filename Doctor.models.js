import mongoose from "mongoose"

const Doctorschema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        uppercase: true,
    },
    Specialization: {
        type: String,
        required: true,
        uppercase: true,
    },
    ExperienceInYears: {
        type: Number,
        required: true,
    },
    Salary: {
        type: Number,
        required: true,
        default: 0,
    },
    WorkTiming: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,

    },

}, { timestamps: true })


export const Doctor = mongoose.model("Doctor", Doctorschema)