'use strict';

var array = require('../lib/array.js');

Object.prototype.getValue = function (keys, fallBack) {
    var keyArr = Array.asArray(keys);
    for(var i = 0; i < keyArr.length; i++){
        var key = keyArr[i];
//        console.log("Object getValue", this, key, this.key, this[key]);
        if(this[key]){
            return this[key];
        }
    }
    return fallBack || false;
}