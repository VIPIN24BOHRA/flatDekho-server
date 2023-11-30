"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { sendTemplateMessage } = require("./modules/sendTemplate.js");
const phone_numbers = [
    "917290084478",
    "917298494949",
    "917355131268",
    "917370011306",
    "917409495444",
    "917532089893",
    "917678199853",
    "917700909091",
    "917827239275",
    "917827832100",
    "917876192828",
    "917979783705",
    "917982455848",
    "917982811120",
    "917982870068",
    "919412908865",
    "918076365464",
    "918126522383",
    "918130430054",
    "918130448747",
    "918130902081",
    "918168318413",
    "918168324194",
    "918168517965",
    "918178380604",
    "918178415227",
    "918285626445",
    "918287067713",
    "918368084578",
    "918376081243",
    "918447106892",
    "918447497959",
    "918447644183",
    "918448910893",
    "918448911204",
    "918595407065",
    "916396623229",
];
const delay = async (t) => new Promise((res) => setTimeout(res, t));
const main = async () => {
    let len = phone_numbers.length;
    console.log("total number of users", len);
    for (let i = 0; i < len; i++) {
        console.time("send template");
        console.log("handling user", i);
        await sendTemplateMessage(phone_numbers[i], "02f38725-1091-46eb-aaea-73d40b6fffdb");
        console.time("delay");
        await delay(1000);
        console.timeEnd("delay");
        console.timeEnd("send template");
    }
};
(async () => {
    console.log("calling  main");
    await main();
    console.log("stop main");
})();
setInterval(() => {
    console.log("hello ping pong!");
}, 10000);
//# sourceMappingURL=template.js.map