var assert = require('assert');
var string = require('../lib/string.js');

describe('String', function() {
	
  describe('"unit {0}".format("test")', function () {
    it('should equal "unit test"', function () {
    	var str = "unit {0}".format("test");
      	assert.equal(str, "unit test");
    });
  });

});