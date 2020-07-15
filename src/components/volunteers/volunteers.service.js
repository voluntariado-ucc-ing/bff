const { Response, ResponseError } = require('../../utils/response.model');
const axios = require('axios');

module.exports = {

    get: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/get/${req.params.id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500
        };
          
        return await axios(options);
    },

    getByUsername: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/get`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            params: { ...req.query }
        };
          
        return await axios(options);
    },

    getAllVolunteers: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/all`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
        };
          
        return await axios(options);
    },

    getMedicalInfo: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/medical_info/${req.params.volunteer_id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500
        };
          
        return await axios(options);
    },

    create: async req => {
        const options = {
            method: 'post',
            url: `/volunteer/create`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        return await axios(options);
    },

    importCsv: async req => {
        const options = {
            method: 'post',
            url: `/volunteer/import`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        return await axios(options)
    },
    
    setMedicalInfo: async req => {
        const options = {
            method: 'post',
            url: `/volunteer/medical_info/${req.params.volunteer_id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        return await axios(options)
    },

    update: async req => {
        const options = {
            method: 'put',
            url: `/volunteer/update/${req.params.id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        return await axios(options)
    },

    updatePassword: async req => {
        const options = {
            method: 'put',
            url: `/volunteer/auth/update`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        return await axios(options)
    },

    delete: async req => {
        const options = {
            method: 'delete',
            url: `/volunteer/delete/${req.params.id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500
        };
          
        return await axios(options)
    }
}


