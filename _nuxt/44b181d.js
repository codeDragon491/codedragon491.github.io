(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(e,t,r){"use strict";(function(e){r(41);var o=r(5),n=r(246),c=r(53);t.a={components:{Arrow:n.a},fetch:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,o=e.params,n=e.error,t.prev=1,t.next=4,r.dispatch("works/fetchWork",o.id);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),n({statusCode:503,message:"Unable to fetch work at this time. Please try again later."});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))()},computed:Object(c.b)({work:function(e){return e.works.work},backgroundImage:function(){return"background-image: url("+this.work.backgroundImage+")"}}),head:function(){return{title:this.work.title,meta:[{hid:"description",name:"description",content:"Where you can read about Julia's work"+this.work.title}]}},mounted:function(){var t=new this.$ScrollMagic.Controller,r=new this.$GSAP.TimelineLite,o=new this.$GSAP.TimelineLite,n=new this.$GSAP.TimelineLite,c=new this.$GSAP.TimelineLite;r.to("main",.5,{backgroundColor:"white",color:"black",ease:"power1"}),o.to("main",.5,{backgroundColor:"white",color:"black",ease:"power1"}),n.to("main",.5,{backgroundColor:"black",color:"white",ease:"power1"}),c.to("#description",1.5,{opacity:1,ease:"power1"},1.5).from("#description",.5,{y:50,ease:"power1"},1.5,"-=1.5").to("#headline",1.5,{opacity:1,ease:"power1"},1).from("#headline",.5,{y:50,ease:"power1"},1,"-=1.5");new this.$ScrollMagic.Scene({duration:0,offset:500}).setTween(r).addTo(t).reverse(!1),new this.$ScrollMagic.Scene({duration:0,offset:500}).setTween(o).addTo(t),new this.$ScrollMagic.Scene({duration:0,triggerElement:"#summary-work-section",triggerHook:1}).setTween(n).addTo(t);e("#title").splitText({type:"letters",animation:"matrix"}).animate();new this.$ScrollMagic.Scene({duration:0,offset:0}).setTween(c).addTo(t)}}}).call(this,r(140))},231:function(e,t,r){var content=r(242);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(65).default)("64f9928d",content,!0,{sourceMap:!1})},232:function(e,t,r){var content=r(244);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(65).default)("f6af81be",content,!0,{sourceMap:!1})},241:function(e,t,r){"use strict";r(231)},242:function(e,t,r){(t=r(64)(!1)).push([e.i,".arrow[data-v-85307e4a]{position:absolute;top:90%;left:50%;transform:translate(-50%,-50%)}.arrow span[data-v-85307e4a]{display:block;width:15px;height:15px;border-bottom:5px solid #fff;border-right:5px solid #fff;transform:rotate(45deg);margin:-10px;-webkit-animation:animate-data-v-85307e4a 2s infinite;animation:animate-data-v-85307e4a 2s infinite}.arrow span[data-v-85307e4a]:nth-child(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}.arrow span[data-v-85307e4a]:nth-child(3){-webkit-animation-delay:-.4s;animation-delay:-.4s}@-webkit-keyframes animate-data-v-85307e4a{0%{opacity:0;transform:rotate(45deg) translate(-20px,-20px)}50%{opacity:1}to{opacity:0;transform:rotate(45deg) translate(20px,20px)}}@keyframes animate-data-v-85307e4a{0%{opacity:0;transform:rotate(45deg) translate(-20px,-20px)}50%{opacity:1}to{opacity:0;transform:rotate(45deg) translate(20px,20px)}}",""]),e.exports=t},243:function(e,t,r){"use strict";r(232)},244:function(e,t,r){(t=r(64)(!1)).push([e.i,'main{position:absolute;left:0;right:0;width:100%;background-color:#000;color:#fff}.work-header{margin-top:150px;height:calc(100vh - 150px);color:#fff}.work-header h3#title{opacity:0;margin:0 0 1.5rem}.work-header h3.isSplit{opacity:1;margin:0 0 3.5rem}.work-header h1{opacity:0;margin:0 0 1rem;text-transform:uppercase;font-size:10vw;line-height:10vw}.work-header p{opacity:0;margin:0;font-size:1.25rem;max-width:56ch;line-height:1.7}.work-cover{position:absolute;background-size:cover;left:0;right:0;top:0;bottom:0;height:100%;width:100%;z-index:-10}.work-cover:after{content:"";position:absolute;top:0;left:0;right:0;width:100%;height:100%;background:linear-gradient(120deg,#313131,#090909);mix-blend-mode:hard-light;opacity:.5;z-index:10}.summary-line{display:flex;align-items:center;justify-content:space-between}.summary-line p{text-align:right}@media only screen and (min-width:1024px){.work-header{margin:150px auto 0}.work-header h1{font-size:60px;line-height:60px}}@media only screen and (min-width:1280px){.work-header{width:70%}}@media only screen and (min-width:1920px){.work-header{height:calc(100vh - 250px);margin:250px auto 0}.work-header p{max-width:65ch}}.work-section{margin:7rem 0;padding:0 65px}.work-section h2,.work-section p{width:50%;margin:0 auto}.work-section p{font-size:1.25rem}#summary-work-section{padding:0 165px}#summary-work-section p{font-size:1.5rem;text-transform:uppercase;width:auto;margin:0}#summary-work-section p a{color:#fff}',""]),e.exports=t},246:function(e,t,r){"use strict";var o={name:"Arrow",mounted:function(){var e=new this.$ScrollMagic.Controller,t=new this.$GSAP.TimelineLite;t.to(".arrow",.5,{opacity:0,ease:"power1"});new this.$ScrollMagic.Scene({duration:0,offset:150}).setTween(t).addTo(e)}},n=(r(241),r(26)),component=Object(n.a)(o,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"arrow"},[t("span"),this._v(" "),t("span"),this._v(" "),t("span")])}],!1,null,"85307e4a",null);t.a=component.exports},250:function(e,t,r){"use strict";r.r(t);var o=r(225).a,n=(r(243),r(26)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"#"},[r("header",{staticClass:"work-header"},[r("h3",{attrs:{id:"title"}},[e._v(e._s(e.work.title))]),e._v(" "),r("h1",{attrs:{id:"headline"}},[e._v(e._s(e.work.headline))]),e._v(" "),r("p",{attrs:{id:"description"}},[e._v(e._s(e.work.description))]),e._v(" "),r("Arrow"),e._v(" "),r("div",{staticClass:"work-cover",style:e.backgroundImage})],1),e._v(" "),r("main",[r("section",{staticClass:"work-section"},[r("h2",[e._v("Assignmnent")]),e._v(" "),r("p",[e._v(e._s(e.work.assignment))])]),e._v(" "),r("section",{staticClass:"work-section"},[r("h2",[e._v("Assignmnent")]),e._v(" "),r("p",[e._v(e._s(e.work.assignment))])]),e._v(" "),r("section",{staticClass:"work-section"},[r("h2",[e._v("Assignmnent")]),e._v(" "),r("p",[e._v(e._s(e.work.assignment))])]),e._v(" "),r("section",{staticClass:"work-section"},[r("h2",[e._v("Assignmnent")]),e._v(" "),r("p",[e._v(e._s(e.work.assignment))])]),e._v(" "),r("section",{staticClass:"work-section",attrs:{id:"last-work-section"}},[r("h2",[e._v("Solution")]),e._v(" "),r("p",[e._v(e._s(e.work.result))])]),e._v(" "),r("section",{staticClass:"work-section",attrs:{id:"summary-work-section"}},[r("div",{staticClass:"summary-line"},[r("h3",[e._v("SOLUTION")]),e._v(" "),r("p",[e._v(e._s(e.work.solution))])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"summary-line"},[r("h3",[e._v("SKILLS")]),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.work.skills)}})]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"summary-line"},[r("h3",[e._v("TECH")]),e._v(" "),r("p",[e._v(e._s(e.work.tech))])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"summary-line"},[r("h3",[e._v("YEAR")]),e._v(" "),r("p",[e._v(e._s(e.work.year))])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"summary-line"},[r("h3",[e._v("LINK")]),e._v(" "),r("p",[r("a",{attrs:{href:e.work.href}},[e._v("see the solution here")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);