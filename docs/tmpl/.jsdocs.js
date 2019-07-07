/**
 * @since   0.0.1
 * @version 0.1.0
 * @module  .jsdocs
 * @see http://usejsdoc.org/about-configuring-jsdoc.html
 */
module.exports = {
  /**
   * JsDocs options.
   */
  "opts": {
    "destination": "docs/build/jsdocs/default",
    "encoding": "utf8",
    "hierarchy": false,
    "private": true,
    "readme": "./docs/src/index.md",
    "recurse": true,
    "template": "./node_modules/minami",
    "tutorials": "./docs/src/tutorials",
    "undescribed ": true,
    "undocumented": true,
    "verbose": true
  },

  /**
   * JsDocs plugins.
   * To enable plugins, add their paths (relative to the JSDoc folder) into the plugins array.
   */
  "plugins": [
    "plugins/markdown",
    "jsdoc-plugin-typescript"
    // "plugins/summarize"
  ],

  /**
   * JSDoc allows you to use unrecognized tags (tags.allowUnknownTags).
   */
  "tags": {
    // JSDoc allows you to use unrecognized tags.
    "allowUnknownTags": true,

    /**
     * Both standard JSDoc tags and Closure Compiler tags are enabled
     * @see https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags
     */
    "dictionaries": ["jsdoc", "closure"]
  },

  /**
   * JsDocs sources of the documentation.
   */
  "source": {
    // Sources to include.
    "include": ["./src", "./package.json"],

    // Only files ending in .ts, .tsdoc, and .tsx will be processed (source.includePattern).
    "includePattern": ".+\\.ts(doc|x)?$",

    // Pattern for exclusions.
    "excludePattern": "(node_modules/|docs)"
  },

  /**
   * JsDocs templates options.
   */
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false,
    "default": {
      "includeDate": true,
      "outputSourceFiles": true,
      "useLongnameInNav": true,

      // The following does not work !?
      // "staticFiles": {
      //   "include": [
      //       "./docs/src/assets/css"
      //   ],
      //   "paths": [
      //     "./docs/src/assets/css"
      //   ]
      // }
    }
  }
};