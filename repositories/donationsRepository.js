const { Donation } = require('../models/donation');
const logger = console;

class donationRepository {

    constructor() {
    }

    async getAllDonations() {
        const donations = await Donation.find();
        console.log('donations:::', donations);
        return donations;
    }

    async getDonations(fundRaiserID) {
        const donations = await Donation.find({fundRaiserID: fundRaiserID});
        console.log('donations:::', donations);
        return donations;
    }

    async createDonation(donation) {
        console.log("creat donation");
        let data = {};
        console.log(donation);
        try {
            data = await Donation.create(donation);
            console.log("creat donation1");
            console.log(data);

        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteDonation(donationID) {
        let data = {};
        console.log(donationID);
        try {
            data = await Donation.deleteOne({ ID: donationID });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new donationRepository();