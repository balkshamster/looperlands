const LOOPWORMS_LOOPQUEST_BASE_URL = process.env.LOOPWORMS_LOOPQUEST_BASE_URL;
const API_KEY = process.env.LOOPWORMS_API_KEY;
const axios = require('axios');

updateExperience = async function(walletId, nftId, xp) {
    const options = {
        headers: {
          'X-Api-Key': API_KEY
        },
      };
    let url = `${LOOPWORMS_LOOPQUEST_BASE_URL}/SaveExperience.php?WalletID=${walletId}&NFTID=${nftId}&Experience=${xp}`;
    const responseData = await axios.get(url, options);
    const updatedXp = parseInt(responseData.data);
    return updatedXp;
}

getCharacterData = async function(wallet, nft) {
    const options = {
      method: 'POST',
      headers: {
        'X-Api-Key': API_KEY
      },
    };
    try {
        const responseData = await axios.get(`${LOOPWORMS_LOOPQUEST_BASE_URL}/Load.php?NFTID=${nft}&WalletID=${wallet}`, options);
        //console.log("ResponseData from Loopworms: ", responseData.status, responseData.text, responseData.data);
        return responseData.data;
    } catch (error) {
        console.error(error);
        return {"error": "Error loading character data"};
    }

}

saveCharacterData = async function(wallet, nft, saveGame) {
    const options = {
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json'
      }
    };
    try {
        const url = `${LOOPWORMS_LOOPQUEST_BASE_URL}/Save.php?NFTID=${nft}&WalletID=${wallet}`
        const responseData = await axios.post(url, saveGame, options);
        //console.log("ResponseData from Loopworms: ", responseData.status, responseData.text, responseData.data);
        return responseData.data;
    } catch (error) {
        console.error(error);
        return {"error": "Error saving character data"};
    }
}

exports.updateExperience = updateExperience;
exports.saveCharacterData = saveCharacterData;
exports.getCharacterData = getCharacterData;