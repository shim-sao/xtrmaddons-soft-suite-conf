/* eslint-disable no-console */
// Import external modules.
require("module-alias/register");
console.log("process.env.NODE_ENV start : " + process.env.NODE_ENV);
// Initialize process environment, comment/uncomment the desired value.
// Need to be defined first. Otherwise "production" will be used by default.
process.env.NODE_ENV = "test";
// process.env.NODE_ENV = "development";
// process.env.NODE_ENV = "production";

// Import Logger module.
const Config = require("@src");
const Logger = require("xtrmaddons-soft-suite-logger");

Logger.all.debug("process.env.NODE_ENV  after load : " + process.env.NODE_ENV);

Logger.all.debug("Config.app : " + Config.app);
Logger.all.debug("Config.environment : " + Config.environment);
Logger.all.debug("Config.filename : " + Config.filename);
Logger.all.debug("Config.secret : " + Config.secret);

Logger.all.debug("Config.get host : " + Config.get("host"));
Logger.all.debug("Config.get port : " + Config.get("port"));
Logger.all.debug("Config.get protocol : " + Config.get("protocol"));
Logger.all.debug("Config.get rootDir : " + Config.get("rootDir"));
Logger.all.debug("Config.get bcrypt:saltRounds : " + Config.get("bcrypt:saltRounds"));
Logger.all.debug("Config.get bearer_token:bodyKey : " + Config.get("bearer_token:bodyKey"));
Logger.all.debug("Config.get bearer_token:queryKey : " + Config.get("bearer_token:queryKey"));
Logger.all.debug("Config.get bearer_token:headerKey : " + Config.get("bearer_token:headerKey"));
Logger.all.debug("Config.get bearer_token:reqKey : " + Config.get("bearer_token:reqKey"));
Logger.all.debug("Config.get db:dateFormat : " + Config.get("db:dateFormat"));
Logger.all.debug("Config.get db:data : " + Config.get("db:data"));
Logger.all.debug("Config.get db.path() : " + Config.get("db").path());

Logger.all.debug("Config.get var1 : " + Config.get("var1"));
Logger.all.debug("Config.get var2 : " + Config.get("var2"));

Logger.all.debug("Config.save : " + Config.save());
// Config.set("var1", "test property 1");
// Config.set("var2", "test property 2");
Logger.all.debug(Config.save());