$(document).ready(function() {
   var quote;
   var author;
    function randomQuote() {
        $.ajax({
            url: "https://api.forismatic.com/api/1.0/?",
            dataType: "jsonp",
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
            success: function(response){
               quote = response.quoteText;
               author = response.quoteAuthor;
               $('#Quote').text(quote);
               if(author){
                   $('#Author').text('-- ' + author);
               }else{
                   $('#Author').text('- unKnown');
               }
            }
        })
    }
    randomQuote();
   $('#get-quote').on('click', function(){
        randomQuote();
   });

   $('#tweet').on('click',function(){
       window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '--'+ author));
   });
});