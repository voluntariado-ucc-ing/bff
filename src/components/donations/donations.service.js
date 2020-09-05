const { Response, ResponseError } = require('../../utils/response.model');
const axios = require('axios');

module.exports = {

    getDonators: async req => {
        const options = {
            method: 'get',
            url: `/donations/donators`,
            baseURL: "http://" + process.env.DA_IP + ":" + process.env.DA_PORT,
            timeout: 3500,
            params: { ...req.query }
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            console.error("Error response:");
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
    },

    getDonation: async req => {
        const options = {
            method: 'get',
            url: `/donations/get/${req.params.donation_id}`,
            baseURL: "http://" + process.env.DA_IP + ":" + process.env.DA_PORT,
            timeout: 3500
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            console.error("Error response:");
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
    },

    createDonation: async req => {
        const options = {
            method: 'post',
            url: `/donations/create`,
            baseURL: "http://" + process.env.DA_IP + ":" + process.env.DA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            console.error("Error response:");
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }   
    }
}