/**
 * JSDocs Docdash template configuration.
 * @since    0.0.1
 * @version  0.1.0
 * @module   .docdash
 * @see      https://github.com/clenemt/docdash
 */
const jsdocs = require("./.jsdocs.js");

jsdocs.opts.destination = "docs/build/jsdocs/docdash";
jsdocs.opts.template = "assets/template/docdash/";
jsdocs.templates.default.layoutFile = "./docs/src/docdash/tmpl/layout.tmpl";

jsdocs.docdash = {
  // Collapse navigation by default except current object's navigation of the current page
  "collapse": true,

  // Shortname for your disqus (subdomain during site creation)
  "disqus": "",

  // Meta information options (mostly for search engines that have not indexed your site yet)
  "meta": {
      // Also will be used as postfix to actualy page title, prefixed with object/document name
      "title": "XtrmAddons Soft Suite Conf",

      // Description of overal contents of your website
      "description": "This package contains the configuration system used by the XtrmAddons applications in NodeJs.",
      
      // Keywords for search engines
      "keyword": "xtrmaddons, configuration"
  },

  // Open Graph options (mostly for Facebook and other sites to easily extract meta information)
  "openGraph": {

      // Title of the website
      "title": "XtrmAddons",

      // Type of the website
      "type": "website",

      // Main image/logo
      "image": "images/logo.png",

      // Site name
      "site_name": "XtrmAddons",

      // Main canonical URL for the main page of the site
      "url": "https://www.xtrmaddons.com/"
  },

  // set to false to not show @private in navbar
  "private": true,

  // Remove single and double quotes, trim removes only surrounding ones
  "removeQuotes": "none",

  // Array of external (or relative local copied using templates.default.staticFiles.include) 
  // js or css files to inject into HTML
  // WARNING : these files should be manually copied/create in the doc directory.
  "scripts": [
    "styles/docdash.css"
  ],

  // Display the static members inside the navbar
  "search": false,

  // Order the main section in the navbar (default order shown here)
  "sectionOrder": [
        "Classes",
        "Modules",
        "Externals",
        "Events",
        "Namespaces",
        "Mixins",
        "Tutorials",
        "Interfaces"
  ],

  // Sort the methods in the navbar
  "sort": true,

  // Display the static members inside the navbar
  "static": true,

  // Include typedefs in menu
  "typedefs": true,

  // Adding additional menu items after Home
  "menu":{
    "Github profil":{
        "href":"https://github.com/shim-sao/",
        "target":"_blank",
        "class":"menu-item",
        "id":"repository"
    },

    "Github repo":{
        "href":"https://github.com/shim-sao/xtrmaddons-soft-suite-conf/",
        "target":"_blank",
        "class":"menu-item",
        "id":"repository"
    }
  }
};

module.exports = jsdocs;