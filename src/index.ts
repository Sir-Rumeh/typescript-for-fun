/* eslint-disable prettier/prettier */

const world = "world";

export function hello(who: string = world) {
  console.log("greeting", `Hello ${who}! `);
}

hello();
