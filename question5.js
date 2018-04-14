$(document).ready(function(){
 /* • Using jQuery, change the text color of all paragraphs to red
• Using jQuery, when an image with id ‘img1’ is clicked, change its width to 50px
• Using JavaScript (not jQuery), when an image with id ‘img2’ is double-clicked, change its
width attribute to 50
Surround all of the above code in the $(document).ready() jQuery function
*/
    $('p').css('color', 'red');

    $('#img1').click(function() {
      $(this).css('width', '50px');
    });

});
