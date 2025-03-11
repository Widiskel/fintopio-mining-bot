import { API } from "../api/api.js";
import { Helper } from "../utils/helper.js";
import logger from "../utils/logger.js";

export class Fintopio extends API {
  constructor(account, query, queryObj, proxy) {
    super(query, "https://api.fintopio.com", proxy);
    this.account = account;
    this.query = query;
    this.queryObj = queryObj;
  }

  async login() {
    try {
      await Helper.delay(500, this.account, `Try to Login...`, this);
      const res = await this.fetch(
        `/auth/telegram?${this.query}`,
        "GET",
        undefined
      );

      await Helper.delay(1000, this.account, `Successfully Login`, this);
      this.token = res.token;
    } catch (error) {
      throw error;
    }
  }

  async getUser(msg = false) {
    try {
      if (msg)
        await Helper.delay(500, this.account, `Getting user data...`, this);
      const res = await this.fetch("/fast/init", "GET", this.token);

      if (res.status == 200) {
        if (msg)
          await Helper.delay(
            1000,
            this.account,
            `Successfully Get user Data`,
            this
          );

        this.user = res.profile;
        this.balance = res.balance.balance;
      } else {
        await Helper.delay(5000, this.account, `Error : ${res.message}`, this);
      }
    } catch (error) {
      throw error;
    }
  }
  async startFarming() {
    try {
      await Helper.delay(500, this.account, `Starting farm...`, this);
      const res = await this.fetch("/farming/farm", "POST", this.token);

      if (res.status == 200) {
        await Helper.delay(
          1000,
          this.account,
          `Successfully Start Farming, Farming will be end in next ${Helper.msToTime(
            res.timings.finish
          )}`,
          this
        );

        this.farming = res;
      } else {
        await Helper.delay(1000, this.account, res.message, this);
        await this.getFarmStatus();
      }
    } catch (error) {
      throw error;
    }
  }
  async claimFarming() {
    try {
      await Helper.delay(500, this.account, `Claiming farming reward`, this);
      const res = await this.fetch("/farming/claim", "POST", this.token);

      if (res.status == 200) {
        await Helper.delay(
          3000,
          this.account,
          `Successfully claim farming reward...`,
          this
        );

        await this.getUser();
        await this.getFarmStatus();
      } else {
        await Helper.delay(3000, this.account, res.message, this);
      }
    } catch (error) {
      throw error;
    }
  }
  async checkIn() {
    try {
      await Helper.delay(500, this.account, `Try To Check In`, this);
      const res = await this.fetch("/daily-checkins", "POST", this.token);

      if (res.status == 200) {
        await Helper.delay(
          1000,
          this.account,
          `Successfully Check In...`,
          this
        );
      } else {
        await Helper.delay(2000, this.account, res.message, this);
      }
      await this.getUser();
    } catch (error) {
      throw error;
    }
  }
  async getFarmStatus() {
    try {
      const res = await this.fetch("/farming/state", "GET", this.token);

      if (res.status == 200) {
        this.farming = res;
      } else {
        await Helper.delay(3000, this.account, res.message, this);
      }
    } catch (error) {
      throw error;
    }
  }
  async getDiamondState() {
    try {
      const res = await this.fetch("/clicker/diamond/state", "GET", this.token);

      if (res.status == 200) {
        this.diamond = res;
      } else {
        await Helper.delay(3000, this.account, res.message, this);
      }
    } catch (error) {
      throw error;
    }
  }

  async playSpaceTapper() {
    try {
      const score = Helper.random(1000, 2500);
      const res = await this.fetch(
        "/hold/space-tappers/add-new-result",
        "POST",
        this.token,
        {
          score: score,
          holdPoints: score * 2,
          collectedGems: [],
          additionalGame: false,
          additionalLiveBoosts: 0,
          rocketSkins: [],
        }
      );

      if (res.status == 200) {
        await Helper.delay(
          3000,
          this.account,
          `Successfully play space tapper with score ${score}`,
          this
        );
      } else {
        await Helper.delay(
          3000,
          this.account,
          `Space Tapper ${res.message}`,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async claimDiamondReward() {
    try {
      await Helper.delay(
        Helper.random(10000, 20000),
        this.account,
        `Try To Breaking And Claim Diamond`,
        this
      );
      const res = await this.fetch(
        "/clicker/diamond/complete",
        "POST",
        this.token,
        { diamondNumber: this.diamond.diamondNumber }
      );

      if (res.status == 200) {
        await Helper.delay(
          1000,
          this.account,
          `Successfully claiming diamond breaking reward...`,
          this
        );
        await this.getDiamondState();
        await this.getUser();
      } else {
        await Helper.delay(2000, this.account, res.message, this);
      }
      await this.getUser();
    } catch (error) {
      throw error;
    }
  }
  async getTasks(msg) {
    try {
      if (msg)
        await Helper.delay(
          500,
          this.account,
          `Getting available tasks....`,
          this
        );
      const res = await this.fetch("/hold/tasks", "GET", this.token);

      if (res.status == 200) {
        this.tasks = res.tasks;
        if (msg)
          await Helper.delay(
            1000,
            this.account,
            `Successfully get available task`,
            this
          );
      } else {
        await Helper.delay(3000, this.account, res.message, this);
      }
    } catch (error) {
      throw error;
    }
  }
  async claimTask(task) {
    try {
      await Helper.delay(
        500,
        this.account,
        `Claiming task ${task.slug}...`,
        this
      );
      const res = await this.fetch(
        `/hold/tasks/${task.id}/claim`,
        "POST",
        this.token
      );

      if (res.status == 200) {
        await Helper.delay(
          1000,
          this.account,
          `Task ${task.slug} reward claimed successfully, got ${task.rewardAmount} Hold Point.`,
          this
        );
        await this.getUser();
        await this.getTasks();
      } else {
        await Helper.delay(3000, this.account, res.message, this);
      }
    } catch (error) {
      throw error;
    }
  }
  async startTask(task) {
    try {
      await Helper.delay(
        500,
        this.account,
        `Starting task ${task.slug}...`,
        this
      );
      const res = await this.fetch(
        `/hold/tasks/${task.id}/start`,
        "POST",
        this.token
      );

      if (res.status == 200) {
        await Helper.delay(
          1000,
          this.account,
          `Task ${task.slug} Started`,
          this
        );
        await this.getTasks();
        await this.claimTask(task);
      } else {
        await Helper.delay(3000, this.account, res.message, this);
      }
    } catch (error) {
      throw error;
    }
  }
}
