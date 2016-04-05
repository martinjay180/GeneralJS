'use strict';

String.prototype.format = function () {
    var str = this;
    for (var i = 0; i < arguments.length; i++) {
        var regEx = new RegExp("\\{" + (i) + "\\}", "gm");
        str = str.replace(regEx, arguments[i]);
    }
    return str;
}

String.prototype.toInt = function (fallBack) {
    fallBack = fallBack || 0;
    var str = this;
    if(!str){
        return fallBack;
    }
    var strAsInt = parseInt(str);
    if(isNaN(strAsInt)){
        return fallBack;
    } else {
        return strAsInt;
    }
}

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}
