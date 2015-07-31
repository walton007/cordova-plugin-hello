/*global cordova, module*/

var exec = require('cordova/exec'), 
cordova = require('cordova');
           
var sprtprinter = function() {};
           
sprtprinter.printImageData = function() {
    exec(null, null, "SPRTPrinter", "printImageData", []);
};
           
sprtprinter.printBarcode = function() {
    exec(null, null, "SPRTPrinter", "printBarcode", []);
};

           
module.exports = sprtprinter;