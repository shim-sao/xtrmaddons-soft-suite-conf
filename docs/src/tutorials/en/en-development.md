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

# Scripts

## Build

Command to perform Babel compilation for distribution :

```bash
npm run build
```

## Tests

Command to perform unit tests with Mocha :

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

Command to perform fix with Eslint :

```bash
npm run eslint
```