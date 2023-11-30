"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateMsgSchedular = void 0;
const { getAllRecentUser } = require("../firebase/database.js");
const { sendTemplateMessage } = require("../sendTemplate.js");
const INTERVAL_TIME = 1000 * 60 * 60;
const delay = async (t) => new Promise((res) => setTimeout(res, t));
const templateMsgSchedular = async () => {
    setInterval(async () => {
        const ts = new Date().getTime() - 5 * 24 * 60 * 60 * 1000;
        const users = await getAllRecentUser(ts);
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user && user.createdAt) {
                const tsDifference = new Date().getTime() - user.createdAt;
                let sendTemplateFlag = false;
                if (tsDifference >= 8 * 60 * 60 * 1000 &&
                    tsDifference <= 9 * 60 * 60 * 1000)
                    sendTemplateFlag = true;
                else if (tsDifference >= 16 * 60 * 60 * 1000 &&
                    tsDifference <= 17 * 60 * 60 * 1000)
                    sendTemplateFlag = true;
                if (tsDifference >= 32 * 60 * 60 * 1000 &&
                    tsDifference <= 33 * 60 * 60 * 1000)
                    sendTemplateFlag = true;
                if (tsDifference >= 48 * 60 * 60 * 1000 &&
                    tsDifference <= 49 * 60 * 60 * 1000)
                    sendTemplateFlag = true;
                if (tsDifference >= 72 * 60 * 60 * 1000 &&
                    tsDifference <= 73 * 60 * 60 * 1000)
                    sendTemplateFlag = true;
                if (tsDifference >= 96 * 60 * 60 * 1000 &&
                    tsDifference <= 97 * 60 * 60 * 1000)
                    sendTemplateFlag = true;
                if (sendTemplateFlag) {
                    await sendTemplateMessage(user.phoneNumber, "02f38725-1091-46eb-aaea-73d40b6fffdb");
                    await delay(1000);
                }
            }
        }
    }, INTERVAL_TIME);
};
exports.templateMsgSchedular = templateMsgSchedular;
//# sourceMappingURL=scheduleTemplate.js.map