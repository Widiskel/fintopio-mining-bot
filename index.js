import { Config } from "./config/config.js";
import { proxyList } from "./config/proxy_list.js";
import { Fintopio } from "./src/core/fintopio.js";
import { Telegram } from "./src/core/telegram.js";
import { Helper } from "./src/utils/helper.js";
import logger from "./src/utils/logger.js";
import twist from "./src/utils/twist.js";

async function operation(acc, query, queryObj, proxy) {
  try {
    const fintopio = new Fintopio(acc, query, queryObj, proxy);
    await fintopio.login();
    await fintopio.getUser(true);
    await fintopio.checkIn();
    await fintopio.startFarming();
    await fintopio.getDiamondState();
    if (fintopio.diamond.state == "available") {
      await fintopio.claimDiamondReward();
    } else {
      await Helper.delay(
        3000,
        acc,
        `Diamond Breaking is currently unavailable...`,
        fintopio
      );
    }
    await fintopio.getTasks(true);

    for (const task of fintopio.tasks) {
      if (task.status == "available") {
        await fintopio.startTask(task);
      } else if (task.status == "verified") {
        await fintopio.claimTask(task);
      } else {
        continue;
      }
    }

    const claimFarmingTime = fintopio.farming.timings.finish;
    const nextDiamondTime = fintopio.diamond.timings.nextAt;
    const nextLoop = Date.now() + 60000 * 60;

    const delayToClaimFarming = claimFarmingTime - Date.now();
    const delayToNextDiamond = nextDiamondTime - Date.now();
    const delayToNextLoop = nextLoop - Date.now();

    const shortestDelay = Math.min(
      delayToClaimFarming,
      delayToNextDiamond,
      delayToNextLoop
    );

    await Helper.delay(
      shortestDelay,
      acc,
      `Delaying for ${Helper.msToTime(shortestDelay)} before restarting`,
      fintopio
    );

    if (delayToClaimFarming <= 0) {
      await Helper.delay(
        Helper.random(3000, 10000),
        acc,
        `Its time to claim farming reward!!!`,
        fintopio
      );
      await fintopio.claimFarming();
    }
    await Helper.delay(
      5000,
      acc,
      `Account ${acc.id} Processing Complete, Restarting in 5 seconds`,
      fintopio
    );
    await operation(acc, query, queryObj, proxy);
  } catch (error) {
    twist.clear(acc);
    twist.clearInfo();
    await Helper.delay(
      10000,
      acc,
      `Error : ${error.message}, Retrying after 10 Second`
    );
    await operation(acc, query, queryObj, proxy);
  }
}

let init = false;
async function startBot() {
  return new Promise(async (resolve, reject) => {
    try {
      logger.info(`BOT STARTED`);

      const tele = await new Telegram();
      if (init == false) {
        await tele.init();
        init = true;
      }

      const accountList = Helper.getSession("accounts");
      const paramList = [];

      if (proxyList.length > 0) {
        if (accountList.length != proxyList.length) {
          reject(
            `You have ${accountList.length} Session but you provide ${proxyList.length} Proxy`
          );
        }
      }

      for (const acc of accountList) {
        const accIdx = accountList.indexOf(acc);
        const proxy = proxyList.length > 0 ? proxyList[accIdx] : undefined;
        if (!acc.includes("query")) {
          await tele.useSession("accounts/" + acc, proxy);
          tele.session = acc;
          const user = await tele.client.getMe();
          const query = await tele
            .resolvePeer()
            .then(async () => {
              return await tele.initWebView();
            })
            .catch((err) => {
              throw err;
            });

          const queryObj = Helper.queryToJSON(query);
          await tele.disconnect();
          paramList.push([user, query, queryObj, proxy]);
        } else {
          const query = Helper.readQueryFile("accounts/" + acc + "/query.txt");
          const queryObj = Helper.queryToJSON(query);
          const user = queryObj.user;
          user.firstName = user.first_name;
          user.lastName = user.last_name;
          paramList.push([user, query, queryObj, proxy]);
        }
      }

      const promiseList = paramList.map(async (data) => {
        await operation(data[0], data[1], data[2], data[3]);
      });

      await Promise.all(promiseList);
      resolve();
    } catch (error) {
      logger.info(`BOT STOPPED`);
      logger.error(JSON.stringify(error));
      reject(error);
    }
  });
}

(async () => {
  try {
    logger.clear();
    logger.info("");
    logger.info("Application Started");
    console.log("Fintopio BOT");
    console.log("By : Widiskel");
    console.log("Dont forget to run git pull to keep up to date");
    await startBot();
  } catch (error) {
    twist.clear();
    twist.clearInfo();
    console.log("Error During executing bot", error);
    await startBot();
  }
})();
