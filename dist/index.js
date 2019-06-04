"use strict";
/**
 * @version 			0.0.1
 * @since  				0.0.1
 * @author 				{@link http://www.xtrmaddons.com/|shim-sao}
 * @fileOverview 	This is base definition for all composed classes defined by the system.
 * @module 				index
 * @example
 * // Import configuration.
 * const Logger = require("xtrmaddons-soft-suite-conf");
 */

/**
 * @since  		0.0.1
 * @requires 	Config
 * @type			{Config}
 */

var Config = require("./Config");
/**
 * Method to return the configuration initialized
 * and ready to use.
 * @since  0.0.1
 * @return {Config} The static configuration class initialized.
 */


var getInstance = function getInstance() {
  Config.initialize();
  return Config;
}; // Export main configuration module.


exports = module.exports = getInstance();