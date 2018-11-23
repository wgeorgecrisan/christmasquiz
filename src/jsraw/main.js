"use strict";


let jsonData, dataHere, collectionLink , collectionIC, sourceSrc, textSrc, latch = false;

let urlData = 'https://script.google.com/macros/s/AKfycbyKVHV9bnMU0Dw0ve7foszGh0Ra-0kVkbTmwybq6wZ9GusLBqAS/exec';
// ajax Call

collectionLink = $('area');

collectionIC = $('.item-content');

$.ajax({

    dataType: "json",
    url: urlData

}).then((data)=>{

      dataHere = data;

     dataHere.forEach((element,i) => {

        $(collectionLink[i]).attr({ href: element.video_url || '#',
                                  title: element.question
                               });
  
  });  

}).then(()=>{
    Array.prototype.forEach.call(collectionLink,(el)=>{
         
         if($(el).attr('href') == '#'){
             $(el).attr({'data-target':'none',
                        'data-toggle': 'none',
                        'title':'DISABLED'});
                        

         }
         latch = true;
    });
});  



$('area').click((event)=>{
    var modaltext = $('#modaltext');
    var videoHere = $("#video");
    sourceSrc = event.target.href;
    textSrc = event.target.title;

    if(!latch){
        return false;
    }


    /*
    $('.content-text-message').fadeOut(()=>{
        $('.content-text-message').text(textSrc);
    });
    $('.content-text-message').fadeIn();
    */
   modaltext.on('show.bs.modal', function (e) {

    videoHere.attr('src', sourceSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" );
 }); 
              
    modaltext.on('hide.bs.modal', function (e) {

        videoHere.attr('src', ""); 

    }); 
});


snowStorm.flakesMax = 150;
snowStorm.animationInterval = 138;
snowStorm.flakesMaxActive = 96;    
snowStorm.useTwinkleEffect = false;
snowStorm.followMouse = true
snowStorm.freezeOnBlur = false;
snowStorm.snowStick = false;
snowStorm.snowCharacter = '•';
snowStorm.useMeltEffect = false;
snowStorm.excludeMobile = false;
//snowStorm.targetElement = 'main_image33';


$('.main_image').mapster({
      strokeWidth: 6,
      stroke: true,
      strokeColor: '165B33',
      fillColor: '165B33',
      fillOpacity: 0.2
    });
