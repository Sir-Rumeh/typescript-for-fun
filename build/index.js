"use strict";
/* eslint-disable prettier/prettier */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const world = "world";
function hello(who = world) {
    console.log("greeting", `Hello ${who}! `);
}
exports.hello = hello;
hello();
//# sourceMappingURL=index.js.map