var assert = require('assert');
var string = require('../lib/array.js');

var a = ["one", "two", "three"];
var b = "one";
var c = ["one"];

describe('Array log()', function () {
    it('should output array to console', function () {
        a.log();
    });
    it('should output array to console with message', function(){
        a.log("Message:");
   });
});

describe('Array asArray()', function () {
    it('should equal a', function () {
        assert.equal(Array.asArray(a), a);
    });
});