const createResponse = require('../../utils/createResponse');

module.exports = {

    get: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/get/${req.params.id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500
        };
        return await createResponse(options);
    },

    getByUsername: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/get`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            params: { ...req.query }
        };
          
        return await createResponse(options);
    },

    getAllVolunteers: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/all`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
        };
          
        return await createResponse(options);
    },

    getMedicalInfo: async req => {
        const options = {
            method: 'get',
            url: `/volunteer/medical_info/${req.params.volunteer_id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500
        };
        return await createResponse(options);
    },

    create: async req => {
        const options = {
            method: 'post',
            url: `/volunteer/create`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        return await createResponse(options);
    },

    importCsv: async req => {
        const options = {
            method: 'post',
            url: `/volunteer/import`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: req.file,
            headers: req.headers
        };

        console.log("FORMATTED REQUEST\n");
        console.log(options);

        return await createResponse(options);
    },
    
    setMedicalInfo: async req => {
        const options = {
            method: 'post',
            url: `/volunteer/medical_info/${req.params.volunteer_id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };

        return await createResponse(options);
    },

    update: async req => {
        const options = {
            method: 'patch',
            url: `/volunteer/update/${req.params.id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500,
            data: { ...req.body }
        };
          
        return await createResponse(options);
    },

    updatePassword: async req => {
        const options = {
            method: 'put',
            url: `/volunteer/auth/update`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 5000,
            data: { ...req.body }
        };
          
        return await createResponse(options);
    },

    delete: async req => {
        const options = {
            method: 'delete',
            url: `/volunteer/delete/${req.params.id}`,
            baseURL: "http://" + process.env.VA_IP + ":" + process.env.VA_PORT,
            timeout: 3500
        };

        return await createResponse(options);
    }
}


