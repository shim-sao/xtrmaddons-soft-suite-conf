"use strict";
/**
 * @since        1.0.0
 * @version      1.0.0
 * @author       {@link http://www.xtrmaddons.com/|shim-sao}
 * @fileOverview This file provides the main Class to manage applications configuration predefined properties.
 * @module       Config
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @since 1.0.0
 * @type  {string}
 */
exports.nodenv = process.env.NODE_ENV || "production";
/**
 * Dotenv is a zero-dependency module that loads environment
 * variables from a .env file into process.env.
 * @since    1.0.0
 * @requires dotenv
 * @type     {dotenv}
 * @see      https://www.npmjs.com/package/dotenv
 */
const dotenv_1 = __importDefault(require("dotenv"));
/**
 * The fs module provides an API for interacting with
 * the file system in a manner closely modeled around standard POSIX functions.
 * @since    1.0.0
 * @requires fs
 * @type     {fs}
 * @see      https://nodejs.org/api/fs.html
 */
const fs = __importStar(require("fs"));
/**
 * Hierarchical node.js configuration with files,
 * environment variables, command-line arguments, and atomic object merging.
 * @since     1.0.0
 * @requires  nconf
 * @type      {nconf}
 * @see       https://github.com/indexzero/nconf
 */
const nconf_1 = __importDefault(require("nconf"));
/**
 * Class compilation utilities of functions to perform
 * actions on the directories and the files they contain.
 * @since    1.0.0
 * @requires FsUtils
 * @type     {FsUtils}
 * @see      https://github.com/shim-sao/xtrmaddons-node-fs-utils
 */
const FsUtils = require("xtrmaddons-node-fs-utils");
/**
 * Class to manage application logs.
 * @since    1.0.0
 * @requires Logger
 * @type     {Logger}
 * @see      https://github.com/shim-sao/xtrmaddons-soft-suite-logger
 */
const Logger = require("xtrmaddons-soft-suite-logger");
/**
 * Arguments definition.
 * @since    1.0.0
 * @requires argv
 * @type     {object}
 */
const argv_1 = __importDefault(require("../definitions/argv"));
/**
 * Defaults properties definitions.
 * @since    1.0.0
 * @requires defaults
 * @type     {object}
 */
const defaults_1 = __importDefault(require("../definitions/defaults"));
/**
 * Overrides  properties definitions.
 * @since    1.0.0
 * @requires overrides
 * @type     {object}
 */
const overrides_1 = __importDefault(require("../definitions/overrides"));
/**
 * Check if the configuration is initialized.
 * @since  1.0.0
 * @access private
 * @type   {boolean}
 */
let _isInitialized = false;
/**
 * @since     1.0.0
 * @version   1.0.0
 * @namespace
 * @class     Config
 * @classdesc Class to manage applications configuration predefined properties.
 */
class Config {
    /**
     * Method to get the value of a configuration parameter.
     *
     * @since  	1.0.0
     * @static  static
     * @access  public
     * @param   {string|undefined}            key      - The key of the parameter.
     * @param   {ICallbackFunction|undefined} callback - A callback function.
     * @return  {*} The value of the parameter.
     *
     * @see https://github.com/indexzero/nconf
     */
    static get(key, callback) {
        return nconf_1.default.get(key, callback);
    }
    /**
     * Method to set the value of a configuration parameter.
     *
     * @since   1.0.0
     * @version 1.0.0
     * @static  static
     * @access  public
     *
     * @param {string}                      key    - The key of the parameter.
     * @param {string|number|object}        value  - The value of the parameter.
     * @param {ICallbackFunction|undefined} callback - A callback function.
     *
     * @return {Config} - Return Config instance to allow chaining.
     *
     * @see https://github.com/indexzero/nconf
     */
    static set(key, value, callback) {
        nconf_1.default.set(key, value, callback);
        return Config;
    }
    /**
     * Method to save the configuration to files.
     *
     * @since   1.0.0
     * @version 1.0.0
     * @static  static
     * @access  public
     *
     * @param   {ICallbackFunction|undefined} [callback] - A callback to call after file saving.
     *
     * @return  {void}
     *
     * @see https://github.com/indexzero/nconf
     */
    static save(callback) {
        nconf_1.default.save(function (err) {
            if (err) {
                Logger.lib.fatal(err);
                Logger.activity.info("Configuration file saved with failure.");
            }
            else {
                Logger.activity.info("Configuration file saved with success.");
            }
            if (callback && typeof callback !== "function") {
                Logger.lib.Fatal(TypeError("argument 'callback' is not a valid function."));
            }
            else if (callback) {
                callback(err);
            }
        });
    }
    /**
     * Method to initialize the application configuration.
     *
     * @since   1.0.0
     * @version 1.0.0
     * @static  static
     * @access  public
     *
     * @return  {void}
     */
    static initialize() {
        if (_isInitialized)
            return;
        Logger.activity.info("Initialize configuration. Please wait...");
        // Create filename according to the node environment.
        Config.filename = FsUtils.resolve(`config/parameters${Config.nodenvprfx ? "." + Config.nodenvprfx : ""}.json`);
        Logger.activity.info("Config.filename = " + Config.filename);
        // 1 - load environment files.
        _initializeEnvironment();
        // 2 - setup overrides.
        nconf_1.default.overrides(overrides_1.default);
        Config.rootDir = nconf_1.default.get("rootDir");
        // 3 - setup arguments.
        nconf_1.default.argv(argv_1.default);
        // 4 - Read configuration files.
        nconf_1.default.file({ file: Config.filename });
        // 5 - Initialize default values.
        nconf_1.default.defaults(defaults_1.default);
        // 6 - Initialize database environment values.
        _initializeDatabase();
        // 7 - Save configuration files.
        if (!fs.existsSync(Config.filename)) {
            Config.save();
        }
        // Initialize application environment properties.
        Config.app = nconf_1.default.get("APP_REFERENCE");
        Config.secret_key = nconf_1.default.get("APP_SECRET");
        Config.set("dbugLevel", nconf_1.default.get("debug"));
        _isInitialized = true;
    }
}
/**
 * The application secret key.
 * @since  1.0.0
 * @static static
 * @access public
 * @type   {string}
 */
Config.secret_key = "";
/**
 * Absolute path to the main configuration file.
 * @since  1.0.0
 * @static static
 * @access public
 * @type   {string}
 */
Config.filename = "";
/**
 * Property application exec root directory.
 * It is not necessary the same as npm/git package application root directory).
 * @since  1.0.0
 * @static static
 * @access public
 * @type   {string}
 */
Config.rootDir = "";
/**
 * Application instance name.
 * @since  1.0.0
 * @static static
 * @access public
 * @type   {string}
 */
Config.app = undefined;
/**
 * Execution node environnement.
 * @since  1.0.0
 * @static static
 * @access public
 * @type   {string}
 */
Config.nodenv = (() => {
    return exports.nodenv;
})();
/**
 * Execution node environnement short name.
 * Can be [staging|test|development]
 * @since   1.0.0
 * @static  static
 * @access  public
 * @type    {string}
 */
Config.nodenvprfx = (() => {
    return exports.nodenv != "production" && exports.nodenv != "prod" ? exports.nodenv : "";
})();
exports.default = Config;
/**
 * Function to initialize environment informations.
 * @since   1.0.0
 * @version 1.0.0
 * @access  private
 * @return  {void}
 */
const _initializeEnvironment = function () {
    // Read .env
    dotenv_1.default.config();
    // Create available environment list.
    let available_modes = ["production", "development", "test", "staging"];
    let index = available_modes.indexOf(Config.nodenv) + 1;
    if (index <= available_modes.length - 1) {
        available_modes = available_modes.slice(0, index);
    }
    // Read environment .env
    available_modes.forEach(el => {
        // Create filename to load.
        const fname = ".environment/" + [el, "env"].join(".");
        // Create default application environment.
        const fileContent = [];
        fileContent.push("# Auto generated file.");
        fileContent.push(`NODE_ENV=${el}`);
        fileContent.push(`APP_REFERENCE=${require((process.env.INIT_CWD ? process.env.INIT_CWD : "") +
            "/package.json").name} (${el})`);
        fileContent.push(`APP_SECRET=My secret application ${el} key`);
        let envConfig = null;
        const callback = function () {
            envConfig = dotenv_1.default.parse(fs.readFileSync(fname));
            for (let k in envConfig) {
                process.env[k] = envConfig[k];
            }
        };
        // Check if the file exists.
        if (!fs.existsSync(fname)) {
            FsUtils.file.create(fname, fileContent.join("\r\n"), callback);
        }
        else {
            callback();
        }
    });
    nconf_1.default.env();
};
/**
 * Function to initialize configuration database informations.
 * @since   1.0.0
 * @version 1.0.0
 * @access  private
 * @return  {void}
 */
const _initializeDatabase = function () {
    if (Config.nodenvprfx &&
        !Config.get("db:file")
            .split(".")
            .includes(Config.nodenvprfx)) {
        nconf_1.default.set("db:file", [Config.nodenv, Config.get("db:file")].join("."));
    }
};
