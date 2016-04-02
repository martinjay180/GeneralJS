var assert = require('assert');
var string = require('../lib/boolean.js');

describe('Boolean', function() {
	
  describe('flip test', function () {
    it('should flip true to false', function () {
    	var bool = true;
      	assert.equal(bool.flip(), false);
    });
  });

});