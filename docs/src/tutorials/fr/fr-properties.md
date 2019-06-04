<section class="tutorial-section">
  <header>
    <ul>
      <li><a href="tutorial-fr-install.html">Installation</a></li>
      <li><a href="tutorial-fr-uses.html">Utilisation</a></li>
      <li><a href="tutorial-fr-properties.html">Propriétés de configuration</a></li>
      <li><a href="tutorial-fr-development.html">Développement</a></li>
    </ul>
  </header>
<section>

# Propriétés de configuration

## Import class Config

```javascript
const Config = require("xtrmaddons-soft-suite-conf");
```

---

## Documentation des clés de Config

| Clé  | Définition | Défaut |
|:-----|:-----------|:--------:|
| `app` | Propriété nom de reférence de l'application. |
| `environment` | Propriété environement. |
| `filename` | Propriété filename of de configuration. |
| `secret` | Propriété clé secrète de l'application. |

```javascript
const appRefName = Config.app;
const environment = Config.environment;
const filename = Config.filename;
const secret = Config.secret;
```

---

| Key  | Type | Definition | Défaut |
|:-----|:----: |:-----------|:--------:|
| `host` | `string` | Propriété hostname of the ExpressJs Services Server. |
| `port` | `number` | Propriété port of the ExpressJs Services Server. |
| `protocol` | `string` | Propriété protocol of the ExpressJs Services Server. |
| `rootDir` | `string` | Propriété application [root directory](https://nodejs.org/api/process.html#process_process_cwd). |
| _**BCrypt definition.**_ | | |
| `bcrypt` | `string` | Lib to help you to [hash passwords.](https://www.npmjs.com/package/bcrypt) |
| `bcrypt:saltRounds` | `number` |  |
| _**Bearer token definition.**_ | | |
| `bearer_token` | `string` | Propriété [ExpressJs bearer token](https://www.npmjs.com/package/express-bearer-token): Per RFC6750 this module will attempt to extract a [bearer token](https://swagger.io/docs/specification/authentication/bearer-authentication/]) from a request. |
| `bearer_token:bodyKey` | `string` | bearer token body key |
| `bearer_token:queryKey` | `string` | bearer token query key |
| `bearer_token:headerKey` | `string` | bearer token header key |
| `bearer_token:reqKey` | `string` | bearer token request key |
| _**Database definition.**_ | `string` | | |
| _**`db`**_   | _**`object`**_ | Propriété SQLite3 database connector informations. |
| `db:dateFormat` | `string` | Format of dates to store in the database. |
| `db:data` | `string` | Absolute path to the directory to store database files. |
| `db:file` | `string` | Name of the database file. |
| `db:migrations` | `string` | Absolute path to the directory of migrations. |
| _`db.path()`_ | _`function`_ | Method filename or full path to the dabase file. |
| _**Distribution definition.**_ | | |
| _**`dist`**_ | _**`object`**_ | Propriété definition of the distribution. |
| `dist:directory` | `string` | Propriété absolute path to the directory to store the distribution. |
| _`dist.path()`_ | _`function`_ | Method filename or full path to the starting point the distribution. |
| _**Locales definition.**_ | | |
| `i18n` | `string` | Propriété locales definition. |
| `i18n:locales` | `string` |  |
| `i18n:directory` | `string` |  |

```javascript
// Example: getting main application server host
const host = Config.get("host");
```

---
