# GeneralJS
A general purpose JavaScript library.

[![build status](https://secure.travis-ci.org/martinjay180/GeneralJS.png)](https://travis-ci.org/ martinjay180/GeneralJS)

## Strings

### format

    "This is pretty {0}".format("cool");
    
### toInt(fallback)

    "123".toInt();
    "123a".toInt(3);
    
## Boolean

### flip

    var test = true;
    test.flip();

Helpful when making a toggle function:

    <button ng-click="displayStuff.flip()"></button>
