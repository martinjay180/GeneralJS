var assert = require('assert');
var string = require('../lib/array.js');

describe('Array log()', function () {
    var arr = ["one", "two", "three"];
    it('should output array to console', function () {
        arr.log();
    });
    it('should output array to console with message', function(){
        arr.log("Message:");
   });
});