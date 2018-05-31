"use strict";

function picPage(num) {
  var i;
  var showing;
  var hidden;
  var hidden2;
  if(num === 1 || (num === 0 && document.getElementById("picSet2").style.display == "block")) {
    showing = document.getElementsByClassName("picSet1");
    hidden = document.getElementsByClassName("picSet2");
    hidden2 = document.getElementsByClassName("picSet3");
  }
  else if(num === 2 || (num === 0 && document.getElementById("picSet3").style.display == "block") || (num === 4 && document.getElementById("picSet1").style.display == "block")) {
    hidden = document.getElementsByClassName("picSet1");
    showing = document.getElementsByClassName("picSet2");
    hidden2 = document.getElementsByClassName("picSet3");
  }
  else if(num === 3 || (num === 4 && document.getElementById("picSet2").style.display == "block")) {
    hidden = document.getElementsByClassName("picSet1");
    hidden2 = document.getElementsByClassName("picSet2");
    showing = document.getElementsByClassName("picSet3");
  }
  for (i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "none";  
  }
  for (i = 0; i < hidden2.length; i++) {
    hidden2[i].style.display = "none";  
  }
  for (i = 0; i < showing.length; i++) {
    showing[i].style.display = "block";  
  }
  document.getElementById("gallery").focus();
}