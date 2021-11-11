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
    //let select = Math.floor(3 * Math.random());
    raph.src = "img/raph" + 1 + ".png";
    raph.alt = "raphael meng being a hot n sexy himbo :)";
    if(id("photos").childNodes.length==0) {
      id("photos").appendChild(raph);
    }
    id("photos").insertBefore(raph, id("photos").firstChild);
  }

  function subtract() {
    if (id("photos").firstChild !== null) {
      id("photos").removeChild(id("photos").firstChild);
    }
  }

  function different() {
    if (id("photos").firstChild !== null) {
      id("photos").removeChild(id("photos").firstChild);
    }
    add();
  }

  function evil() {
    reset();
    let evil = document.createElement("img");
    evil.src = "img/evil.jpg";
    evil.alt = "its ethan hehe";
    evil.style.height = "350px";
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