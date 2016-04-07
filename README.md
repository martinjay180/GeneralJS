# GeneralJS [![Build Status](https://travis-ci.org/martinjay180/GeneralJS.svg?branch=master)](https://travis-ci.org/martinjay180/GeneralJS)
A general purpose JavaScript library.
## Strings

### format

    "This is pretty {0}".format("cool");
    
### log 

    var user = "John Doe";
    user.log();
    user.log("Current User");
    => John Doe
    => Current User: John Doe
    
### toInt(fallback)

    "123".toInt();
    "123a".toInt(3);
    
### reverse

    "test".reverse();
    
Output:

    tset
    
## Boolean

### flip

    var test = true;
    test.flip();

Helpful when making a toggle function:

    <button ng-click="displayStuff.flip()"></button>
    
### log

    var active = true;
    active.log();
    active.log("Active");
    => true
    => Active : true
    
## Array

### log 

    var arr = [ 'one', 'two', 'three' ];
    arr.log();
    arr.log("Message");
    => [ 'one', 'two', 'three' ]
    => Message: [ 'one', 'two', 'three' ]
