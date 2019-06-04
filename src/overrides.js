"use strict";

/**
 * @version 			0.0.1
 * @since  				0.0.1
 * @author 				{@link http://www.xtrmaddons.com/|shim-sao}
 * @fileOverview 	Overrides definitions.
 * 								These configuration properties values can't be modified by the suite.
 * @module 				overrides
 * @see 					{@link https://github.com/indexzero/nconf}
 * @example
 * { 'always': 'be this value' }
 */
exports = module.exports = {
	/**
	 * BCrypt help you hash passwords.
	 * @since  0.0.1
	 * @type {object}
	 * @property {number} saltRounds bcrypt salt rounds.
	 * @see https://www.npmjs.com/package/bcrypt
	 */
	bcrypt: {
		/**
		 * bcrypt salt rounds.
		 * @since  0.0.1
		 * @type {number}
	 	 * @see https://www.npmjs.com/package/bcrypt
		 */
		saltRounds: 10
	},

	/**
	 * Property application root directory.
	 * @since  0.0.1
	 * @type {string}
	 * @see https://nodejs.org/api/process.html#process_process_cwd
	 */
	rootDir: process.cwd()
};
