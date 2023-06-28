const campaignRepository = require('../repositories/campaignsRepository');
const fundRaisersRep = require('../repositories/fundRaisersRepository')
const teamRep = require('../repositories/teamsRepository')
const donationsRep = require('../repositories/donationsRepository');
const fundRaisersRepository = require('../repositories/fundRaisersRepository');

class campaignService {

    constructor() { }

    async getAllCampaigns() {
        return await campaignRepository.getAllCampaigns();
    }

    async createCampaign(maching) {
        return await campaignRepository.createCampaign(maching);
    }

    async updateCampaign(id, sum) {
        let fr = await fundRaisersRep.getByID(id)
        let teamID = fr.teamID;
        let team = await teamRep.getByID(teamID)
        return await campaignRepository.updateCampaign(team.campaignID, sum);
    }

    async deleteCampaign(machingID) {
        return await campaignRepository.deleteCampaign(machingID);
    }

    async getSingle(machingID) {
        // var id = parseInt(machingID)
        let isnum = /^\d+$/.test(machingID);
        if (isnum === true) {
            return await campaignRepository.getByID(machingID);
        }
        return await campaignRepository.getByName(machingID);
    }


    async getAchivment(campaignID) {
        // try {
        let sum = 0;
        const teams = await teamRep.getTeamsByCampaignID(campaignID);
        for (let i = 0; i < teams.length; i++) {
            const fr = await fundRaisersRepository.getFundRaisers(teams[i].ID)
            for (let k = 0; k < fr.length; k++) {
                const donations = await donationsRep.getDonations(fr[k].ID)
                for (let j = 0; j < donations.length; j++) {
                    console.log(sum);
                    sum += donations[j].amount;
                }
            }
        }
        console.log(sum);
        return sum;
        // }
        // catch {
        //     console.log("error");
        // }
    }
}

module.exports = new campaignService();