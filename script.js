/* eslint-disable no-undef */
"use strict";

carga();
fondo();
//Change abilities text in welcome div
function carga(){
  let jobs = ["Developer","Electronics Engineer", "Communications Engineer", "Music Lover", "Writer", "Football Lover"];
  let i=0;
  setInterval(function(){
    if(i==jobs.length){
      i=0;
    }
    document.getElementById("abilities").innerText=jobs[i];
    i++;
  }, 3000);
}

//Change background color (JQuery)
function fondo() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      $("body").addClass("cambio");
    }
    if ($(this).scrollTop() < 350) {
      $("body").removeClass("cambio");
    }
  });
}