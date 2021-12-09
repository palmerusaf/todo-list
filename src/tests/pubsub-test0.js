//pubsub test module 0

import { pubsub } from "./pubsub.js";
import "./pubsub-test1";

function subTest1(data) {
  console.log("subtest1 logged:" + data);
}
pubsub.subscribe("test1", subTest1);

function pubTest1() {
  const thisData = "data1";
  pubsub.publish("test1", thisData);
}
pubTest1();
