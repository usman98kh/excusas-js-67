/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator(who, action, what, when) {
  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * action.length);
  let whenindex = Math.floor(Math.random() * when.length);
  console.log(who);
  console.log(Math.random());

  let excuse = `${who[whoindex]} ${action[actionindex]} ${what[whatindex]} ${when[whenindex]}`;
  return excuse;
}

window.onload = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  const excuse = excuseGenerator(who, action, what, when);
  document.getElementById("excuse").innerHTML = excuse;
  console.log(excuse);
};
