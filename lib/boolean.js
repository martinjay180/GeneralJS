'use strict';

Boolean.prototype.flip = function () {
    return !this;
}

Boolean.prototype.log = function (msg){
    if(msg){
        console.log(msg, this);
    } else {
        console.log(this);
    }
}