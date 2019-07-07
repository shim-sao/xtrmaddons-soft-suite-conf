"use strict";
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
import Config from "./classes/Config";

/**
 * Configuration initialized and ready to use.
 * @since 1.0.0
 * @type  {Config}
 */
export = ((): Config => {
  Config.initialize();
  return Config;
})();
