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

# Install

## Method 1

Execute the following command for the installation of the modules:

```bash
npm install --save https://github.com/shim-sao/xtrmaddons-soft-suite-conf
```

## Method 2

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