const fundRaisersRepository = require('../repositories/fundRaisersRepository');
const teamRepository  = require('../repositories/teamsRepository');
const campaignService = require('./campaignService');

class teamService {

    constructor() {}

    async getAllTeams() {
        return await teamRepository.getAllTeams();
    }

    async getByID(teamID) {
        return await teamRepository.getByID(teamID);
    }

    async createTeam(team) {
        return await teamRepository.createTeam(team);
    }

    async updateTeam(team) {
        return await teamRepository.updateTeam(team);
    }

    async deleteTeam(teamID) {
        return await teamRepository.deleteTeam(teamID);
    }

    async getTeams(campaignID){
        let isnum = /^\d+$/.test(campaignID);
        if (isnum === false){
            const campaign =  await campaignService.getSingle(campaignID)
            campaignID = campaign.ID
        }
        return await teamRepository.getTeamsByCampaignID(campaignID);
    }

    async getFundraisers(){
        return await fundRaisersRepository.geta(campaignID);
    }

}

module.exports = new teamService();