const express = require('express');
const campaignService = require('../services/campaignService');
const teamsService = require('../services/teamService');
const router = express.Router();
const errorMW = require('../middlewares/error');

router.get('/', async (req, res) => {
    res.send(await campaignService.getAllCampaigns());
});

router.get('/:machingID', async (req, res) => {
    console.log(req.params);
    res.send(await campaignService.getSingle(req.params.machingID));
});

router.post('/create', async (req, res) => {
    res.send(await campaignService.createCampaign(req.params));
});

// router.delete('/delete/:machingID', async (req, res) => {
//     res.send(await campaignService.deleteCampaign(req.params.machingID));
// });

router.get('/:machingID/teams', async (req, res) => {
    console.log(req.params.machingID);
    res.send(await teamsService.getTeams(req.params.machingID));
});

router.get('/:campaignID/getAchivment', async (req, res) => {
    console.log(req.params.campaignID);
    res.send(await campaignService.getAchivment(req.params.campaignID));
});

router.use(errorMW);
module.exports = router;