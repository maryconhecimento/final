window.onload = function(){
    /* For each paragraph on the page, assign an anonymous function to the onclick event that
adds the class ‘clicked’ to the element and changes the background color to yellow
• For each paragraph on the page, assign an anonymous function to the onmouseover event
that changes the font style to italic (for this, use style.fontStyle = ‘italic’) */

var pars = document.getElementsByTagName('p');

for (let i=0; i< pars.length; i++) {
  pars[i].onclick = function() {
  this.className = 'clicked';
  this.setAttribute('style', 'background-color: yellow');
}
}
}
//jQuery
$(document).ready(function(){
      $('p').hover(function() {
        this.style.fontStyle = 'italic';
      });
    
    });