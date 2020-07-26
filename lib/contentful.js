import sanitizeContentfulData from "../util/sanitizeContentfulData";

const BASE_URL = "https://cdn.contentful.com";
const SPACE_ID = "ch9w92me3811";
const ENVIRONMENT_NAME = "master";
const CONTENT_TYPE = "wineData";
const CONTENTFUL_ACCESS_TOKEN = "q0h55-2EFD2NnujZdCaI-dCFGljZR4Bj99YpkvPUYOE";

export default class Contentful {
  constructor() {
    this.baseUrl = BASE_URL;
    this.spaceId = SPACE_ID;
    this.envName = ENVIRONMENT_NAME;
    this.contentType = CONTENT_TYPE;
    this.accessToken = CONTENTFUL_ACCESS_TOKEN;
  }

  async getWines() {
    const res = await fetch(
      `${this.baseUrl}/spaces/${this.spaceId}/environments/${this.envName}/entries?access_token=${this.accessToken}&content_type=${this.contentType}`
    );

    const data = await res.json();
    if (!data.items) throw new Error("getWines responce error");

    return sanitizeContentfulData(data);
  }

  async getWine(id) {
    const res = await fetch(
      `${this.baseUrl}/spaces/${this.spaceId}/environments/${this.envName}/entries?access_token=${this.accessToken}&content_type=${this.contentType}`
    );

    const data = await res.json();
    if (!data.items) throw new Error("getWine responce error");

    return sanitizeContentfulData(data).find(({ id: _id }) => id == _id);
  }
}
