/**
 * @since  				0.0.1
 * @version 			0.1.0
 * @author 				{@link http://www.xtrmaddons.com/|shim-sao}
 * @fileOverview 	This file provides the main Class to manage applications configuration predefined properties.
 * @module 				Config
 */

/**
 * Dotenv is a zero-dependency module that loads environment 
 * variables from a .env file into process.env.
 * @since  		0.0.1
 * @requires 	dotenv
 * @type			{dotenv}
 * @see 			https://www.npmjs.com/package/dotenv
 */
const dotenv = require("dotenv");

/**
 * The fs module provides an API for interacting with
 * the file system in a manner closely modeled around standard POSIX functions.
 * @since  		0.0.1
 * @requires 	fs
 * @type			{fs}
 * @see				https://nodejs.org/api/fs.html
 */
const fs = require("fs");

/**
 * Hierarchical node.js configuration with files, 
 * environment variables, command-line arguments, and atomic object merging.
 * @since  		0.0.1
 * @requires 	nconf
 * @type			{nconf}
 * @see				https://github.com/indexzero/nconf
 */
const nconf = require("nconf");

/**
 * Class compilation utilities of functions to perform 
 * actions on the directories and the files they contain.
 * @since  		0.0.1
 * @requires 	FsUtils
 * @type			{FsUtils}
 * @see				https://github.com/shim-sao/xtrmaddons-node-fs-utils
 */
const FsUtils = require("xtrmaddons-node-fs-utils");

/**
 * Class to manage application logs.
 * @since  		0.0.1
 * @requires 	Logger
 * @type			{Logger}
 * @see				https://github.com/shim-sao/xtrmaddons-soft-suite-logger
 */
const Logger = require("xtrmaddons-soft-suite-logger");

/**
 * Arguments definition.
 * @since  		0.0.1
 * @requires 	argv
 * @type			{argv}
 */
const argv = require("./argv");

/**
 * Defaults properties definitions.
 * @since  		0.0.1
 * @requires 	defaults
 * @type			{defaults}
 */
const defaults = require("./defaults");

/**
 * Overrides  properties definitions.
 * @since  		0.0.1
 * @requires 	overrides
 * @type			{overrides}
 */
const overrides = require("./overrides");

/**
 * Check if the configuration is initialized.
 * @since  0.0.1
 * @access private
 * @type 	 {boolean}
 */
let _isInitialized = false;

/**
 * @since 		0.0.1
 * @version 	0.1.0
 * @namespace
 * @class  		Config
 * @classdesc Class to manage applications configuration predefined properties.
 */
const Config = class Config {};

/**
 * Absolute path to the main configuration file.
 * @since  0.0.1
 * @static
 * @access public
 * @type {string}
 */
Config.filename = "";

/**
 * Property application exec root directory.
 * It is not necessary the same as npm/git package application root directory).
 * @since  0.0.1
 * @static
 * @access public
 * @type {string}
 */
Config.rootDir = "";

/**
 * Application instance name.
 * @since  0.0.1
 * @static
 * @access public
 * @type {string}
 */
Config.app = undefined;

/**
 * Execution node environnement.
 * @since  0.0.1
 * @static
 * @access public
 * @type {string}
 */
Config.nodenv = process.env.NODE_ENV || "production";

/**
 * Execution node environnement short name.
 * Can be [staging|test|development]
 * @since   0.0.1
 * @version 0.1.0
 * @static
 * @access  public
 * @type    {string}
 */
Config.nodenvprfx = Config.nodenv != "production" && Config.nodenv != "prod" ? Config.nodenv : "";

/**
 * Method to get the value of a configuration parameter.
 * 
 * @since  	0.0.1
 * @static
 * @access 	public
 * @param 	{string} key - The key of the parameter.
 * @return 	{string|number|object} The value of the parameter.
 * 
 * @see https://github.com/indexzero/nconf
 */
Config.get = (...params) => nconf.get(...params);

/**
	 * Method to set the value of a configuration parameter.
	 * 
	 * @since  0.0.1
	 * @static
	 * @access public
	 * @type {function}
	 * 
	 * @param {string} 									key		- The key of the parameter.
	 * @param {string|number|object} 	 	value	- The value of the parameter.
	 * 
	 * @return {Config} - Return Config instance to allow chaining.
	 * 
	 * @see https://github.com/indexzero/nconf
	 */
Config.set = (...params) => {
	nconf.set(...params);
	return Config;
};

/**
 * Method to save the configuration to files.
 * 
 * @since  	0.0.1
 * @static
 * @access 	public
 * 
 * @param 	{function} [callback] - A callback to call after file saving.
 * 
 * @return 	{void}
 * 
 * @see https://github.com/indexzero/nconf
 */
Config.save = (callback) => nconf.save(function (err) {
	if (err) {
		Logger.lib.Fatal(err);
	}
	
	Logger.activity.info("Configuration file saved.");
	
	if (callback && typeof callback !== "function") {
		Logger.lib.Fatal(TypeError("argument 'callback' is not a valid function."));
	} else if(callback) {
		callback();
	}
});

/**
 * Method to initialize the application configuration.
 * 
 * @since   0.0.1
 * @version 0.1.0
 * @static
 * @access  public
 * 
 * @return  {void}
 */
Config.initialize = function () {
	if (_isInitialized) return;
	Logger.activity.info("Initialize configuration. Please wait...");

	// Create filename according to the node environment.
	Config.filename = FsUtils.resolve(
		`config/parameters${Config.nodenvprfx ? "." + Config.nodenvprfx : ""}.json`
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
		
	_isInitialized = true;
};

/**
 * Function to initialize environment informations.
 * @since  0.0.1
 * @access private
 * @return {void}
 */
const _initializeEnvironment = function() {
	// Read .env
	dotenv.config();

	// Create available environment list.
	let available_modes = [ "production", "development", "test", "staging" ];
	let index = available_modes.indexOf(Config.nodenv) + 1;
	if(index <= available_modes.length -1) {
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
		fileContent.push(`APP_REFERENCE=${require((process.env.INIT_CWD ? process.env.INIT_CWD : "") + "/package.json").name} (${el})`);
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

	// Initialize application environment properties.
	Config.app = nconf.get("APP_REFERENCE");
	Config.secret = nconf.get("APP_SECRET");
	Config.dbugLevel = nconf.get("debug");
};

/**
 * Function to initialize database informations.
 * @since   0.0.1
 * @version 0.1.0
 * @access  private
 * @return  {void}
 */
const _initializeDatabase = function() {
	if (Config.nodenvprfx && !Config.get("db:file").split(".").includes(Config.nodenvprfx)) {
		nconf.set(
			"db:file",
			[Config.nodenv, Config.get("db:file")].join(".")
		);
	}
};

exports = module.exports = Config;