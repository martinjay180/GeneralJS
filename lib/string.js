'use strict';

String.prototype.format = function () {
    var str = this;
    for (var i = 0; i < arguments.length; i++) {
        var regEx = new RegExp("\\{" + (i) + "\\}", "gm");
        str = str.replace(regEx, arguments[i]);
    }
    return str;
}
