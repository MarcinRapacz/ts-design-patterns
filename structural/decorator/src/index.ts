import { CheesePizzaDecorator } from "./CheesePizzaDecorator";
import { MediumPizza } from "./MediumPizza";
import { SalamiPizzaDecorator } from "./SalamiPizzaDecorator";

const pizzaBase = new MediumPizza();
const mediumPizzaWithCheese = new CheesePizzaDecorator(pizzaBase);
const p2 = new SalamiPizzaDecorator(mediumPizzaWithCheese);
const price = p2.calculatePizza();
console.log({ price });
