"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @version 			0.0.1
 * @since  				0.0.1
 * @author 				{@link http://www.xtrmaddons.com/|shim-sao}
 * @fileOverview 	This module contains default application properties definitions.
 * @module 				defaults
 * @requires 			xtrmaddons-node-fs-utils
 */
/**
 * @since  		0.0.1
 * @requires 	path
 * @type			{object}
 */
const path_1 = __importDefault(require("path"));
/**
 * @since  		0.0.1
 * @requires 	FsUtils
 * @type			{FsUtils}
 * @see				https://github.com/shim-sao/xtrmaddons-node-fs-utils
 */
const FsUtils = require("xtrmaddons-node-fs-utils");
/**
 * @since  		0.0.1
 * @requires 	Config
 * @type			{Config}
 */
const Config_1 = require("./Config");
/**
 * Default configuration parameters:
 * @since  0.0.1
 * @type object
 */
exports.default = {
    /**
     * Property hostname of the main server.
     * @since  0.0.1
     * @type {string}
     */
    host: "localhost",
    // host: Utils.Network.ethIP(),
    /**
     * Property port of the main server.
     * @since  0.0.1
     * @type {string}
     */
    port: 33301,
    /**
     * Property protocol of the main server.
     * @since  0.0.1
     * @type {string}
     */
    protocol: "http",
    /**
     * Property bearer token:
     * Per RFC6750 this module will attempt to extract a bearer token from a request.
     * @since  		0.0.1
     * @type 			{object}
     * @property 	{string} bodyKey 		- Bearer token body key
     * @property 	{string} queryKey 	- Bearer token query key
     * @property 	{string} headerKey 	- Bearer token query key
     * @property 	{string} reqKey 		- Bearer token query key
     * @see 			https://www.npmjs.com/package/express-bearer-token
     * @see 			https://swagger.io/docs/specification/authentication/bearer-authentication/
     */
    bearer_token: {
        bodyKey: "access_token",
        queryKey: "access_token",
        headerKey: "Bearer",
        reqKey: "token",
    },
    /**
     * Property SQLite3 database connector informations.
     * @since  		0.0.1
     * @type 	 		{object}
     * @property 	{string} data - Absolute path to the directory to store database files.
     * @property 	{string} data - Name of the database file.
     */
    db: {
        /**
         * Absolute path to the directory to store database files.
         * @since  0.0.1
         * @type {string}
         */
        data: FsUtils.resolve("data"),
        /**
         * Name of the database file.
         * @since  0.0.1
         * @type {string}
         */
        file: "default.db3",
        // filename or full path to the dabase file.
        /**
         * Absolute path to the directory to store database files.
         * @since  0.0.1
         * @type {string}
         */
        path: function () {
            return path_1.default.join(this.data, this.file);
        },
        // Absolute path to the directory of migrations.
        // migrations: "./src/data/migrations/production",
        /**
         * Absolute path to the directory to store database files.
         * @since  0.0.1
         * @type {string}
         */
        migrations: FsUtils.resolve(`/src/data/migrations/${Config_1.nodenv == "production" ? "prod" : "dev"}`),
        // Format of dates to store in the database.
        /**
         * Absolute path to the directory to store database files.
         * @since  0.0.1
         * @type {string}
         */
        dateFormat: "YYYY-MM-DD HH:mm:ss.SSSSSSSSS",
    },
    /**
     * Property definition of the distribution.
     */
    dist: {
        // Absolute path to the directory to store the distribution.
        directory: FsUtils.resolve("dist"),
        // Absolute path to the starting point the distribution.
        file: "index.html",
        // filename or full path to the starting point the distribution.
        path: function () {
            return path_1.default.join(this.directory, this.file);
        },
    },
    /**
     * Property locales definitions.
     */
    i18n: {
        locales: ["en", "fr"],
        directory: FsUtils.resolve("locales"),
    },
};
