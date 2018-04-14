window.onload = function(){

    /* Write a function that loops through all of a page’s hyperlinks and disables any link that has
the word “bcit” in its href attribute.
• Call the function
#*/

document.links.onclick = function(event) {
    event.preventDefault();
  }
  for (var i=0;i<links.length;i++){
  document.links[i].href.indexOf('https://www.bcit.ca') >= 0;

}

}
/* document.images[0].onclick = function() {
alert('This link cannot be clicked');
event.preventDefault();*/