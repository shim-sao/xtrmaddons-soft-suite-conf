module.exports = {
    /**
     * ESLint will stop looking in parent folders once 
     * it finds a configuration with "root": true.
     * @see https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
     */
    "root": true,
  
    /**
     * The following enables the browser and Node.js environments.
     * @see https://eslint.org/docs/user-guide/configuring#comments-in-configuration-files
     */
    "env": {
      "browser": true,
      "node": true
      //"commonjs": true
    },

    /**
     * A configuration file can extend the set of enabled rules from base configurations.
     * @see https://eslint.org/docs/user-guide/configuring#using-eslintrecommended
     */
    "extends": "eslint:recommended",

    /**
     * ESLint allows you to specify the JavaScript language options you want to support. 
     * By default, ESLint expects ECMAScript 5 syntax. You can override that setting 
     * to enable support for other ECMAScript versions as well as JSX by using 
     * parser options.
     * @see https://eslint.org/docs/user-guide/configuring#specifying-parser
     */
    "parser": "babel-eslint",

    /**
     * ESLint parser options:
     * @see https://eslint.org/docs/user-guide/configuring
     */
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },

    /**
     * Each plugin is an npm module with a name in the format of 
     * eslint-plugin-<plugin-name>, such as eslint-plugin-jquery. 
     * You can also use scoped packages in the format of 
     * @<scope>/eslint-plugin-<plugin-name> such as
     * @jquery/eslint-plugin-jquery.
     * @see https://eslint.org/docs/developer-guide/working-with-plugins
     * @see https://github.com/babel/babel-eslint
     */
    "plugins": [
      "babel"
    ],

    /**
     * The rules property can do any of the following to extend (or override) the set of rules:
     * - enable additional rules
     * - change an inherited rule’s severity without changing its options
     * - override options for rules from base 
     * 
     * ESLint - No rules are enabled by default.
     * Rules in ESLint are grouped by category to help you understand their purpose.
     * @see https://eslint.org/docs/rules/
     */
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};