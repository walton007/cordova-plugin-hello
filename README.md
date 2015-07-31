# Cordova SPRT printer Plugin

plugin that can be used to connect to sprt t9i printer.
support iOS only


## Using
Clone the plugin

    $ git clone https://github.com/don/cordova-plugin-sprtprinter.git

Create a new Cordova Project

    $ cordova create hello com.example.helloapp Hello
    
Install the plugin

    $ cd hello
    $ cordova plugin add ../cordova-plugin-sprtprinter
    

Edit `www/js/index.js` and add the following code inside `onDeviceReady`

```js
    var success = function(message) {
        alert(message);
    }

    var failure = function() {
        alert("Error calling Hello Plugin");
    }

    hello.greet("World", success, failure);
```

Install iOS or Android platform

    cordova platform add ios
    cordova platform add android
    
Run the code

    cordova run 

## More Info

For more information on setting up Cordova see [the documentation](http://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html#The%20Command-Line%20Interface)

For more info on plugins see the [Plugin Development Guide](http://cordova.apache.org/docs/en/4.0.0/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide)
