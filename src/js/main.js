"use strict";var jsonData=void 0,data=void 0,collectionLink=void 0,collectionIC=void 0,sourceSrc=void 0,textSrc=void 0,content1=$(".content-1"),content2=$(".content-2"),superbutton=$(".btn_super_power");jsonData=[{date:"2018-12-01",question:"Question 1 and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-02",question:" Question 2 and question the length and question?",video_url:"https://www.youtube.com/embed/R0DELkWTOHM"},{date:"2018-12-03",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-04",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-05",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-06",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-07",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-08",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-09",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-10",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-11",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-12",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-13",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-14",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-15",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-16",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-17",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-18",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-19",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-20",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-21",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-22",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-23",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"},{date:"2018-12-24",question:"Test question test the length and question?",video_url:"https://www.youtube.com/embed/5yS3Y-d5bDE"}],data=JSON.parse(JSON.stringify(jsonData)),collectionLink=$("area"),collectionIC=$(".item-content"),data.forEach(function(t,e){$(collectionLink[e]).attr({href:t.video_url,title:t.question})}),$("area").click(function(t){var e=$("#modaltext");sourceSrc=t.target.href,textSrc=t.target.title,e.on("shown.bs.modal",function(t){$(".content-text-message").text(textSrc)}),e.on("hide.bs.modal",function(t){content1.css("display","block"),superbutton.css("display","block"),content2.css("display","none"),$("#video").attr("src",sourceSrc)})}),superbutton.click(function(t){superbutton.css("display","none"),content1.css("display","none"),content2.css("display","block"),$("#video").attr("src",sourceSrc+"?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1")}),function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};window.requestAnimationFrame=t}();var flakes=[],canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),flakeCount=400,mX=-100,mY=-100;function snow(){ctx.clearRect(0,0,canvas.width,canvas.height);for(var t=0;t<flakeCount;t++){var e=flakes[t],n=mX,o=mY,s=e.x,i=e.y,u=Math.sqrt((s-n)*(s-n)+(i-o)*(i-o));if(u<150){var d=(n-s)/u,a=(o-i)/u,c=150/(u*u)/2;e.velX-=c*d,e.velY-=c*a}else e.velX*=.98,e.velY<=e.speed&&(e.velY=e.speed),e.velX+=Math.cos(e.step+=.05)*e.stepSize;ctx.fillStyle="rgba(255,255,255,"+e.opacity+")",e.y+=e.velY,e.x+=e.velX,(e.y>=canvas.height||e.y<=0)&&reset(e),(e.x>=canvas.width||e.x<=0)&&reset(e),ctx.beginPath(),ctx.arc(e.x,e.y,e.size,0,2*Math.PI),ctx.fill()}requestAnimationFrame(snow)}function reset(t){t.x=Math.floor(Math.random()*canvas.width),t.y=0,t.size=3*Math.random()+2,t.speed=1*Math.random()+.5,t.velY=t.speed,t.velX=0,t.opacity=.5*Math.random()+.3}function init(){for(var t=0;t<flakeCount;t++){var e=Math.floor(Math.random()*canvas.width),n=Math.floor(Math.random()*canvas.height),o=3*Math.random()+2,s=1*Math.random()+.5,i=.5*Math.random()+.3;flakes.push({speed:s,velY:s,velX:0,x:e,y:n,size:o,stepSize:Math.random()/30,step:0,opacity:i})}snow()}canvas.width=window.innerWidth,canvas.height=window.innerHeight,canvas.addEventListener("mousemove",function(t){mX=t.clientX,mY=t.clientY}),window.addEventListener("resize",function(){canvas.width=window.innerWidth,canvas.height=window.innerHeight}),init();