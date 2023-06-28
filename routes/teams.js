const express = require('express');
const teamService = require('../services/teamService');
const router = express.Router();
const errorMW = require('../middlewares/error');


router.get('/', async (req, res) => {
    res.send(await teamService.getAllTeams());
});

router.get('/:teamID', async (req, res) => {
    res.send(await teamService.getByID(req.params.teamID));
});

router.post('/create', async (req, res) => {
    res.send(await teamService.createTeam(req.body));
});

router.put('/update', async (req, res) => {
    res.send(await teamService.updateTeam(req.params));
});

router.delete('/delete/:teamID', async (req, res) => {
    res.send(await teamService.deleteTeam(req.params.teamID));
});

router.use(errorMW);
// router.use('/:id/fundRaiser', fundRaisers);

module.exports = router;