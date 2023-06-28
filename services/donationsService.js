const donationsRepository  = require('../repositories/donationsRepository');

class donationService {

    constructor() {}

    async getAllDonations() {
        return await donationsRepository.getAllDonations();
    }

    async createDonation(donation) {
        console.log("new donation: "+donation.amount);
        return await donationsRepository.createDonation(donation);
    }

    async deleteDonation(donationID) {
        console.log(donationID);
        return await donationsRepository.deleteDonation(donationID);
    }

    async getDonations(fundRaiserID) {
        return await donationsRepository.getDonations(fundRaiserID);
    }
}

module.exports = new donationService();