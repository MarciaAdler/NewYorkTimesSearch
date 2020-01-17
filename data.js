$(document).ready(function(){

    resultsDisplay = $('<div>').addClass("container")
    $('body').append(resultsDisply);
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ topic + "&" + number + "&" + beginDate + "&" + endDate + "&api-key=OzSI5K7u60WaDaNWxAxhTxu4buE0suqh"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        for (let i = 0; i < number; i++) {
            var resultNumber = $('<label>').text(i++);
            $('.top-articles').append(resultNumber);
            var title = $('<h3>').addClass('title').text(response.doc[i]);
            var author = $('<p>').addClass('author').text(response.docs[i].byline);
            var result = $('<div>').addClass('row ');
            result.append(title);
            $('.top-articles').append(result);
            
            
        }

        
    })
})   