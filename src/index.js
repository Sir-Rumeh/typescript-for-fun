"use strict";
/* eslint-disable prettier/prettier */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var world = "world";
function hello(who) {
    if (who === void 0) { who = world; }
    console.log("greeting", "Hello ".concat(who, "! "));
}
exports.hello = hello;
hello();
