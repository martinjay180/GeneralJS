'use strict';

var array = require('../lib/array.js');

Object.prototype.getValue = function (propArr, fallBack) {
    propArr = typeof propArr === 'string' ? propArr.split(".") : propArr;
    var prop = propArr.shift();
    console.log(prop, propArr)
    if(propArr.length > 0 && this[prop]){
        return this[prop].getValue(propArr, fallBack);
    } else {
        return typeof this === 'string' ? this : this[prop] || fallBack || false;
    }
};