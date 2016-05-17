var assert = require('assert');
var string = require('../lib/object.js');

var key = "c";
var keys = ["a", "b", "c"];
var obj = { c : "123" };

describe('Object getValue() with key', function () {
    
    it('should return "123"', function () {
        assert.equal(obj.getValue("c"), "123");
    });

});

describe('Object getValue() with array of keys', function () {
    
    it('should return "123"', function () {
        assert.equal(obj.getValue(keys), "123");
    });
});

describe('Object getValue() with bad key', function () {
    
    it('should return "false"', function () {
        assert.equal(obj.getValue("b"), false);
    });
});

describe('Object getValue() with bad key and fallback', function () {
    
    it('should return "321"', function () {
        assert.equal(obj.getValue("b", 321), 321);
    });
});