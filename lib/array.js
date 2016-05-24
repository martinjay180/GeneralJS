'use strict';

Array.prototype.log = function (msg){
    if(msg){
        console.log(msg, this);
    } else {
        console.log(this);
    }
}

Array.asArray = function(val){
    if(Array.isArray(val)){
        return val;
    } else {
        return [val];
    }
}

Array.prototype.last = function(){
    return this[this.length-1];
}