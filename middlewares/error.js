module.exports = ( (err, request, response, next) =>{
    console.error(err.stack);
    response.status(500).send('🏳 קרתה תקלה בלתי צפויה. \nנשתדל לחזור בתשובה בהקדם');
})


