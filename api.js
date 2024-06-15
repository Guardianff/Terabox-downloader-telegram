const axios = require("axios");

async function getDetails(url) {
    try {
        const response = await axios.get(
            `https://teraboxvideodownloader.nepcoderdevs.workers.dev/?data=${url}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
