const axios = require("axios");
const url =
  "https://api.telegram.org/bot739407650:AAHSns6g9UeSuRAIpjQbpB6CaK404jUIxPc/sendMessage";

class Telegram {
  postMessage(chat_id, text) {
    console.log("Send message to Telegram");
    return axios
      .post(url, {
        headers: {
          "Content-Type": "application/json"
        },
        chat_id: chat_id,
        text: text
      })
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
        return Promise.reject("Fetch did not succeed");
      });
  }
}

module.exports = new Telegram();
