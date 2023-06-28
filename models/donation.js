const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    amount: { type: Number },
    fundRaiserID: { type: Number },
    date: {
        type: Date,
        default: Date.now()
    },
    donor: { type: String }
})
const Donation = new mongoose.model('donation', donationSchema);

module.exports = { Donation };