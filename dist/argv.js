"use strict";
/**
 * @version 			0.0.1
 * @since 				0.0.1
 * @fileOverview 	This module contains default application command line arguments definitions.
 * @module 				argv
 * @author 				{@link http://www.xtrmaddons.com/|shim-sao}
 * @see 					{@link https://www.npmjs.com/package/argv|argv}
 * @example
 * // Example of uses of arguments :
 * cross-env NODE_ENV=development host=192.168.1.123 port=741258 protocol=https
 * // or
 * cross-env NODE_ENV=development -h 192.168.1.123 -p 741258 -o https
 */

module.exports = {
  /**
    * The main hostname argument used by the Server.
    * @since 		0.0.1
   * @type 			{object}
   * @property 	{string} 	alias 			- The argument alias.
   * @property 	{string} 	describe 		- The argument description.
   * @property 	{boolean} demand 			- Defines if the argument is required.
   * @property 	{string} 	default 		- The argument default value.
   * @property 	{boolean} parseValues - Parse values or not.
   * @default  	undefined
   * @example
   * // Example how to pass the host argument
   * cross-env -h=127.0.0.1
   * // or
   * cross-env host=192.168.1.2
    */
  host: {
    alias: "h",
    describe: "Hostname, alias or ip of for the Server.",
    demand: false,
    default: undefined,
    parseValues: false,
    example: "'script --host=192.168.1.2' or 'script -h=127.0.0.1'"
  },

  /**
    * The main port argument used by the Server.
    * @since 	0.0.1
   * @type {object}
   * @property 	{string} 	alias 			- The argument alias.
   * @property 	{string} 	describe 		- The argument description.
   * @property 	{boolean} demand 			- Defines if the argument is required.
   * @property 	{string} 	default 		- The argument default value.
   * @property 	{boolean} parseValues - Parse values or not.
   * @default  undefined
   * @example
   * // Example how to pass the port argument
   * cross-env -p=75000
   * // or
   * cross-env port=75000
    */
  port: {
    alias: "p",
    describe: "Port for the Server to listen.",
    demand: false,
    default: undefined,
    parseValues: true,
    example: "'script --port=75000' or 'script -p=75000'"
  },

  /**
    * The main protocol argument used by the Server.
    * @since 		0.0.1
   * @type 		 	{object}
   * @property 	{string} 	alias 			- The argument alias.
   * @property 	{string} 	describe 		- The argument description.
   * @property 	{boolean} demand 			- Defines if the argument is required.
   * @property 	{string} 	default 		- The argument default value.
   * @property 	{boolean} parseValues - Parse values or not.
   * @default  	undefined
   * @example
   * // Example how to pass the protocol argument
   * cross-env -o=https
   * // or
   * cross-env protocol=https
    */
  protocol: {
    alias: "o",
    describe: "Protocol for the Server to listen.",
    demand: false,
    default: undefined,
    parseValues: false,
    example: "'script --protocol=https' or 'script -o=https'"
  }
};