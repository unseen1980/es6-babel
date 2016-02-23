"use strict";

var _mainClass = require("./main-class");

var hw = new _mainClass.HelloWorld();
hw.setName("Chris");

var p = document.createElement("p");
p.innerText = hw.printPhrase();
document.querySelector("body").appendChild(p);