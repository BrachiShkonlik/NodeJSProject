const { FundRaiser } = require('../models/FundRaiser');
const logger = console;

class fundRaisersRepository {

    constructor() {
    }

    async getAllFundRaisers() {
        const fundRaisers = await FundRaiser.find({});
        console.log('fund raisers:::', fundRaisers);
        return fundRaisers;
    }

    async getFundRaisers(teamID) {
        const fundRaisers = await FundRaiser.find({teamID : teamID});
        console.log('fund raisers:::', fundRaisers);
        return fundRaisers;
    }

    async getByID(fundRaiserID) {
        const fundRaiser = await FundRaiser.findOne({ ID: fundRaiserID });
        console.log('the fund raiser:::', fundRaiser);
        return fundRaiser;
    }

    async createFundRaiser(fundRaiser) {
        let data = {};
        try {
            data = await FundRaiser.create(fundRaiser);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateFundRaiser(id, sum) {
        let data = {};
        let filter = { ID: id };
        let isSuccess = false;
        try {
            data = await FundRaiser.findOne(filter);
            data.goal = sum;
            await FundRaiser.updateOne(filter, data)
            isSuccess = true
        } catch (err) {
            logger.error('Error::' + err);
        }
        return isSuccess;
    }

    // async deleteFundRaiser(fundRaiserID) {
    //     let data = {};
    //     try {
    //         data = await FundRaiser.deleteOne({ ID: fundRaiserID });
    //     } catch (err) {
    //         logger.error('Error::' + err);
    //     }
    //     return { status: `${data.deletedCount > 0 ? true : false}` };
    // }

}

module.exports = new fundRaisersRepository();