"use strict";var jsonData=void 0,dataHere=void 0,collectionLink=void 0,collectionIC=void 0,sourceSrc=void 0,textSrc=void 0,latch=!1,urlData="https://script.google.com/macros/s/AKfycbyKVHV9bnMU0Dw0ve7foszGh0Ra-0kVkbTmwybq6wZ9GusLBqAS/exec";collectionLink=$("area"),collectionIC=$(".item-content"),$.ajax({dataType:"json",url:urlData}).then(function(t){(dataHere=t).forEach(function(t,o){$(collectionLink[o]).attr({href:t.video_url||"#",title:t.question})})}).then(function(){Array.prototype.forEach.call(collectionLink,function(t){"#"==$(t).attr("href")&&$(t).attr({"data-target":"none","data-toggle":"none",title:"DISABLED"}),latch=!0})}),$("area").click(function(t){var o=$("#modaltext"),e=$("#video");if(sourceSrc=t.target.href,textSrc=t.target.title,!latch)return!1;o.on("show.bs.modal",function(t){e.attr("src",sourceSrc+"?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1")}),o.on("hide.bs.modal",function(t){e.attr("src","")})}),snowStorm.flakesMax=150,snowStorm.animationInterval=138,snowStorm.flakesMaxActive=96,snowStorm.useTwinkleEffect=!1,snowStorm.followMouse=!0,snowStorm.freezeOnBlur=!1,snowStorm.snowStick=!1,snowStorm.snowCharacter="•",snowStorm.useMeltEffect=!1,snowStorm.excludeMobile=!1,$(".main_image").mapster({strokeWidth:6,stroke:!0,strokeColor:"165B33",fillColor:"165B33",fillOpacity:.2});