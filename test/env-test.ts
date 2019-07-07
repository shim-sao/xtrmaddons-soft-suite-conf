/* eslint-disable no-console */
/* eslint-disable no-undef */
"use strict";

// Import external modules.
require("module-alias/register");
const assert = require("assert");

// Initialize environment test expected result.
// Initialize process environment, change the desired value.
// Should be the same as processed argument if passed.
// Example: NODE_ENV=test
// @see https://www.npmjs.com/package/cross-env
// process.env.NODE_ENV needs to be defined first.
// Otherwise "production" will be used by default.
const env = process.env.NODE_ENV || "production";

// Check process.env.NODE_ENV at application start
if (process.env.NODE_ENV == undefined)
  describe("process.env.NODE_ENV Mocha String Test Start", function() {
    it('process.env.NODE_ENV is "undefined" at start', function() {
      // assert.strictEqual(process.env.NODE_ENV, undefined, "process.env.NODE_ENV is undefined and will be set to production by default");
    });
  });

// Check process.env.NODE_ENV application start
// to be sure to have a defined environment before required.
describe("process.env.NODE_ENV Mocha String Test Before Required", function() {
  it(`process.env.NODE_ENV should be "${env}" before required`, function() {
    assert.strictEqual(process.env.NODE_ENV, env);
  });
});

// Import internal modules.
// import Config from "../";
const Config = require("../out");

// Defines some expected results.
// Change values to your own environment.
const prfx = env != "production" && env != "prod" ? env : "";
const ref = `xtrmaddons-soft-suite-conf (${process.env.NODE_ENV})`;
const secret = `My secret application ${process.env.NODE_ENV} key`;
const root = "F:\\GitHub\\_node\\master\\xtrmaddons-soft-suite-conf";
const filename = root + `\\config\\parameters${prfx ? "." + prfx : ""}.json`;
const dbFilename = `${prfx ? prfx + "." : ""}default.db3`;

const server = {
  argv: {
    host: "192.168.1.23",
    port: 3300,
    protocol: "https",
  },
  file: {
    host: "256.214.123.14",
    port: 998855,
    protocol: "http",
  },
  default: {
    host: "localhost",
    port: 123,
    protocol: "http",
  },
};

/* Tests */
// Default properties
describe("Config default properties Mocha String Test", function() {
  it(`Config.nodenv should be "${env}"`, function() {
    assert.equal(Config.nodenv, env);
  });

  it(`Config.nodenvprfx should be "${prfx}"`, function() {
    assert.equal(Config.nodenvprfx, prfx);
  });

  it(`Config.app should be "${ref}"`, function() {
    assert.equal(Config.app, ref);
  });

  it(`Config.filename should be "${filename}"`, function() {
    assert.equal(Config.filename, filename);
  });

  it(`Config.secret should be "${secret}"`, function() {
    assert.equal(Config.secret_key, secret);
  });

  it(`Config.rootDir should be "${root}"`, function() {
    assert.equal(Config.rootDir, root);
  });
});

// Server properties
describe("Config Server properties Mocha String Test", function() {
  // host
  ["host", "port", "protocol"].forEach(param => {
    ["argv", "file", "default"].forEach(from => {
      if (Config.get(param) == server[from][param])
        it(`Config.get(${param}) from '${from}' value "${
          server[from][param]
        }"`, function() {
          assert.equal(Config.get(param), server[from][param]);
        });
      if (!Config.get(param))
        it(`Config.get(${param}) in "undefined"`, function() {
          assert.equal(Config.get(param), server[from].default);
        });
    });
  });
});

// BCrypt properties
describe("Config bcrypt properties Mocha String Test", function() {
  it("Config.get('bcrypt:saltRounds') should be 10", function() {
    assert.equal(Config.get("bcrypt:saltRounds"), 10);
  });
});

// Bearer Token properties
describe("Config Bearer Token properties Mocha String Test", function() {
  it("Config.get('bearer_token:bodyKey') should be \"access_token\"", function() {
    assert.equal(Config.get("bearer_token:bodyKey"), "access_token");
  });

  it("Config.get('bearer_token:queryKey') should be \"access_token\"", function() {
    assert.equal(Config.get("bearer_token:queryKey"), "access_token");
  });

  it("Config.get('bearer_token:headerKey') should be \"Bearer\"", function() {
    assert.equal(Config.get("bearer_token:headerKey"), "Bearer");
  });

  it("Config.get('bearer_token:reqKey') should be \"token\"", function() {
    assert.equal(Config.get("bearer_token:reqKey"), "token");
  });
});

// Database properties
describe("Config Database properties Mocha String Test", function() {
  it("Config.get('db:dateFormat') should be \"YYYY-MM-DD HH:mm:ss.SSSSSSSSS\"", function() {
    assert.equal(Config.get("db:dateFormat"), "YYYY-MM-DD HH:mm:ss.SSSSSSSSS");
  });

  it(`Config.get('db:data') should be ${root}\\data"`, function() {
    assert.equal(Config.get("db:data"), root + "\\data");
  });

  it(`Config.get('db:file') should be "${dbFilename}"`, function() {
    assert.equal(Config.get("db:file"), dbFilename);
  });

  it(`Config.get('db').path()  should be ${root}\\data\\${dbFilename}"`, function() {
    assert.equal(Config.get("db").path(), root + `\\data\\${dbFilename}`);
  });
});

// Custom properties
describe("Config Custom properties Mocha String Test", function() {
  Config.set("custom:var1", "test property 1 override");
  Config.save();
  it("Config.get('custom:var1')  should be test property 1 override", function() {
    assert.equal(Config.get("custom:var1"), "test property 1 override");
  });
});

// Save configuration
Config.save();
