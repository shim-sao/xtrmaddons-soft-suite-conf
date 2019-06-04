# XtrmAddons Soft Suite Conf

This directory contains the configuration system used by the XtrmAddons applications in NodeJs.

## Install

### Method 1

Execute the following command for the installation of the modules :

```bash
npm install --save https://github.com/shim-sao/xtrmaddons-soft-suite-conf
```

### Method 2

```javascript
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

After adding the needed dependencies in the list, execute the following command for the installation of the modules:

```bash
npm run install
```

---

## Module Import

```javascript
const Config = require("xtrmaddons-soft-suite-conf");
```

---
