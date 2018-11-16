"use strict";
let jsonData, data, collectionLink , collectionIC, sourceSrc, textSrc;

jsonData =  [{"date":"2018-12-01","question":"Question 1 and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-02","question":" Question 2 and question the length and question?","video_url":"https://www.youtube.com/embed/R0DELkWTOHM"},{"date":"2018-12-03","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-04","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-05","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-06","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-07","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-08","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-09","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-10","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-11","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-12","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-13","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-14","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-15","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-16","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-17","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-18","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-19","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-20","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-21","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-22","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-23","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-24","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"}];

data = JSON.parse(JSON.stringify(jsonData));

collectionLink = $('area');

collectionIC = $('.item-content');


data.forEach((element,i) => {

      $(collectionLink[i]).attr({ href: element.video_url,
                                title: element.question });

});


  

$('area').click((event)=>{
    sourceSrc = event.target.href;
    textSrc = event.target.title;

    $('#modaltext').on('shown.bs.modal', (e)=>{

            $('.content-text-message').text(textSrc); 

    });

    $('#modaltext').on('hide.bs.modal', (e)=>{
        $('.content-text-message').text("");   
    });

    $('#myModal').on('shown.bs.modal', function (e) {
    
        $("#video").attr('src', sourceSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
    });
          
          
        
    $('#myModal').on('hide.bs.modal', function (e) {
        
            $("#video").attr('src', sourceSrc); 
    }); 
});

  


    

