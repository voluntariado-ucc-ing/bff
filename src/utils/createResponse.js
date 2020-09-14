const axios = require('axios');
const { Response } = require('./response.model');

module.exports = async (options) =>  {
    try {
        let response = await axios(options);
        return new Response(response.data, null, response.status);
    }
    catch (err){
        return new Response(
            null,
            err.response.data,
            err.response.data.status, 
        );
    }
}
