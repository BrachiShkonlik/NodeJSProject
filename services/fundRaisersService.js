const fundRaisersRepository = require('../repositories/fundRaisersRepository');

class fundRaisersService {

    constructor() { }

    async getAllFundRaisers() {
        return await fundRaisersRepository.getAllFundRaisers();
    }

    async getByID(fundRaiserID) {
        return await fundRaisersRepository.getByID(fundRaiserID);
    }

    async createFundRaiser(fundRaiser) {
        return await fundRaisersRepository.createFundRaiser(fundRaiser);
    }

    async updateFundRaiser(id, sum) {
        return await fundRaisersRepository.updateFundRaiser(id, sum);
    }

    async deleteFundRaiser(fundRaiserID) {
        return await fundRaisersRepository.deleteFundRaiser(fundRaiserID);
    }

    async isAdmin(fundRaiserID) {
        const user = await fundRaisersRepository.getByID(fundRaiserID);
        try { return user.admin; }
        catch { return false }
    }
}

module.exports = new fundRaisersService();