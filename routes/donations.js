const express = require('express');
const donationsService = require('../services/donationsService');
const router = express.Router();
const errorMW = require('../middlewares/error');

router.get('/', async (req, res) => {
    res.send(await donationsService.getAllDonations());
});

router.post('/create', async (req, res) => {
    res.send(await donationsService.createDonation(req.body));
});

router.delete('/delete', async (req, res) => {
   res.send(await donationsService.deleteDonation(req.query.donationID));
});

router.use(errorMW);

module.exports = router;