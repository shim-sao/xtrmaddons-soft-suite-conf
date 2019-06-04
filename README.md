# XtrmAddons Soft Suite Conf [![fr-FR](https://raw.githubusercontent.com/shim-sao/assets/master/images/france-flag-icon-16.png)](README.fr-FR.md)

This package contains the configuration system used by the XtrmAddons applications in NodeJs.

## Install

### Method 1

Execute the following command for the installation of the modules :

```sh
npm install --save https://github.com/shim-sao/xtrmaddons-soft-suite-conf
```

### Method 2

```js
// Adding the file dependency package.json
{
  "name": "my-project",
  "version": "0.0.0",
  "dependencies": {
    // Direct link to the current branch of the Git Repository.
    // Copy/paste this dependency.
    "xtrmaddons-soft-suite-conf": "shim-sao/xtrmaddons-soft-suite-conf"
  }
}
```

After adding the required dependencies in the list, execute the following command for the installation of the modules:

```sh
npm run install
```

_If it doesn't work, use method 1_

---

## Module Import

```js
const Config = require("xtrmaddons-soft-suite-conf");
```

---