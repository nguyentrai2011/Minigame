const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    email: String,
    name: String,
    phoneNumber: String,
    isPaid: Boolean,
    address: String,
    date: Date
});
module.exports = mongoose.model("Student", studentSchema);