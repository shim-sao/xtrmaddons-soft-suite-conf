/**
 * DocStrap template configuration.
 * @since    0.0.1
 * @version  0.1.0
 * @module  .ink-docstrap
 * @see     http://docstrap.github.io/docstrap/
 */
const jsdocs = require("./.jsdocs.js");
const pkg = require("../../package.json");
const fs = require('fs');
const path = require('path');

const htmlFooter = fs.readFileSync(path.resolve(__dirname + "/docstrap/footer.html"));

//jsdocs.opts.destination = "docs/build/jsdocs/inc-docstrap";
jsdocs.opts.destination = "docs/html";
jsdocs.templates.copyright = "www.xtrmaddons.com"
jsdocs.templates.theme = "flatly";
jsdocs.templates.syntaxTheme  = "dark";
jsdocs.templates.linenums = true;
jsdocs.templates.logoFile = "img/logo.png";
jsdocs.templates.search  = false;
jsdocs.templates.footer = htmlFooter;

module.exports = jsdocs;
