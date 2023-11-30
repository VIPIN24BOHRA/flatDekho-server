const { setUserSubscribed } = require("./modules/firebase/database.js");

const phone_numbers = ["917678455727"];
const delay = async (t) => new Promise((res) => setTimeout(res, t));

const main = async () => {
  for (let i = 0; i < phone_numbers.length; i++) {
    console.log("subscribing user", i + 1);
    console.time("subs");
    await setUserSubscribed(phone_numbers[i]);
    await delay(1000);
    console.timeEnd("subs");
  }
};

(async () => {
  console.log("starting main");

  await main();
  console.log("stop main");
})();

console.log(phone_numbers.length);
