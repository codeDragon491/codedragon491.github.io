(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("a4adb746",content,!0,{sourceMap:!1})},124:function(t,e,n){var content=n(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("932a8f60",content,!0,{sourceMap:!1})},139:function(t,e,n){"use strict";var o={mounted:function(){var t=new this.$ScrollMagic.Controller,e=new this.$GSAP.TimelineLite,n=new this.$GSAP.TimelineLite;e.from(".brand",1,{opacity:0,scale:0,rotation:360,ease:"power1"}),n.to(".brand",.5,{opacity:1,scale:1,rotation:360,ease:"power1"});new this.$ScrollMagic.Scene({duration:0,offset:150}).setTween(n).addTo(t),new this.$ScrollMagic.Scene({duration:0,offset:0}).setTween(e).addTo(t)},computed:{color:function(){return this.$route.params.id?"color: white":"color: rgba(0, 0, 0, 0.8)"}}},r=(n(190),n(26)),l={components:{NavBar:Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"nav"},[o("nuxt-link",{staticClass:"brand",attrs:{to:"/home"}},[o("img",{attrs:{src:n(189)}})]),t._v(" "),o("nav",[o("nuxt-link",{staticClass:"nav-item",style:t.color,attrs:{to:"/home"}},[t._v("\n      Home\n    ")]),t._v(" "),o("nuxt-link",{staticClass:"nav-item",style:t.color,attrs:{to:"/profile"}},[t._v("\n      Profile\n    ")]),t._v(" "),o("nuxt-link",{staticClass:"nav-item",style:t.color,attrs:{to:"/work"}},[t._v("\n      Work\n    ")]),t._v(" "),o("nuxt-link",{staticClass:"nav-item",style:t.color,attrs:{to:"/home"}},[t._v("\n      Contact\n    ")])],1),t._v(" "),o("div",{attrs:{id:"trigger"}})],1)}),[],!1,null,"2f4c7276",null).exports},head:function(){return{titleTemplate:"%s – Julia Trefas",meta:[{hid:"description",name:"description",content:"Where you can read about Julia's professional profile"}]}},data:function(){return{navbarHasMounted:!1}}},c=(n(192),Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar",{on:{"hook:created":function(e){t.navbarHasMounted=!0}}}),t._v(" "),n("transition",{attrs:{name:"slide-fade",mode:"out-in",appear:""}},[n("nuxt",{attrs:{navbarHasMounted:t.navbarHasMounted}})],1)],1)}),[],!1,null,null,null));e.a=c.exports},141:function(t,e,n){t.exports=n(142)},180:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("a07579c2",content,!0,{sourceMap:!1})},181:function(t,e,n){var o=n(64),r=n(182),l=n(183),c=n(184),d=n(185),f=n(186),h=n(187),m=n(188);e=o(!1);var x=r(l),w=r(c),v=r(d),y=r(f),M=r(h),z=r(m);e.push([t.i,'/*! Generated by Font Squirrel (https://www.fontsquirrel.com) on July 11, 2021 */@font-face{font-family:"Aileron Regular";src:url('+x+') format("woff2"),url('+w+') format("woff"),url('+v+') format("otf")}@font-face{font-family:"Peace Sans";src:url('+y+') format("woff2"),url('+M+') format("woff"),url('+z+') format("woff")}',""]),t.exports=e},183:function(t,e,n){t.exports=n.p+"fonts/aileron-regular-webfont.d7419ce.woff2"},184:function(t,e,n){t.exports=n.p+"fonts/aileron-regular-webfont.6eb46a6.woff"},185:function(t,e,n){t.exports=n.p+"fonts/Aileron-Regular.d321fa7.otf"},186:function(t,e,n){t.exports=n.p+"fonts/peace_sans-webfont.6c7a07f.woff2"},187:function(t,e,n){t.exports=n.p+"fonts/peace_sans-webfont.3d82fdc.woff"},188:function(t,e,n){t.exports=n.p+"fonts/peace_sans.aeba9f6.otf"},189:function(t,e,n){t.exports=n.p+"img/SimpleStudio-transparent.f8f1d88.png"},190:function(t,e,n){"use strict";n(123)},191:function(t,e,n){(e=n(64)(!1)).push([t.i,".brand[data-v-2f4c7276]{width:45%;max-width:150px;text-decoration:none}.nav[data-v-2f4c7276]{position:fixed;width:100%;left:0;top:0;display:flex;align-items:center;justify-content:space-between;z-index:1}.nav nav[data-v-2f4c7276]{font-size:20px;margin-right:1rem}.nav .nav-item[data-v-2f4c7276]{box-sizing:border-box;margin:0 12px;color:rgba(0,0,0,.8);text-decoration:none}.nav .nav-item.router-link-exact-active[data-v-2f4c7276]{border-bottom:2px solid inherit}.nav a[data-v-2f4c7276]{display:inline-block;margin-left:1rem}#trigger[data-v-2f4c7276]{display:none;margin-top:300px}@media screen and (min-width:768px){.brand[data-v-2f4c7276]{width:20%}}@media screen and (min-width:1280px){.brand[data-v-2f4c7276]{width:10%}}@media only screen and (min-width:1920px){.brand[data-v-2f4c7276]{width:8%}}",""]),t.exports=e},192:function(t,e,n){"use strict";n(124)},193:function(t,e,n){(e=n(64)(!1)).push([t.i,'html{-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{margin:0;font-family:"Aileron Regular","sans-serif";font-size:16px;line-height:1.5}#app{box-sizing:border-box;padding:0 1rem 1rem}@media screen and (min-width:768px){#app{padding:0 1.25rem 1.25rem}}hr{box-sizing:content-box;height:0;overflow:visible}a{color:#000;background-color:transparent}img{border-style:none;width:100%}h1,h2,h3,h4,h5,h6{display:flex;align-items:center;font-family:"Peace Sans",sans-serif}h1{font-size:50px}h1,h2{font-weight:700}h2{font-size:38px}h3{font-size:28px}h3,h4{font-weight:700}h4{font-size:21px}h5{font-size:16px}h5,h6{font-weight:700}h6{font-size:15px}b,strong{font-weight:bolder}small{font-size:80%}.eyebrow{font-size:20px}.-text-primary{color:#39b982}.-text-base{color:#000}.-text-error{color:tomato}.-text-gray{color:rgba(0,0,0,.5)}.-shadow{box-shadow:0 1px 2px 0 rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.13)}.badge{display:inline-flex;height:26px;width:auto;padding:0 7px;margin:0 5px;background:transparent;border-radius:13px;font-size:13px;font-weight:400;line-height:26px}.badge.-fill-gradient{background:linear-gradient(90deg,#16c0b0,#84cf6a);color:#fff}button,input,label,optgroup,select,textarea{display:inline-flex;font-family:"Open sans",sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:none}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:2px solid #39b982}label{color:rgba(0,0,0,.5);font-weight:700}input,textarea{box-sizing:border-box;border:1px solid rgba(0,0,0,.4)}textarea{width:100%;overflow:auto;font-size:20px}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}[type=number],[type=password],[type=search],[type=text]{height:52px;width:100%;padding:0 10px;font-size:20px}[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=text]:focus{border-color:#39b982}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[hidden]{display:none}select{width:100%;height:52px;padding:0 24px 0 10px;vertical-align:middle;background:#fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E") no-repeat right 12px center;background-size:8px 10px;border:1px solid rgba(0,0,0,.4);border-radius:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}select:focus{border-color:#39b982;outline:0}select:focus::ms-value{color:#000;background:#fff}select::ms-expand{opacity:0}.field{margin-bottom:24px}.error{border:1px solid red}.errorMessage{color:red}.fade-enter{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .5s ease-out}.fade-leave-to,.slide-fade-enter{opacity:0}.slide-fade-enter-active,.slide-fade-leave-active{transition:opacity .2s ease}.slide-fade-leave-to{opacity:0}.page{margin:150px auto}@media screen and (min-width:1024px){.page{max-width:750px;margin:150px auto}}',""]),t.exports=e},221:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return d})),n.d(e,"mutations",(function(){return f})),n.d(e,"actions",(function(){return h}));var o=n(40),r=n.n(o).a.create({baseURL:"http://my-json-server.typicode.com/codeDragon491/portfolio-data",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),l=function(){return r.get("/works")},c=function(t){return r.get("/works/"+t)},d=function(){return{works:[],work:{}}},f={SET_WORKS:function(t,e){t.works=e},SET_WORK:function(t,e){t.work=e}},h={fetchWorks:function(t){var e=t.commit;return l().then((function(t){e("SET_WORKS",t.data)}))},fetchWork:function(t,e){var n=t.commit;return c(e).then((function(t){n("SET_WORK",t.data)}))}}},34:function(t,e,n){"use strict";var o={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message}},head:function(){return{title:this.message}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),404===t.statusCode?n("p",[n("nuxt-link",{attrs:{to:"/"}},[t._v("\n      Return to homepage\n    ")])],1):t._e()])}),[],!1,null,null,null);e.a=component.exports},97:function(t,e,n){"use strict";var o=n(2),r=n(60),l=n(61),c=n.n(l),d=(n(217),n(219),{install:function(t,e){t.prototype.$GSAP={TweenMax:r.a,TimelineMax:TimelineMax,TimelineLite:TimelineLite,Linear:Linear,Power1:Power1,Power2:Power2,Power3:Power3,Back:Back},t.prototype.$ScrollMagic={Controller:c.a.Controller,Scene:c.a.Scene}}});o.a.use(d)},98:function(t,e,n){(function(t){var e=n(220);n(52),n(85),n(77),function(t){t.fn.splitText=function(e){(null==e||null==e||""==e||"words"!==e.type&&"lines"!==e.type&&"letters"!==e.type&&"sentences"!==e.type)&&(e={type:"lines",animation:"explode",justSplit:!1,duration:1,scale:!0,useLite:!1,colorize:null,useCSS:!1}),null==e.duration&&(e.duration=1);var element=t(this);element.hasClass("isSplit")?(element.empty(),element.text(t("#hidden_"+element.attr("id")).text())):(element.attr("id",String(Math.round(1e3*Math.random()+42))),element.addClass("isSplit"));var r=element.text(),c=0==e.useLite?new TimelineMax:new TimelineLite,d=element.text(),f=(t("#hidden_"+element.attr("id")),"hidden_"+element.attr("id"));if(null==document.getElementById(f)&&(t("body").append('<p class="hiddenText" id="hidden_'+element.attr("id")+'"></p>'),t(".hiddenText").text(r).css({display:"none"}),"pre"===t(".blank").css("white-space")&&0!=e.useCSS||t("<style rel='splitStyle'>.splitText{max-width: 600px;float: left;margin-top: 90px;margin-left: 20px;font-size:20px;}.splitText>div{white-space:pre-line;float:left;margin-right:5px;cursor:default;}.letter-measure{margin-right:0 !important;cursor:default;}.split-lines{white-space:nowrap !important;}.blank{margin-right:0px !important;white-space: pre !important;}</style>").appendTo(document.documentElement)),console.log(e.type),"lines"==e.type){var h=x(r);element.html(h);var m=function(t){for(var e=element.children(".word-measure").length,n=[element.children(".word-measure:eq(0)").text()],o=[],i=1;i<e;i++){var r=element.children(".word-measure:eq("+(i-1)+")").offset().top;element.children(".word-measure:eq("+i+")").offset().top==r?n.push(element.children(".word-measure:eq("+i+")").text()):(o.push({text:n.join(" "),top:r}),n=[element.children(".word-measure:eq("+i+")").text()])}return o.push({text:n.join(" "),top:element.children(".word-measure:last").offset().top}),o}();if(1==e.justSplit)return{id:element.attr("id"),value:m};element.empty(),t.each(m,(function(t,e){var n="<div class='split-lines'>"+e.text+"</div>";element.append(n)}))}else if("words"==e.type){h=x(d);if(1==e.justSplit)return{id:element.attr("id"),value:h};element.empty(),element.html(h)}else if("letters"==e.type){h=function(t){for(var e=t.split(""),i=0;i<e.length;i++)" "==e[i]?e[i]='<div class="letter-measure blank">'+e[i]+"</div>":e[i].match(/\s\n\t\r/g)||""==e[i]||(e[i]='<div class="letter-measure">'+e[i]+"</div>");return e.join(" ")}(d);if(1==e.justSplit)return{id:element.attr("id"),value:h};element.empty(),element.html(h)}else if("sentences"==e.type){h=function(t){for(var e=/[^\.!\?]+[\.!\?]+/g,n=x(t,!0),o=String(t).match(e),r=new Array,i=0;i<o.length;i++)r.push({text:o[i]});console.log(n),r=new Array;for(var l=0;l<n.length;l++){var c=n[l];isSentenceEnd=e.test(c),isSentenceEnd?n[l]="<div class='split-sentences endOfSentence'>"+c+"</div>":n[l]="<div class='split-sentences'>"+c+"</div>",r.push(n[l])}return n.join(" ")}(d);if(1==e.justSplit)return{id:element.attr("id"),value:h};element.empty(),element.html(h)}function x(e,n){var a=e.replace(/\n/g," \n<br/> ").split(" ");return 1==n?(t.each(a,(function(i,t){t.match(/\n/)||""==t||(a[i]=t)})),a):(t.each(a,(function(i,t){t.match(/\n/)||""==t||(a[i]='<div class="word-measure">'+t+"</div>")})),a.join(" "))}return this.animate=function(){if("glowOnHover"==e.animation){c=new TimelineMax({align:"start"});var r=element.children().length;return c=new TimelineMax({align:"start"}),element.children().each((function(o,r){w=t(this),t(this).on("mouseenter",(function(){TweenMax.to(t(this),e.duration,n(e))})),t(this).on("mouseleave",(function(){TweenMax.to(t(this),e.duration,{"text-shadow":"none",color:"#000"})}))})),!0}if("scramble"==e.animation){c=new TimelineMax({align:"start"});r=element.children().length;var d,f=-Math.PI,h=l(50,200),m=360/r;return c=new TimelineMax({align:"start"}),element.children().each((function(e,n){var o=(w=t(this)).position();w.css({left:o.left,top:o.top}),d=w.width()+100*Math.random();var r=Math.round(h+d*Math.cos(f)),x=Math.round(h+d*Math.sin(f)),v=180*Math.atan2(x-l(100,200),r-l(100,200))/Math.PI+90;c.insert(TweenMax.to(w,.8,{position:"absolute",left:r,top:x,rotation:v,ease:Sine.easeOut}));var y=m*(Math.PI/l(10,270));f+=y})),c.play(),!0}if("blackout"==e.animation)element.children().each((function(n,o){w=t(this),t(this).on("mouseenter",(function(){TweenMax.to(t(this),e.duration,{color:"rgba(255, 255, 255, 0.8)","background-clip":"text"})})),t(this).on("mouseleave",(function(){TweenMax.to(t(this),e.duration,{textShadow:"1px 1px 1px rgba(255, 255, 255, 0.5)",color:"#000"})}))}));else if("machinegun"==e.animation){var x=new TimelineMax({delay:.6,repeat:2,repeatDelay:4}),time=0;element.children().each((function(e,n){w=t(this),duration=Math.max(.5,.08*w.length),console.log(duration);var o=w.hasClass("endOfSentence");o&&(duration+=.6),TweenLite.set(w,{autoAlpha:0,scale:0,z:.01}),x.to(w,duration,{scale:1.2,ease:SlowMo.ease.config(.25,.9)},time).to(w,duration,{autoAlpha:1,ease:SlowMo.ease.config(.25,.9,!0)},time),time+=duration-.05,o&&(time+=.6)}))}else if("matrix"==e.animation){c=new TimelineMax({align:"start"});element.parent();return element.children().each((function(e,n){var r=t(this),d=t(this).position();r.css({top:l(-800,0),opacity:0,left:d.left}),c.insert(TweenMax.to(t(this),l(.5,2.5),o(d.top)))})),c.play(),!0}if("letters"==e.type){c=new TimelineMax({align:"start"});r=element.children().length;for(var w,i=0;i<r;i++)w=element.children().eq(i),"explode"==e.animation&&(v=w.position(),w.css({left:v.left,top:v.top})),c.insert(TweenMax.to(w,e.duration,n(e)));c.play()}else if("words"==e.type){c=new TimelineMax;var v;for(r=element.children().length,i=0;i<r;i++)"explode"==e.animation&&(v=element.children().eq(i).offset(),element.children().eq(i).css({left:v.left,top:v.top})),c.insert(TweenMax.to(element.children().eq(i),e.duration,n(e)));c.play()}else"lines"==e.type&&(c=new TimelineMax({align:"normal"}),t(".split-lines").each((function(){if(t(this).css({"white-space":"nowrap"}),"slide"==e.animation){var o=t(this).width();c.insert(TweenMax.to(t(this),e.duration,n(e,o)),"-=0.45")}else{var r=t(this).offset();t(this).css({left:r.left,top:r.top}),c.insert(TweenMax.to(t(this),e.duration,n(e)))}})),c.play())},this.reverse=function(){c.reverse()},this};var n=function(t,n){return"explode"==t.animation?{position:"absolute",left:l(-1e3,1e3),top:l(-500,350),fontSize:"+=35",ease:Circ.easeOut,autoAlpha:0}:"slide"==t.animation?{autoAlpha:0,marginLeft:n,ease:Circ.easeIn}:"opacity"==t.animation?{autoAlpha:0}:"3D"==t.animation?(d={rotationY:l(-270,360),top:80,transformOrigin:"50% 50% -80",rotationX:l(-360,600)},e(d,"rotationY",l(-360,-600)),e(d,"autoAlpha",0),d):"colorize"==t.animation?r():"smoke"==t.animation?{textShadow:"0px 0px 15px #cdcdcd",color:"none"}:"typography3D"==t.animation?{"text-shadow":"0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15)"}:"blackout"==t.animation?{textShadow:"1px 1px 1px rgba(255, 255, 255, 0.5)",color:"#000"}:"glowOnHover"==t.animation?(null!=t.colorize&&null!=t.colorize||(t.colorize="#FF0084"),{textShadow:"2px 2px 15px "+(c=t.colorize),color:c}):"matrix"==t.animation?o():"no animation selected!";var c,d};function o(t){return{position:"absolute",opacity:1,top:t,color:"#ffffff",immediateRender:!1,ease:Circ.easeOut}}function r(){if(null==options.colorize||null==options.colorize)return{color:16777215*Math.random()};options.colorize}function l(t,e){return Math.floor(Math.random()*(1+t-e)+e)}}(t)}).call(this,n(140))}},[[141,6,1,7]]]);