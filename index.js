"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    id("time").addEventListener("click", time);
    id("add").addEventListener("click", add);
    id("subtract").addEventListener("click", subtract);
    id("different").addEventListener("click", different);
    id("evil").addEventListener("click", evil);
    id("reset").addEventListener("click", reset);
  }

  function time() {
    id("photos").classList.toggle("night");
    id("body").classList.toggle("nightbkgd");
    id("header").classList.toggle("nighttxt");
    let button1 = document.querySelector('button');
    button1.classList.toggle("nightbtn");
    button1.classList.toggle("nightbtnhvr");
    button1.classList.toggle("nightbtnact");
  }

  function add() {
    let raph = document.createElement("img");
    raph.src = "img/raph1.png";
    raph.alt = "raphael meng being a hot n sexy himbo :)";
    if(id("photos").childNodes.length==0) {
      id("photos").appendChild(raph);
    }
    id("photos").insertBefore(raph, id("photos").firstChild);
  }

  function subtract() {
    if (id("photos").lastChild !== null) {
      id("photos").removeChild(id("photos").lastChild);
    }
  }

  function different() {
    if (id("photos").lastChild !== null) {
      id("photos").removeChild(id("photos").lastChild);
    }
    add();
  }

  function evil() {
    reset();
    let evil = document.createElement("img");
    evil.style.height = "200px";
    evil.src = "img/evil.jpg";
    evil.alt = "its ethan hehe";
    id("photos").appendChild(evil);
  }

  function reset(){
    let all = document.getElementById("photos");
    all.innerHTML = "";
  }

  function id(id) {
    return document.getElementById(id);
  }
})();
