const apisauce = require('apisauce');
const cheerio = require('cheerio')
const BASE_API_URL = 'https://google.com';
const api = apisauce.create({
  baseURL: BASE_API_URL,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
});

api.get("/").then(res=> {
    console.time("cheerio");
    const $ = cheerio.load(res.data);
    console.timeEnd("cheerio");
});