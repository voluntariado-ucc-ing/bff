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
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
        
    },

    getByUsername: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/get`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            params: { ...req.query }
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
    },

    getAllVolunteers: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/all`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
    },

    getMedicalInfo: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/medical_info/${req.params.volunteer_id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
    },

    create: async req => {
        const options = {
            method: 'post',
            url: `/volunteer/create`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
    },

    importCsv: async req => {
        const options = {
            method: 'post',
            url: `/volunteer/import`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
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
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
    },

    updatePassword: async req => {
        const options = {
            method: 'put',
            url: `/volunteer/auth/update`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
    },

    delete: async req => {
        const options = {
            method: 'delete',
            url: `/volunteer/delete/${req.params.id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500
        };
          
        try {
            let response = await axios(options);
            return response;
        }
        catch (err){
            
            return new ResponseError(err.response.status, err.response.data.error, err.response.data.message)
        }
    }
}


