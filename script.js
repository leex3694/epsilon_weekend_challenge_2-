$(document).ready(function(){

  // this key wasn't working : var key = '183c45a438aab373e4e233bb9285d251:0:73000899';

//function callAjax(data){
//function search(query){
$.ajax( {
    type: "GET",
    crossDomain: true,
    json:"json_callback",
    dataType: "json",
    url: "http://api.nytimes.com/svc/topstories/v1/world.json?&api-key=0b3e78dcb22d3e998b072dfe9c218975:16:73000899"       
          // http://api.nytimes.com/svc/topstories/v1/world.json?api-key=183c45a438aab373e4e233bb9285d251:0:73000899    
        // + "query=" + encodeURI(query) + "

} ).done(function(data){
 console.log(data);
      
      var section = data.results;
      console.log(section);

      for (var i = 0; i<section.length; i++){
        var clickLink = "<a href='" + section[i].url +"'> <button class='buttonLink'>See Article</button></a>" ;
        
        // "<img src='" + section[i].multimedia[0].url + "'>";

         function missingPic (media){
           var imgSrc;// "<img src='" + section[i].multimedia[0].url + "'>"; 
            if (section[i].multimedia ==""){            
              imgSrc = "<img src='http://marijuana-majority.com.s133485.gridserver.com/wp-content/plugins/special-recent-posts/images/icons/default-thumb.gif'>";
            } else {              
              imgSrc = "<img src='" + section[i].multimedia[0].url + "'>";
            }
            return imgSrc;
        };        
        

        $(".nyTimes").append( "<div class='article'>" + missingPic(section[i].multimedia) + "<p>" + section[i].title+ "</p>" + clickLink +  "</div>" );
        // + "<button class='link'>link" + "</button>"
                          
       };
       
       $('.searchButton').on('click', function(){
        var articleSearch = $('.searchBox').val();
        console.log('article search: ', articleSearch);
        console.log("http://api.nytimes.com/svc/topstories/v1/world.json?" + articleSearch + "&api-key=0b3e78dcb22d3e998b072dfe9c218975:16:73000899");
        search(articleSearch);
    })
      
 function searchCallback(results) {
    console.log(results);
}

// searchCallback(data);
//         var article = data.results[0];
//         console.log(article);
//         $(".myDiv").append(article.title);

});


// search function closed bracket 
//};






})


