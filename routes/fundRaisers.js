const express = require('express');
const fundRaisersService = require('../services/fundRaisersService');
const donationsService = require('../services/donationsService');
const donations = require('./donations')
const router = express.Router();
const errorMW = require('../middlewares/error');
const access = require('../middlewares/accessRights')
const campaignService = require('../services/campaignService');

router.get('/', async (req, res) => {
    res.send(await fundRaisersService.getAllFundRaisers());
});

router.get('/:fundRaiserID', async (req, res) => {
    res.send(await fundRaisersService.getByID(req.params.fundRaiserID));
});

router.post('/create', async (req, res) => {
    res.send(await fundRaisersService.createFundRaiser(req.body));
});

router.put('/update/:ID/:sum', async (req, res) => {
    res.send(await fundRaisersService.updateFundRaiser(req.params.ID, req.params.sum));
});

router.delete('/delete/:fundRaiserID', async (req, res) => {
    res.send(await fundRaisersService.deleteFundRaiser(req.params.fundRaiserID));
});

router.get('/:fundRaiserID/allDonations', async (req, res) => {
    res.send(await donationsService.getDonations(req.params.fundRaiserID));
});

router.post('/:fundRaiserID/newDonation', async (req, res) => {
    var obj = req.body
    obj.fundRaiserID = req.params.fundRaiserID
    res.send(await donationsService.createDonation(req.body));
});

// router.use(access);

router.use('/:fundRaiserID/donation', access, donations);
router.put('/:fundRaiserID/updateCampaignGoal/:sum', access, async (req, res) => {
    res.send(await campaignService.updateCampaign(req.params.fundRaiserID ,req.params.sum));
});

router.use(errorMW);

module.exports = router;