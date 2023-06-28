const { Campaign } = require('../models/campaign');
const logger = console;

class CampaignRepository {

    constructor() {
    }

    async getAllCampaigns() {
        const campaigns = await Campaign.find({});
        console.log('Campaigns:::', campaigns);
        return campaigns;
    }

    async getByID(campaignID) {
        console.log(campaignID);
        const campaign = await Campaign.findOne({ ID: campaignID });
        console.log('Campaigns:::', campaign);
        return campaign;
    }
    async getByName(campaignID) {
        console.log(campaignID);
        const campaign = await Campaign.findOne({ name: campaignID });
        console.log('Campaigns:::', campaign);
        return campaign;
    }
    async createCampaign(campaign) {
        let data = {};
        try {
            data = await Campaign.create(campaign);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateCampaign(id, sum) {
        let data = {};
        let filter = { ID: id };
        let isSuccess = false
        try {
            data = await Campaign.findOne(filter);
            data.goal = sum;
            await Campaign.updateOne(filter, data)
            isSuccess = true
        } catch (err) {
            logger.error('Error::' + err);
        }
        return isSuccess;
    }

    async deleteCampaign(campaignID) {
        let data = {};
        try {
            data = await Campaign.deleteOne({ ID: campaignID });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }
}

module.exports = new CampaignRepository();