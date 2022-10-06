import { Publisher } from "./Publisher";
import { Subscriber } from "./Subscriber";

const publisher = new Publisher();

const subscriber1 = new Subscriber("subscriber1");
const subscriber2 = new Subscriber("subscriber2");
const subscriber3 = new Subscriber("subscriber3");
const subscriber4 = new Subscriber("subscriber4");

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.subscribe(subscriber3);
publisher.unsubscribe(subscriber2);
publisher.subscribe(subscriber4);

publisher.norify("PS 5");
