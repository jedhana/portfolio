//= require jquery
//= require bootstrap
//= require_tree .


// import Typed from 'typed.js'
//   const typed = new Typed(".typed", {
//     strings: ["Jeremy Dhanani", "[JEDHANA]"],
//     typeSpeed: 50,
//     backSpeed: 30,
//   });


// CONTENT TOGGLE BELOW
const button = document.getElementById("codediv");
const codecontent = document.getElementById("coding-content");

if (button){
  button.onclick = function(){
    codecontent.className = "open";
  };
}

// $('.codediv, .coding-content').click(function() {
//   $('.coding-content').toggleClass('close');
// });
