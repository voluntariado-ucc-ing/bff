const createResponse = require('../../utils/createResponse');

module.exports = {

    getDonators: async req => {
        const options = {
            method: 'get',
            url: `/donations/donators`,
            baseURL: "http://" + process.env.DA_IP + ":" + process.env.DA_PORT,
            timeout: 3500,
            params: { ...req.query }
        };
          
        return await createResponse(options);
    },

    getDonation: async req => {
        const options = {
            method: 'get',
            url: `/donations/get/${req.params.donation_id}`,
            baseURL: "http://" + process.env.DA_IP + ":" + process.env.DA_PORT,
            timeout: 3500
        };
          
        return await createResponse(options);
    },

    getDonations: async req => {
        const options = {
            method: 'get',
            url: `/donations/all`,
            baseURL: "http://" + process.env.DA_IP + ":" + process.env.DA_PORT,
            timeout: 3500,
            params: { ...req.query }
        };
        return await createResponse(options);
    },

    createDonation: async req => {
        const options = {
            method: 'post',
            url: `/donations/create`,
            baseURL: "http://" + process.env.DA_IP + ":" + process.env.DA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        return await createResponse(options);
    }
}