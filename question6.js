window.onload = function(){
/* • Using DOM scripting (i.e. document.createElement(…)) create the following elements (in
order):
1. An H1 element, with text node inside it containing the text ‘DOM Scripting’
2. A div, 200px height and 200px width, with red background
3. An image, inside the div with src ‘a.jpg’ and ID ‘img3’
• When the image with ID ‘img3’ is clicked, it moves 100px to the right after a 3 second
delay. Note: the image only needs to move once
#*/

var h1 = document.createElement('h1');
document.body.appendChild(h1);
var h1txt = document.createTextNode('DOM Scripting');
h1.appendChild(h1txt);

var div = document.createElement('div');
document.body.appendChild(div);
div.style.width='200px';
div.style.height='200px';
div.style.backgroundColor='red';

var img = document.createElement('img');
        img.src = 'a.jpg';
        img.id = 'img3';
        div.appendChild(img);

    
}