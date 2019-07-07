/**
 * @since        1.0.0
 * @version      1.0.0
 * @author       {@link http://www.xtrmaddons.com/|shim-sao}
 * @fileOverview This file provides the main Class to manage applications configuration predefined properties.
 * @module       Config
 */

/**
 * @since 1.0.0
 * @type  {string}
 */
export let nodenv: string = process.env.NODE_ENV || "production";

/**
 * Dotenv is a zero-dependency module that loads environment
 * variables from a .env file into process.env.
 * @since    1.0.0
 * @requires dotenv
 * @type     {dotenv}
 * @see      https://www.npmjs.com/package/dotenv
 */
import dotenv from "dotenv";

/**
 * The fs module provides an API for interacting with
 * the file system in a manner closely modeled around standard POSIX functions.
 * @since    1.0.0
 * @requires fs
 * @type     {fs}
 * @see      https://nodejs.org/api/fs.html
 */
import * as fs from "fs";

/**
 * Hierarchical node.js configuration with files,
 * environment variables, command-line arguments, and atomic object merging.
 * @since     1.0.0
 * @requires  nconf
 * @type      {nconf}
 * @see       https://github.com/indexzero/nconf
 */
import nconf, { ICallbackFunction } from "nconf";

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
import argv from "../definitions/argv";

/**
 * Defaults properties definitions.
 * @since    1.0.0
 * @requires defaults
 * @type     {object}
 */
import defaults from "../definitions/defaults";

/**
 * Overrides  properties definitions.
 * @since    1.0.0
 * @requires overrides
 * @type     {object}
 */
import overrides from "../definitions/overrides";

/**
 * Check if the configuration is initialized.
 * @since  1.0.0
 * @access private
 * @type   {boolean}
 */
let _isInitialized: boolean = false;

/**
 * @since     1.0.0
 * @version   1.0.0
 * @namespace
 * @class     Config
 * @classdesc Class to manage applications configuration predefined properties.
 */
export default class Config {
  /**
   * The application secret key.
   * @since  1.0.0
   * @static static
   * @access public
   * @type   {string}
   */
  public static secret_key: string = "";

  /**
   * Absolute path to the main configuration file.
   * @since  1.0.0
   * @static static
   * @access public
   * @type   {string}
   */
  public static filename: string = "";

  /**
   * Property application exec root directory.
   * It is not necessary the same as npm/git package application root directory).
   * @since  1.0.0
   * @static static
   * @access public
   * @type   {string}
   */
  public static rootDir: string = "";

  /**
   * Application instance name.
   * @since  1.0.0
   * @static static
   * @access public
   * @type   {string}
   */
  public static app?: string = undefined;

  /**
   * Execution node environnement.
   * @since  1.0.0
   * @static static
   * @access public
   * @type   {string}
   */
  public static nodenv: string = ((): string => {
    return nodenv;
  })();

  /**
   * Execution node environnement short name.
   * Can be [staging|test|development]
   * @since   1.0.0
   * @static  static
   * @access  public
   * @type    {string}
   */
  public static nodenvprfx: string = ((): string => {
    return nodenv != "production" && nodenv != "prod" ? nodenv : "";
  })();

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
  public static get(key?: string, callback?: ICallbackFunction): any {
    return nconf.get(key, callback);
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
  public static set(
    key: string,
    value: any,
    callback?: ICallbackFunction
  ): any {
    nconf.set(key, value, callback);
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
  public static save(callback?: ICallbackFunction): void {
    nconf.save(function(err: Error) {
      if (err) {
        Logger.lib.fatal(err);
        Logger.activity.info("Configuration file saved with failure.");
      } else {
        Logger.activity.info("Configuration file saved with success.");
      }

      if (callback && typeof callback !== "function") {
        Logger.lib.Fatal(
          TypeError("argument 'callback' is not a valid function.")
        );
      } else if (callback) {
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
  public static initialize(): void {
    if (_isInitialized) return;
    Logger.activity.info("Initialize configuration. Please wait...");

    // Create filename according to the node environment.
    Config.filename = FsUtils.resolve(
      `config/parameters${
        Config.nodenvprfx ? "." + Config.nodenvprfx : ""
      }.json`
    );
    Logger.activity.info("Config.filename = " + Config.filename);

    // 1 - load environment files.
    _initializeEnvironment();

    // 2 - setup overrides.
    nconf.overrides(overrides);
    Config.rootDir = nconf.get("rootDir");

    // 3 - setup arguments.
    nconf.argv(argv);

    // 4 - Read configuration files.
    nconf.file({ file: Config.filename });

    // 5 - Initialize default values.
    nconf.defaults(defaults);

    // 6 - Initialize database environment values.
    _initializeDatabase();

    // 7 - Save configuration files.
    if (!fs.existsSync(Config.filename)) {
      Config.save();
    }

    // Initialize application environment properties.
    Config.app = nconf.get("APP_REFERENCE");
    Config.secret_key = nconf.get("APP_SECRET");
    Config.set("dbugLevel", nconf.get("debug"));

    _isInitialized = true;
  }
}

/**
 * Function to initialize environment informations.
 * @since   1.0.0
 * @version 1.0.0
 * @access  private
 * @return  {void}
 */
const _initializeEnvironment = function(): void {
  // Read .env
  dotenv.config();

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
    fileContent.push(
      `APP_REFERENCE=${
        require((process.env.INIT_CWD ? process.env.INIT_CWD : "") +
          "/package.json").name
      } (${el})`
    );
    fileContent.push(`APP_SECRET=My secret application ${el} key`);

    let envConfig = null;
    const callback = function() {
      envConfig = dotenv.parse(fs.readFileSync(fname));
      for (let k in envConfig) {
        process.env[k] = envConfig[k];
      }
    };

    // Check if the file exists.
    if (!fs.existsSync(fname)) {
      FsUtils.file.create(fname, fileContent.join("\r\n"), callback);
    } else {
      callback();
    }
  });

  nconf.env();
};

/**
 * Function to initialize configuration database informations.
 * @since   1.0.0
 * @version 1.0.0
 * @access  private
 * @return  {void}
 */
const _initializeDatabase = function(): void {
  if (
    Config.nodenvprfx &&
    !Config.get("db:file")
      .split(".")
      .includes(Config.nodenvprfx)
  ) {
    nconf.set("db:file", [Config.nodenv, Config.get("db:file")].join("."));
  }
};
