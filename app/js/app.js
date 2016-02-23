import {HelloWorld} from "./main-class";

const hw = new HelloWorld();
hw.setName("Chris");

const p = document.createElement("p");
p.innerText = hw.printPhrase();
document.querySelector("body").appendChild(p);
