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

### last

The last function will return the last item in the array.

    var arr = [ 'one', 'two', 'three' ];
    arr.last();
    => 'three'

### log 

    var arr = [ 'one', 'two', 'three' ];
    arr.log();
    arr.log("Message");
    => [ 'one', 'two', 'three' ]
    => Message: [ 'one', 'two', 'three' ]
    
### asArray

This function will return the passed object as an array. Useful when objects or arrays can be supplied.

    var a = 1;
    var b = [1,2,3];
    Array.asArray(a);
    Array.asArray(b);
    => [1];
    => [1,2,3];
    
## Object

### getValue

This function will test if an object has a property and return it. It can also take in an array of properties to test and it returns the first match. Will return fallBack value if no matches are made.

    var obj = {a:1, b:2, c:3};
    obj.getValue("c");
    => 3;    
    obj.getValue("d",4);
    => 4;
    obj.getValue(["d","e","c"]);
    => 3;
