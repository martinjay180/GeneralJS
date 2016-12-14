var assert = require('assert');
var string = require('../lib/object.js');

var obj = { 'a' : { 'b' : "456" }, c : "123" };

describe('Object getValue() with key', function () {
    
    it('should return "123"', function () {
        assert.equal(obj.getValue("c"), "123");
    });

});

describe('Object getValue() with compound keys', function () {
    
    it('should return "123"', function () {
        assert.equal(obj.getValue("a.b"), "456");
    });
});

describe('Object getValue() with bad key', function () {
    
    it('should return "false"', function () {
        assert.equal(obj.getValue("b"), false);
    });
});

describe('Object getValue() with bad compount key', function () {
    
    it('should return "false"', function () {
        assert.equal(obj.getValue("a.c"), false);
    });
});

describe('Object getValue() with bad key and fallback', function () {
    
    it('should return "321"', function () {
        assert.equal(obj.getValue("b", 321), 321);
    });
});

describe('Object getValue() with bad compound key and fallback', function () {
    
    it('should return "321"', function () {
        assert.equal(obj.getValue("a.c", 321), 321);
    });
});