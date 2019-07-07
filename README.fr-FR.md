# XtrmAddons Soft Suite Logger [![en-GB](https://raw.githubusercontent.com/shim-sao/assets/master/images/united-kingdom-flag-icon-16.png)](README.md)

Ce répertoire contient le système de configuration utilisé par les application XtrmAddons en NodeJs.

## Installation

### Méthode 1

Exécutez la commande suivante pour l'installation des modules:

```batch
npm install --save https://github.com/shim-sao/xtrmaddons-soft-suite-conf
```

### Méthode 2

```js
// Ajout de la dépendance au fichier package.json
{
  "name": "my-project",
  "version": "0.0.0",
  "dependencies": {
    // Lien direct vers la branche courante du Répertoire Git
    // Copier/coller cette dépendance.
    "xtrmaddons-soft-suite-conf": "shim-sao/xtrmaddons-soft-suite-conf"
  }
}
```

Après avoir ajouté les dépendances nécessaires à la liste, exécutez la commande suivante pour l'installation des modules:

```batch
npm run install
```

_Si cela ne fonctionne pas, utiliser la méthode 1_

---

## Importation du module

```js
const Config = require("xtrmaddons-soft-suite-conf");
```

---
