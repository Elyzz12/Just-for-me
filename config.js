//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "+234 814 993 9219";
global.owner = process.env.OWNER_NUMBER || "+234 814 993 9219";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "+234 814 993 9219";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01jZWZJb3BNeldIeEdNMGdyanFML01zN2x3UkViTnFDQnZiWU53M2ozTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVZPVDUzTDcwcFBuR2c2TkUzRTVsay8vajFFeU0xNmRSeFNOZFhaaTBBND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQUx3NjNMMmNJd1ozTWdLMTllL1BPNFQ2dDhtMUJLN0pZWmF0WU5NbkdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrenRVR1NrM3dRTmJkbXBHcmluT1hOcUtJS2Z6Zml6TG1aQkVYVmZzalZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEUzJQbXg3NkNmNzE3L25CaWhnR0laS1duckV2UFNHaE9BQkwxMDN1a3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhUK29WMVB3cVJ1U0xUWWlIbCtvSXpMVlRCcitPbXFmdHRhZlNEanZQV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0U1QlNySEdqcExiL3lHa2FBeWwva1NMWllWRjkxbE1qUmRKaUs4M1Zucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWZSVVpxNktHMGRycGE0UWVxN2hJYzBXcitIVTU1MDRjRW5nRTJneXdtRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxzNXVSbGE1aWZOQnZDWUxrUHErbllSU3o3aXFGREovMkI5aXBINlBjTnBVMkJ2ZGtxWTZRU1lpdk5xZ1g3dGsrL082WGVnS3A2RU1tRG9KOFQrd2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJrZU9VeURtaG5vTVpEYXRlaFBQTjRhaFZVUnVwK3lFc2p4VXlmRUg2bjU4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3QjMtNUR6NFFaS1dCLW53VjB0bU9RIiwicGhvbmVJZCI6ImJjZTYzZjk4LTEzYTctNDY1NC1iNzY1LWFkNzIwY2RjYWFiYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4TnUySUhUdm1KUWlJeVB5WU9iWUJlS0I5cE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEgxOTlLV1BidUI2VkxWajlxRjFKN2cveHhnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY2VE5ZTFk1IiwibWUiOnsiaWQiOiIyMzQ4MTQ5OTM5MjE5OjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BUOTB2WUVFUFRjeExrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJ0RGN0cjk2RVNFT0ZYMmZnWEhMbmV5dzBIL04xVGRrMlcybTVHOVd3Z3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJOTkxvZDN0eUZmdlhKWTljS25yME1pOG9zenJPWnNyQkNZcnp0aXdSa1Rwc2J5S0k3Y2pTaTF2c1B1bnY3OWJFWE50K1JqbExPem50Z0JQY2pibkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqTks4SFpWblpySE42aG1DdUxvWXNLMkEwRHdqVWVtMUxiZmpZMGVYV1RYb21IRUVFQUxjZFJ6NXdpTkFIWUFNdisvbWtaMVB6VWpJUkRQUlgzSkNpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDk5MzkyMTk6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkclEzTGEvZWhFaERoVjluNEZ4eTUzc3NOQi96ZFUzWk5sdHB1UnZWc0lMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMjc2NDE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZ5OCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`AETHERIST`",
  author: process.env.PACK_AUTHER || "APOPHATIC",
  packname: process.env.PACK_NAME || "AETHERIST",
  botname: process.env.BOT_NAME || "AETHERIST_MD",
  ownername: process.env.OWNER_NAME || "THE_AETHERIST",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
