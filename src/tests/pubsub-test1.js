import { pubsub } from "./pubsub.js";

function subTest2(data) {
  console.log("subtest2 logged:" + data);
}
pubsub.subscribe("test1", subTest2);