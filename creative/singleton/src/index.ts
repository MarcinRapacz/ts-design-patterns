import { Configuration } from "./Configuration";

const configuration = Configuration.getInstance();
const configuration2 = Configuration.getInstance();

console.log("Is same: ", configuration === configuration2);
