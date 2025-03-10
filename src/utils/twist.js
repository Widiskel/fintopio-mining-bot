import { Twisters } from "twisters";
import { Helper } from "./helper.js";
import logger from "./logger.js";
import { Fintopio } from "../core/fintopio.js";

class Twist {
  constructor() {
    /** @type  {Twisters}*/
    this.twisters = new Twisters();
  }

  /**
   * @param {string} acc
   * @param {Fintopio} fintopio
   * @param {string} msg
   * @param {string} delay
   */
  log(msg = "", acc = "", fintopio = new Fintopio(), delay) {
    // console.log(acc);
    if (delay == undefined) {
      logger.info(`${acc.id} - ${msg}`);
      delay = "-";
    }

    const profile = fintopio.user ?? {};
    const balance = profile.balance ?? "-";
    const farming = fintopio.farming ?? {};
    const farmingTime = farming.timings ?? {};
    const farmEndTime = farmingTime.finish ?? "-";

    this.twisters.put(acc.id, {
      text: `
================= Account ${acc.id} =============
Name         : ${acc.firstName ?? "Unamed"} ${acc.lastName}
Hold Balance : ${balance}
Farming      : ${
        farmEndTime != "-"
          ? Helper.msToTime(farmEndTime - Date.now())
          : farmEndTime
      }

Status : ${msg}
Delay : ${delay}
==============================================`,
    });
  }
  /**
   * @param {string} msg
   */
  info(msg = "") {
    this.twisters.put(2, {
      text: `
==============================================
Info : ${msg}
==============================================`,
    });
    return;
  }

  clearInfo() {
    this.twisters.remove(2);
  }

  clear(acc) {
    this.twisters.remove(acc);
  }
}
export default new Twist();
