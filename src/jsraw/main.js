"use strict";
let jsonData, data, collectionLink , collectionIC;

jsonData =  [{"date":"2018-12-01","question":"%est questidasthe length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-02","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-03","question":"asdtion test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-04","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-05","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-06","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-07","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-08","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-09","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-10","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-11","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-12","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-13","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-14","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-15","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-16","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-17","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-18","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-19","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-20","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-21","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-22","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-23","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"},{"date":"2018-12-24","question":"Test question test the length and question?","video_url":"https://www.youtube.com/watch?v=LkB5CSNQoQs"}];

data = JSON.parse(JSON.stringify(jsonData));

collectionLink = $('.ylink');

collectionIC = $('.item-content');


data.forEach((element,i) => {

      $(collectionLink[i]).attr('href', element.video_url);
      $(collectionIC[i]).text(element.question);

});


var $videoSrc;  

$('.ylink').click(function() {
    $videoSrc = $(this).attr( "href" );
    console.log($videoSrc, '5436546456');
});


  

$('#myModal').on('shown.bs.modal', function (e) {
    
$("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
})
  
  

$('#myModal').on('hide.bs.modal', function (e) {

    $("#video").attr('src',$videoSrc); 
}) 
    
    
