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

# Développement

## Build

Commande pour réaliser la compilation avec Babel pour la distribution:

```bash
npm run build
```

## Tests

Commandes pour réaliser les tests unitaires avec Mocha:

```bash
# Simple environment test
npm run test

# Development environment test with arguments.
npm run test:dev-arg

# Development environment test with no arguments.
npm run test:dev

# Production environment test.
npm run prod
```

## Eslint fix

Commande pour réaliser les fix avec Eslint:

```bash
npm run eslint
```
