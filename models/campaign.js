const mongoose = require('mongoose');

const campaignSchema = mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    name: { type: String },
    targetDate: { type: Date },
    goal: { type: Number }
})
const Campaign = new mongoose.model('campaigns', campaignSchema);

module.exports = { Campaign };