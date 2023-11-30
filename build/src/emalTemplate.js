"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { sendTemplateMessage } = require("./modules/sendTemplate.js");
const phone_numbers = [
    "917908485370",
    "917977596656",
    "917982443998",
    "918099992346",
    "918130326334",
    "918130817389",
    "918178946128",
    "918360653861",
    "918447832172",
    "918510888897",
    "918510999896",
    "918527463710",
    "918527559545",
    "918527718477",
    "918527862377",
    "918527875917",
    "918527876878",
    "918586888685",
    "918588003954",
    "918588018887",
    "918691884423",
    "918793314518",
    "918800960260",
    "918826923546",
    "918830809057",
    "918851540460",
    "918855958528",
    "918882489932",
    "918888883815",
    "918904043434",
    "919015708792",
    "919140819166",
    "919209253199",
    "919211979210",
    "919311974843",
    "919313787639",
    "919321563644",
    "919391292735",
    "919392292649",
    "919541950041",
    "919560425941",
    "919560786369",
    "919582251153",
    "919599665501",
    "919643491818",
    "919650111437",
    "919650238034",
    "919650256872",
    "919650271271",
    "919650982279",
    "919711060635",
    "919711926714",
    "919810264460",
    "919810666999",
    "919810709158",
    "919810779522",
    "919810900051",
    "919810963466",
    "919811034033",
    "919811073422",
    "919811140447",
    "919811215842",
    "919811221252",
    "919811982112",
    "919818019034",
    "919818360069",
    "919871515452",
    "919871713334",
    "919873040912",
    "919873364103",
    "919873573388",
    "919873737871",
    "919873772357",
    "919873778100",
    "919873829990",
    "919891194111",
    "919891269210",
    "919891382105",
    "919891963738",
    "919892994125",
    "919899406328",
    "919899586149",
    "919899667372",
    "919899988019",
    "919910001928",
    "919910006542",
    "919911115868",
    "919911172540",
    "919953455714",
    "919953587708",
    "919971805141",
    "919991867760",
    "919999131889",
    "919999453225",
    "919999457608",
    "919999519982",
    "919999788868",
    "919999846304",
    "919999892202",
    "918130732120",
    "919873281128",
    "919899977090",
    "919811139332",
    "919871157078",
    "919871852222",
    "919540800900",
    "919810101073",
    "919818019606",
    "919810086340",
    "919910477182",
    "919811313678",
    "917701970004",
    "919810555617",
    "919810257475",
    "919810629728",
    "918010203669",
    "919810200032",
    "919310510056",
    "919810991177",
    "919990901473",
    "918860061001",
    "919811422554",
    "919250575377",
    "14374381249",
    "917007536513",
    "917042039815",
    "917065787150",
    "917428130597",
    "917586941686",
    "917600116368",
    "917837230051",
    "917838444472",
    "917999460030",
    "918010523030",
    "918076396961",
    "918080001025",
    "918130006727",
    "918130799876",
    "918178120310",
    "918287499804",
    "918376939893",
    "918445500341",
    "918447850975",
    "918586941916",
    "918587847839",
    "918588818063",
    "918700343477",
    "918700565304",
    "918750239090",
    "918800996545",
    "918810574955",
    "918851329845",
    "918860528882",
    "918882030348",
    "919015715707",
    "919140279281",
    "919205104393",
    "919211551342",
    "919212447224",
    "919216470567",
    "919250185185",
    "919266622005",
    "919306202744",
    "919311028883",
    "919313805086",
    "919350006969",
    "919350381447",
    "919350415000",
    "919350975595",
    "919413312349",
    "919416097943",
    "919451437469",
    "919560121616",
    "919582680667",
    "919599204040",
    "919599552797",
    "919625198044",
    "919625502187",
    "919643306039",
    "919643563186",
    "919643580009",
    "919650026005",
    "919650776996",
    "919650947509",
    "919654148807",
    "919654400015",
    "919654950379",
    "919667959184",
    "919716554044",
    "919718813739",
    "919728292999",
    "919769768850",
    "919773707677",
    "919799557755",
    "919810025455",
    "919810057774",
    "919810094705",
    "919810124300",
    "919810189852",
    "919810205408",
    "916396623229",
];
const delay = async (t) => new Promise((res) => setTimeout(res, t));
const main = async () => {
    let len = phone_numbers.length;
    console.log("total number of users", len);
    //   for (let i = 0; i < len; i++) {
    console.time("send template");
    // console.log("handling user", i);
    await sendTemplateMessage("916396623229", "b19b9c94-cc29-475e-8c8b-f578e81be2b3");
    console.time("delay");
    await delay(1000);
    console.timeEnd("delay");
    console.timeEnd("send template");
    //   }
};
(async () => {
    console.log("calling  main");
    await main();
    console.log("stop main");
})();
setInterval(() => {
    console.log("hello ping pong!");
}, 10000);
//# sourceMappingURL=emalTemplate.js.map