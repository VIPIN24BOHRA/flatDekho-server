"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { templateMsgSchedular, } = require("./modules/service/scheduleTemplate.js");
const { sendTemplateMessage } = require("./modules/sendTemplate.js");
const fs = require("fs");
const path = require("path");
const logStream = fs.createWriteStream(path.join(__dirname, "../../logs.txt"), {
    flags: "a",
});
console.log = function (msg1, msg2) {
    logStream.write(`${msg1 ? JSON.stringify(msg1) + "\n" : ""}${msg2 ? JSON.stringify(msg2) + "\n" : ""}`);
};
(async () => {
    await templateMsgSchedular();
})();
const delay = async (t) => new Promise((res) => setTimeout(res, t));
(async () => {
    console.log("server up and running");
    await delay(5000);
    await sendTemplateMessage("916396623229", "02f38725-1091-46eb-aaea-73d40b6fffdb");
})();
//# sourceMappingURL=schedule.js.map