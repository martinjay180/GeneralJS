var assert = require('assert');
var string = require('../lib/string.js');

describe('String Format', function() {
	
  describe('"unit {0}".format("test")', function () {
    it('should equal "unit test"', function () {
    	var str = "unit {0}".format("test");
      	assert.equal(str, "unit test");
    });
  });

});

describe('String toInt()', function() {
	
  describe('toInt() --no fallback', function () {
    it('should equal 3', function () {
    	var int = "3".toInt();
      	assert.equal(int, 3);
    });
    it('It is not a valid int, and no fallback. Should equal 0', function () {
      	assert.equal("asdf".toInt(), 0);
    });
  });

  describe('toInt("3")', function () {
    it('should equal 2', function () {
      	assert.equal("2".toInt(3), 2);
      	assert.equal("asdf".toInt(3),3);
    });
  });

  describe('toInt() on bad string', function () {
    it('should equal fallback', function () {
    	var str = "";
      	assert.equal(str.toInt(4), 4);
    });
  });

});