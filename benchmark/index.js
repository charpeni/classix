const benchmark = require("benchmark");
const classnames = require("classnames");
const { clsx } = require("clsx");

const { cx } = require("../dist");

const args = ["class1", "class2", false && "class3", true && "class4"];

new benchmark.Suite()
  .add("classnames", () => classnames(...args))
  .add("clsx", () => clsx(...args))
  .add("cx", () => cx(...args))
  .on("cycle", (event) => console.log(event.target.toString()))
  .run();
