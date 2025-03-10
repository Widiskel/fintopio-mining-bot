import { HttpsProxyAgent } from "https-proxy-agent";
import { Helper } from "../utils/helper.js";
import logger from "../utils/logger.js";

export class API {
  constructor(query, url, proxy) {
    this.url = url;
    this.origin = url;
    this.ua = Helper.randomUserAgent();
    this.query = query;
    this.proxy = proxy;
  }

  generateHeaders(token) {
    const headers = {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9,id;q=0.8",
      "Content-Type": "application/json",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      Host: this.host,
      Origin: this.origin,
      Referer: this.origin + "/",
    };

    if (token) {
      headers.Authorization = "Bearer " + token;
    }

    return headers;
  }

  async fetch(endpoint, method, token, body = {}, additionalHeader = {}) {
    try {
      const url = `${this.url}${endpoint}`;
      const headers = {
        ...additionalHeader,
        ...this.generateHeaders(token),
      };
      const options = {
        headers,
        method,
      };
      if (this.proxy) {
        options.agent = new HttpsProxyAgent(this.proxy);
      }
      logger.info(`${method} : ${url} ${this.proxy ? this.proxy : ""}`);
      logger.info(`Request Header : ${JSON.stringify(headers)}`);

      if (method !== "GET") {
        options.body = `${JSON.stringify(body)}`;
        logger.info(`Request Body : ${options.body}`);
      }

      const res = await fetch(url, options);

      logger.info(`Response : ${res.status} ${res.statusText}`);
      if (res.ok || res.status == 400 || res.status == 403) {
        const contentType = res.headers.get("content-type");
        let data;
        if (contentType && contentType.includes("application/json")) {
          data = {
            ...(await res.json()),
            status: res.status,
          };
        } else {
          data = {
            status: res.status,
            message: await res.text(),
          };
        }

        if (res.ok) data.status = 200;
        logger.info(`Response Data : ${JSON.stringify(data)}`);
        return data;
      } else {
        throw new Error(`${res.status} - ${res.statusText}`);
      }
    } catch (err) {
      logger.error(`Error : ${err.message}`);
      throw err;
    }
  }
}
