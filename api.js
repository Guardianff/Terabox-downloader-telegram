const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://teraboxvideodownloader.nepcoderdevs.workers.dev/?url={url}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
