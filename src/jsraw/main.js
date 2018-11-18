"use strict";


let jsonData, data, collectionLink , collectionIC, sourceSrc, textSrc;
//cache jquery
let content1 = $('.content-1'), content2 = $('.content-2') , superbutton = $('.btn_super_power');

jsonData =  [{"date":"2018-12-01","question":"Question 1 and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-02","question":" Question 2 and question the length and question?","video_url":"https://www.youtube.com/embed/R0DELkWTOHM"},{"date":"2018-12-03","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-04","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-05","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-06","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-07","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-08","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-09","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-10","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-11","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-12","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-13","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-14","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-15","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-16","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-17","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-18","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-19","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-20","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-21","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-22","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-23","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"},{"date":"2018-12-24","question":"Test question test the length and question?","video_url":"https://www.youtube.com/embed/5yS3Y-d5bDE"}];

data = JSON.parse(JSON.stringify(jsonData));

collectionLink = $('area');

collectionIC = $('.item-content');


data.forEach((element,i) => {

      $(collectionLink[i]).attr({ href: element.video_url,
                                title: element.question
                             });

});


$('area').click((event)=>{
    var modaltext = $('#modaltext');
    sourceSrc = event.target.href;
    textSrc = event.target.title;
    $('.content-text-message').fadeOut(()=>{
        $('.content-text-message').text(textSrc);
    });
    $('.content-text-message').fadeIn();
    
              
    modaltext.on('hide.bs.modal', function (e) {
        content1.css("display","block");
        superbutton.css("display","block");
        content2.css("display","none");
            $("#video").attr('src', sourceSrc); 
    }); 
});

// button functionality
superbutton.click((event)=>{
    superbutton.css("display","none");
      content1.css("display","none");
      content2.css("display","block"); 
      $("#video").attr('src', sourceSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" );
});



// Snow effect 
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    flakeCount = 400,
    mX = -100,
    mY = -100

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],
            x = mX,
            y = mY,
            minDist = 150,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

        ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;
            
        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }


        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(snow);
};

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 3) + 2;
    flake.speed = (Math.random() * 1) + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = (Math.random() * 3) + 2,
            speed = (Math.random() * 1) + 0.5,
            opacity = (Math.random() * 0.5) + 0.3;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            opacity: opacity
        });
    }

    snow();
};

canvas.addEventListener("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

init();