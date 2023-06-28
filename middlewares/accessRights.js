const fundRaisersService = require('../services/fundRaisersService');

var access = async function (req, res, next) {
    const bool = await fundRaisersService.isAdmin(req.params.fundRaiserID);
    if (bool) {
        next();
    }
   else res.status(403).send('שתקבל שטאלע תנסה בשנית');
}

module.exports = access;
