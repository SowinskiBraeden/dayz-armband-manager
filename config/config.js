const package = require('../package.json');
require('dotenv').config();

module.exports = {
	Dev: "PROD.",                     
	Version: package.version, // (major).(feature).(revision/bug/refactoring)
  Admins: ["362791661274660874", "329371697570381824"], // Admins of the bot
  ServerID: "1050215624053374976",
	SupportServer: "https://discord.gg/KVFJCvvFtK", //Support Server Link
	Token: process.env.token || "", //Discord Bot Token
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  IconURL: "",
  Colors: {
    Default: "#8a7c72",
    Red: "#ba0f0f",
    Green: "#32a852",
    Yellow: "#ffb01f"
  },
  Permissions: 2205281600,
  mongoURI: process.env.mongoURI || "mongodb://localhost:27017",
  dbo: process.env.dbo || "knoldus",
  Presence: {
    status: "online", // You can show online, idle, and dnd
  },
}
