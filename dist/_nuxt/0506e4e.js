(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{234:function(t,e,n){"use strict";(function(t){e.a={head:function(){return{title:"Home"}},data:function(){return{textShown:!1}},props:{navbarHasMounted:Boolean},mounted:function(){!0===this.navbarHasMounted?t("#title").splitText({type:"letters",animation:"matrix"}).animate():t("#title").splitText({type:"letters",animation:"matrix"}).animate();var e=new this.$ScrollMagic.Controller,n=new this.$GSAP.TimelineLite;n.from(".julia-voronoi-stippling",1.5,{opacity:0,y:50,ease:"power1"},"-=1.5");new this.$ScrollMagic.Scene({duration:0,offset:0}).setTween(n).addTo(e)},methods:{toggleText:function(){this.textShown=!this.textShown}}}}).call(this,n(149))},242:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("2e107364",content,!0,{sourceMap:!1})},260:function(t,e,n){t.exports=n.p+"img/julia-voronoi-stippling.14a79e4.png"},261:function(t,e,n){"use strict";n(242)},262:function(t,e,n){var o=n(65)(!1);o.push([t.i,"h1#title{color:#000;opacity:0}h1.isSplit{display:none;opacity:1}h1.isSplit .letter-measure{color:#000!important}.home-intro p{font-size:1.25em}@media screen and (min-width:768px){.home-intro{margin-top:100px}h1.isSplit{display:flex}.home-intro p{font-size:1.5em}}",""]),t.exports=o},269:function(t,e,n){"use strict";n.r(e);var o=n(234).a,r=(n(261),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("h1",{attrs:{id:"title"}},[t._v("Hello! This is Simple Studio.")]),t._v(" "),o("transition",{attrs:{name:"fade",mode:"out-in"}},[t.textShown?o("div",{key:"2",staticClass:"home-intro",on:{mouseleave:t.toggleText}},[o("p",[t._v("\n        I am a versatile frontend developer with a design sense who enjoys working with many different aspects of frontend development,\n        such as the UI and App layer, performance optimization, responsive design, cross-browser compatibility, animations, and overall\n        is passionate about problem-solving while bringing designs to life or turning business requirements into excellent technical solutions. \n        "),o("br"),o("br"),t._v("\n        I have worked with most of the popular Javascript frameworks but my favorite is Vue.\n        "),o("br"),o("br"),t._v("\n        I strive for quality and maintainability in the work I do, and I am the kind of developer that cares greatly about delivering a result that respects the intentions of a design team.\n        "),o("br"),o("br"),t._v("\n        Eventually, I am very enthusiastic about frontend development and always looking to progress.\n      ")])]):o("div",{key:"1",staticClass:"home-intro",on:{mouseover:t.toggleText}},[o("img",{staticClass:"julia-voronoi-stippling",attrs:{alt:"julia-voronoi-stippling",src:n(260)}})])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);