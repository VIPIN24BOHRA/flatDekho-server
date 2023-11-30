const axios = require("axios");

const API_KEY = "qs0dfpvxqlmsophnbhosewev7sneicmc";
const PHONE_ID = "918700379177";

const sendTemplateMessage = async (to: any, templateId: string) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    apikey: API_KEY,
  };

  const data = {
    channel: "whatsapp",
    source: PHONE_ID ?? "",
    destination: to,
    "src.name": "FaltDekho",
    template: `{"id":"${templateId}","params":[]}`,
  };

  // console.log(data);

  try {
    const res = await axios
      .post(
        "https://api.gupshup.io/wa/api/v1/template/msg",
        new URLSearchParams(data),
        { headers }
      )
      .catch((e) => {
        console.log("Whatsapp service failed", e);
      });
    console.log(res.status, res.data);
    console.log(res?.status === 202 ? "success" : "failure");
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { sendTemplateMessage };
