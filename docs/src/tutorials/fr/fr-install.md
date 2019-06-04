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

# Installation

## Méthode 1

Exécuter la commande suivante pour l'installation des modules:

```bach
npm install --save https://github.com/shim-sao/xtrmaddons-soft-suite-conf
```

## Méthode 2

```javascript
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

Après avoir ajouté les dépendances nécessaires à la liste, exécuter la commande suivante pour l'installation des modules:

```bach
npm run install
```

---