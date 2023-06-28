const mongoose = require('mongoose');

const fundRaiserSchema = mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    name: { type: String },
    teamID: { type: Number },
    goal: { type: Number },
    admin: { type: Boolean }
})
const FundRaiser = new mongoose.model('fundraisers', fundRaiserSchema);

module.exports = { FundRaiser };