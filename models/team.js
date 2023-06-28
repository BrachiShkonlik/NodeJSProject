
const mongoose = require('mongoose');

const teamsSchema = mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    goal: { type: Number },
    name: { type: String },
    campaignID: {
        type: Number,
        required: true
    }
})
const Team = new mongoose.model('teams', teamsSchema);

module.exports = { Team };