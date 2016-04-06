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

describe('Boolean log()', function () {
    it('should output true to console', function () {
        var test = true;
        test.log();
    });
    it('should output true to console with message', function(){
        var test = true;
        test.log("Message:");
   });
});