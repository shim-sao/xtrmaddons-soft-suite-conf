/**
 * JSDocs better-docs template configuration.
 * @since    0.0.1
 * @version  0.1.0
 * @module  .better-docs
 * @see     https://github.com/SoftwareBrothers/better-docs
 */
const jsdocs = require("./.jsdocs.js");

jsdocs.opts.destination = "docs/build/jsdocs/better-docs";
jsdocs.opts.template = "better-docs";
jsdocs.tags.allowUnknownTags = ["category"];

jsdocs.plugins = [
    "jsdoc-mermaid",
    "node_modules/better-docs/category",
    "plugins/markdown"
];

jsdocs.templates["better-docs"] = {
    "name": "XtrmAddons Documentation",
    "logo": "image/logo.png",
    "navigation": [
        {
            "label": "Github profil",
            "target":"_blank",
            "href": "https://github.com/shim-sao/"
        },
        {
            "label": "Github repo",
            "target":"_blank",
            "href": "https://github.com/shim-sao/xtrmaddons-soft-suite-conf/"
        }
    ]
};

module.exports = jsdocs;