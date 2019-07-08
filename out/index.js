"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @version      1.0.0
 * @since        1.0.0
 * @author       {@link http://www.xtrmaddons.com/|shim-sao}
 * @fileOverview This is base definition for all composed classes defined by the system.
 * @module       index
 */
/**
 * @since    1.0.0
 * @requires Config
 * @type     {Config}
 */
var Config_1 = __importDefault(require("./classes/Config"));
module.exports = (function () {
    Config_1.default.initialize();
    return Config_1.default;
})();
