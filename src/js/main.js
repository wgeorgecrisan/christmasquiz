"use strict";var jsonData=void 0,dataHere=void 0,collectionLink=void 0,collectionIC=void 0,sourceSrc=void 0,textSrc=void 0,latch=!1,hoverdiv=$(".hoverdiv"),state={title:"",src:"",number:null,stateDisable:!1},urlData="https://script.google.com/macros/s/AKfycbyKVHV9bnMU0Dw0ve7foszGh0Ra-0kVkbTmwybq6wZ9GusLBqAS/exec";collectionLink=$("area"),collectionIC=$(".item-content"),$.ajax({dataType:"json",url:urlData}).then(function(t){dataHere=t,console.log(t),dataHere.forEach(function(t,e){$(collectionLink[e]).attr({href:t.video_url||"#",title:t.question})})}).then(function(){Array.prototype.forEach.call(collectionLink,function(t,e){if("#"==$(t).attr("href")){$(t).attr({"data-target":"none","data-toggle":"none","data-disabled":"disabled"});var o=t.coords.split(",").splice(0,2),a=$('<div class="number2"></div>'),r=$(a).appendTo("body");$(r).css({display:"block",left:Number(o[0])-25+"px",top:Number(o[1])-26+"px"})}latch=!0})}).then(function(){}),$("area").hover(function(t){if(!latch)return!1;var e=t.target.coords.split(",").splice(0,2);state.src=t.target.href,state.title=t.target.title,state.number=t.target.id,"#"==$(t.target).attr("href")?(state.stateDisable=!0,hoverdiv.css({visibility:"hidden"})):(state.stateDisable=!1,hoverdiv.css({visibility:"visible"})),$(".nrNr").text(state.number),hoverdiv.css({display:"block",left:Number(e[0])-65+"px",top:Number(e[1])-58+"px"})}),$("#main_image33").on("mouseover",function(t){$(".nrNr").text(""),hoverdiv.css({display:"none",left:"0px",top:"0px"})}),hoverdiv.click(function(t){if(hoverdiv.css({display:"none",left:"0px",top:"0px"}),!latch)return!1;if(state.stateDisable)return!1;var e=$("#modaltext"),o=$("#video");sourceSrc=state.src,textSrc=state.title,e.on("show.bs.modal",function(t){o.attr("src",sourceSrc+"?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1")}),e.on("hide.bs.modal",function(t){o.attr("src","")})}),snowStorm.flakesMax=95,snowStorm.animationInterval=120,snowStorm.flakesMaxActive=75,snowStorm.useTwinkleEffect=!1,snowStorm.followMouse=!1,snowStorm.freezeOnBlur=!1,snowStorm.snowStick=!1,snowStorm.snowCharacter="•",snowStorm.useMeltEffect=!1,snowStorm.excludeMobile=!1;