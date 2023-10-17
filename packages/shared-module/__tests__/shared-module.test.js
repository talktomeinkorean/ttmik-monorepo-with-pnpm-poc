'use strict';

const sharedModule = require('..');
const assert = require('assert').strict;

assert.strictEqual(sharedModule(), 'Hello from sharedModule');
console.info('sharedModule tests passed');
