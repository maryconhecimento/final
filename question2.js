window.onload = function(){
    /* • Using DOM 1, put a red solid 4px border around all images
• Alert how many days are left until Canada Day (July 1st) 2018*/

var allImages = document.getElementsByTagName('img');
  for(let i=0; i<allImages.length; i++){
    allImages[i].style.border = '4px solid red';
  }

var hoje = new Date();
var canadaDay = new Date(2018, 6, 1);
var missingDays = (canadaDay.getTime() - hoje.getTime()) / (1000*60*60*24);//milissegundos, minutos, horas, dias
alert(Math.round(missingDays) +' days to Canada Day.');

}