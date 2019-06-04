/**
 * DocStrap template configuration.
 * @since    0.0.1
 * @version  0.1.0
 * @module  .ink-docstrap
 * @see     http://docstrap.github.io/docstrap/
 */
const jsdocs = require("./.jsdocs.js");
const pkg = require("../../package.json");

//jsdocs.opts.destination = "docs/build/jsdocs/inc-docstrap";
jsdocs.opts.destination = "docs/html";
jsdocs.templates.theme = "cosmo";
jsdocs.templates.syntaxTheme  = "dark";
jsdocs.templates.logoFile = "img/logo.png";
jsdocs.templates.footer = '<style>'
+ '.m-2 {'
+ '  margin:1rem;'
+ '}'
+ '.tutorial-section h2 {'
+ '  display:none;'
+ '}'
+ '.tutorial-section header ul {'
+ '  display:flex;'
+ '  justify-content:center;'
+ '  list-style:none'
+ '}'
+ '.tutorial-section header ul li {'
+ '  display:flex;'
+ '  padding:1rem;'
+ '}'
+ '.name h4 {'
+ '  padding:1rem;'
+ '  background:#2780E3;'
+ '  color:#fff;'
+ '}'
+ 'h4.name {'
+ '  padding:1rem;'
+ '  background:#ff0fb4;'
+ '  color:#fff;'
+ '}'
// + '.details, .description {'
// + '  display:flex;'
// + '  flex-wrap:wrap;'
// + '}'
// + '.details dd, .details dt {'
// + '}'
// + '.details dd, .details dt,'
// + 'dd h5, dd ul {'
// + '  display:flex;'
// + '  flex-basis:50%;'
// + '}'
// + 'ul.dummy, .tag-see ul {'
// + '  list-style:square;'
// + '}'
+ '</style>'
+ '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'
+ '<script>'
+ '(adsbygoogle = window.adsbygoogle || []).push({'
+ 'google_ad_client: "ca-pub-1175089473544116",'
+ 'enable_page_level_ads: true'
+ '});'
+ '</script>'
+ '<div class="container">'
+ '<nav class="d-flex flex-row justify-content-center" style="text-align:center">'
+ '<a class="btn btn-primary m-2" href="' + pkg.homepage + '" target="_blank">Repo</a>'
+ '<a class="btn btn-primary m-2" href="' + pkg.bugs.url + '" target="_blank">Issues</a>'
+ '<a class="btn btn-primary m-2" href="' + pkg.repository.url + '" target="_blank">Profil</a>'
+ '<a class="btn btn-primary m-2" href="http://www.xtrmaddons.com/" target="_blank">Website</a>'
+ '</nav>'
+ '</div>';

module.exports = jsdocs;
