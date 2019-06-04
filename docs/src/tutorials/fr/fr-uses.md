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

# Utilisation

## Importation du module

```javascript
const Config = require("xtrmaddons-soft-suite-conf");
```

## Exemples d'utilisation de la class _Config_

### Obtenir la valeur d'une propriété

```javascript
// Exemple de propriété imbriquée
// { my: { var1: "my variable 1"}}
var prop = Config.get("my:var1");
// output : my variable 1
```

### Définir la valeur d'une propriété

```javascript
// Valeur simple
Config.set("myVar1", myValue);

// Valeur imbriquée
Config.set("myVar1:prop", myValue);

// Définir la valeur d'une propriété avec chainage.
Config.set("myVar2", myValue).set("myVar3", myValue);
```

### Sauvegarde de la configuration dans un fichier

```javascript
Config.save(function() {
  console.log("calling callback");
});
```

---
