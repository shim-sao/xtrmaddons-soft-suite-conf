/**
 * Minami template configuration.
 * @since    0.0.1
 * @version  0.1.0
 * @module  .minami
 * @see     https://github.com/nijikokun/minami
 */
const jsdocs = require("./.jsdocs.js");

jsdocs.opts.destination = "docs/build/jsdocs/minami";
jsdocs.opts.template = "./node_modules/minami";

module.exports = jsdocs;
