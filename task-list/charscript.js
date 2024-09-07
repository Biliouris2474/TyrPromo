var modal1 = document.getElementById("jfbio");

// Get the button that opens the modal
var button1 = document.getElementById("jf");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
button1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

/** @param
 {Element} node */
function  isInsideModal(node) {
  if (!node) return false
  return node.classList.contains("modal") || isInsideModal(node.parentElement);
}

window.onclick = e => {
  if (!isInsideModal(e.currentTarget)) {
    for (const el of document.querySelectorAll(".modal")) {
      el.style.display = "none";
    }
}
}



var modal2 = document.getElementById("edbio");

var button2 = document.getElementById("ed");

var span2 = document.getElementsByClassName("close")[1];

button2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

var modal3 = document.getElementById("lsbio");

var button3 = document.getElementById("ls");

var span3 = document.getElementsByClassName("close")[2];

button3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

var modal4 = document.getElementById("axbio");

var button4 = document.getElementById("ax");

var span4 = document.getElementsByClassName("close")[3];

button4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

var modal5 = document.getElementById("dkbio");

var button5 = document.getElementById("dk");

var span5 = document.getElementsByClassName("close")[4];

button5.onclick = function() {
  modal5.style.display = "block";
}

span5.onclick = function() {
  modal5.style.display = "none";
}

var modal6 = document.getElementById("fkbio");

var button6 = document.getElementById("fk");

var span6 = document.getElementsByClassName("close")[5];

button6.onclick = function() {
  modal6.style.display = "block";
}

span6.onclick = function() {
  modal6.style.display = "none";
}

var modal7 = document.getElementById("lgbio");

var button7 = document.getElementById("lg");

var span7 = document.getElementsByClassName("close")[6];

button7.onclick = function() {
  modal7.style.display = "block";
}

span7.onclick = function() {
  modal7.style.display = "none";
}

var modal8 = document.getElementById("pdbio");

var button8 = document.getElementById("pd");

var span8 = document.getElementsByClassName("close")[7];

button8.onclick = function() {
  modal8.style.display = "block";
}

span8.onclick = function() {
  modal8.style.display = "none";
}

var modal9 = document.getElementById("kmbio");

var button9 = document.getElementById("km");

var span9 = document.getElementsByClassName("close")[8];

button9.onclick = function() {
  modal9.style.display = "block";
}

span9.onclick = function() {
  modal9.style.display = "none";
}

var modal10 = document.getElementById("cmbio");

var button10 = document.getElementById("cm");

var span10 = document.getElementsByClassName("close")[9];

button10.onclick = function() {
  modal10.style.display = "block";
}

span10.onclick = function() {
  modal10.style.display = "none";
}

var modal11 = document.getElementById("mmbio");

var button11 = document.getElementById("mm");

var span11 = document.getElementsByClassName("close")[10];

button11.onclick = function() {
  modal11.style.display = "block";
}

span11.onclick = function() {
  modal11.style.display = "none";
}

var modal12 = document.getElementById("tmbio");

var button12 = document.getElementById("tm");

var span12 = document.getElementsByClassName("close")[11];

button12.onclick = function() {
  modal12.style.display = "block";
}

span12.onclick = function() {
  modal12.style.display = "none";
}