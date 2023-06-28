const database = require('mime-db');
const mongoose = require('mongoose');

async function connect() {
    const connString = process.env.DATABASE_URL;
    try {
        await mongoose.connect(
            connString);
        console.log('connected successfully');
    }
    catch {
       console.log('🏳 קרתה תקלה בלתי צפויה בחיבור לרשת. \n אנא נסו שנית בעוד מספר רגעים.');
    }
}

module.exports = { connect }
