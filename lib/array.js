'use strict';

Array.prototype.log = function (msg){
    if(msg){
        console.log(msg, this);
    } else {
        console.log(this);
    }
}