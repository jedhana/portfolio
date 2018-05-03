//= require jquery
//= require bootstrap
//= require_tree .



// document.getElementById('codediv').onClick=function(){
//   document.getElementById('coding-content').style.display='block';
// };


// function initElement() {
//   var p = document.getElementById("codediv");
//     // NOTE: showAlert(); or showAlert(param); will NOT work here.
//     // Must be a reference to a function name, not a function call.
//     p.onclick = showCode;
//   };

// function showCode(event) {
//   document.getElementById('coding-content').style.display='block';
// }

const button = document.getElementById("codediv");
const codecontent = document.getElementById("coding-content");

button.onclick = function(){
  codecontent.className = "open";
};
