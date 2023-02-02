import { createGildedRose } from "./golden-master-text-test";

let days: number = 2;

if (process.argv.length > 2) {
  days = +process.argv[2];
}

const result = createGildedRose(days);

console.log(result);
