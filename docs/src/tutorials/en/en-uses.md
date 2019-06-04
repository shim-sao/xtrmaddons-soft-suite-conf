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

# Uses

## Import module

```javascript
const Config = require("xtrmaddons-soft-suite-conf");
```

## Examples of uses of the _Config_ class

### Get a property value

```javascript
// Example of nested property value.
// { my: { var1: "my variable 1"}}
var prop = Config.get("my:var1");
// output : my variable 1
```

### Set a property value

```javascript
// Simple value.
Config.set("myVar1", myValue);

// Nested value.
Config.set("myVar1:prop", myValue);

// Set a property value with chaining.
Config.set("myVar2", myValue).set("myVar3", myValue);
```

### Save configuration

```javascript
Config.save(function() {
  console.log("calling callback");
});
```