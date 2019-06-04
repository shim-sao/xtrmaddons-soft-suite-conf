<section class="tutorial-section">
  <header>
    <ul>
      <li><a href="tutorial-en-install.html">Install</a></li>
      <li><a href="tutorial-en-uses.html">Uses</a></li>
      <li><a href="tutorial-en-properties.html">Configuration properties</a></li>
      <li><a href="tutorial-en-development.html">Development</a></li>
    </ul>
  </header>
<section>

# Configuration Properties

## Config

```javascript
const Logger = require("xtrmaddons-soft-suite-conf");
```

---

## Config keys documentation

| Key  | Definition | Default |
|:-----|:-----------|:--------:|
| `app` | Property application reference name. |
| `environment` | Property environment |
| `filename` | Property filename of de configuration. |
| `secret` | Property secret application key. |

```javascript
const appRefName = Config.app;
const environment = Config.environment;
const filename = Config.filename;
const secret = Config.secret;
```

---

| Key  | Type | Definition | Default |
|:-----|:----: |:-----------|:--------:|
| `host` | `string` | Property hostname of the ExpressJs Services Server. |
| `port` | `number` | Property port of the ExpressJs Services Server. |
| `protocol` | `string` | Property protocol of the ExpressJs Services Server. |
| `rootDir` | `string` | Property application [root directory](https://nodejs.org/api/process.html#process_process_cwd). |
| _**BCrypt definition.**_ | | |
| `bcrypt` | `string` | Lib to help you to [hash passwords.](https://www.npmjs.com/package/bcrypt) |
| `bcrypt:saltRounds` | `number` |  |
| _**Bearer token definition.**_ | | |
| `bearer_token` | `string` | Property [ExpressJs bearer token](https://www.npmjs.com/package/express-bearer-token): Per RFC6750 this module will attempt to extract a [bearer token](https://swagger.io/docs/specification/authentication/bearer-authentication/]) from a request. |
| `bearer_token:bodyKey` | `string` | bearer token body key |
| `bearer_token:queryKey` | `string` | bearer token query key |
| `bearer_token:headerKey` | `string` | bearer token header key |
| `bearer_token:reqKey` | `string` | bearer token request key |
| _**Database definition.**_ | `string` | | |
| _**`db`**_   | _**`object`**_ | Property SQLite3 database connector informations. |
| `db:dateFormat` | `string` | Format of dates to store in the database. |
| `db:data` | `string` | Absolute path to the directory to store database files. |
| `db:file` | `string` | Name of the database file. |
| `db:migrations` | `string` | Absolute path to the directory of migrations. |
| _`db.path()`_ | _`function`_ | Method filename or full path to the dabase file. |
| _**Distribution definition.**_ | | |
| _**`dist`**_ | _**`object`**_ | Property definition of the distribution. |
| `dist:directory` | `string` | Property absolute path to the directory to store the distribution. |
| _`dist.path()`_ | _`function`_ | Method filename or full path to the starting point the distribution. |
| _**Locales definition.**_ | | |
| `i18n` | `string` | Property locales definition. |
| `i18n:locales` | `string` |  |
| `i18n:directory` | `string` |  |

```javascript
// Example: getting main application server host
const host = Config.get("host");
```

---
