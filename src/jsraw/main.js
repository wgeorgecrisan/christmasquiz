"use strict";


let jsonData, dataHere, collectionLink , collectionIC, sourceSrc, textSrc, latch = false;
const hoverdiv = $('.hoverdiv');
//declare state

var state = {
    title: '',
    src: '',
    number: null,
    stateDisable: false
   }

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
                        'data-disabled':'disabled'
                    });
                        

         }
         latch = true;
    });
}).then(()=>{




});
   /*
.then(()=>{
      
        $('area[data-disabled=disabled]').mapster('set',false)
        .mapster('set',true,{ fillColor: '000000', strokeColor: 'cd0000', strokeWidth: 8 });
       
});  
 */


$('area').hover((el)=>{

    if(!latch){
        return false;
    } 

        let coords = el.target.coords.split(",").splice(0,2);
         state.src = el.target.href;
         state.title = el.target.title;
         state.number = el.target.id;

         if($(el.target).attr('href') == "#"){

            state.stateDisable = true;
            $('.number').css({"border-color": "orange", background: '#fff', color: 'orange'});

         } else {

            state.stateDisable = false;
            $('.number').css({"border-color": "white" , background: '#3e6d22' , color: 'white '});
            

         }
            

         $('.nrNr').text(state.number);

         hoverdiv.css({ display: "block", left: (coords[0] - 5) + 'px', top: (coords[1] -58) + 'px'});
}); 

$('#main_image33').on('mouseover',(el)=>{
        $('.nrNr').text("");
        hoverdiv.css({display: "none" ,left: 0 + 'px', top: 0 + 'px'});
        

}); 

hoverdiv.click((event)=>{
    
    hoverdiv.css({display: "none" ,left: 0 + 'px', top: 0 + 'px'});

    if(!latch){
        return false;
    } 
    
    if(state.stateDisable){
        
        return false;
    }
    

    var modaltext = $('#modaltext');
    var videoHere = $("#video");
    sourceSrc = state.src;
    textSrc = state.title;

      

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
/*

$('.main_image').mapster({
      strokeWidth: 6,
      stroke: true,
      strokeColor: '165B33',
      fillColor: '165B33',
      fillOpacity: 0.2
    });

*/
