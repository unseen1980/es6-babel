"use strict";

var _codes = require("./codes");

var hw = new _codes.HelloWorld();
hw.setName("Chris");

var p = document.createElement("p");
p.innerText = hw.printPhrase();
document.querySelector("body").appendChild(p);