!function e(t,r,o){function i(n,l){if(!r[n]){if(!t[n]){var a="function"==typeof require&&require;if(!l&&a)return a(n,!0);if(s)return s(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var f=r[n]={exports:{}};t[n][0].call(f.exports,function(e){var r=t[n][1][e];return i(r?r:e)},f,f.exports,e,t,r,o)}return r[n].exports}for(var s="function"==typeof require&&require,n=0;n<o.length;n++)i(o[n]);return i}({1:[function(e,t,r){"use strict";var o=$("#pageHeader nav li"),i=o.find("a"),s=2,n=function(e){var t=e.parent();t.prev().addClass("prev").siblings().removeClass("prev"),t.addClass("selected").siblings().removeClass("selected"),f(e.attr("class"))};i.click(function(e){e.preventDefault();var t=$(this.hash).offset().top,r=$("html").scrollTop(),o=Math.round(Math.abs(t-r)),i=Math.ceil(o/1e3),n=o/s/i;return $("html, body").animate({scrollTop:t},n),!1});for(var l=document.getElementsByClassName("waypoint"),a=0;a<l.length;a++)new Waypoint({element:l[a],handler:function(e){n("up"==e?i.filter("."+this.element.id).parent().prev().children():i.filter("."+this.element.id))},offset:"25%"});var d=0,f=function(e){clearTimeout(d),d=setTimeout(function(){ga("set","page","/"+e+".html"),ga("send","pageview")},1e3)};$("#work article header").click(function(e){e.preventDefault();var t=$(this).parent(),r=t.hasClass("selected");if(r)t.removeClass("selected");else{t.addClass("selected");var o=t.find("> .details"),i=Math.round(o.offset().top),s=$(window).height();o.removeClass("flash"),i+.25*s>$("html").scrollTop()+s&&($("html").animate({scrollTop:i-.5*s}),o.addClass("flash"))}return setTimeout(function(){Waypoint.refreshAll()},1e3),!1});var u,c=jQuery;c(document).ready(function(){void 0==c("#rev_slider_4_1").revolution?revslider_showDoubleJqueryError("#rev_slider_4_1"):u=c("#rev_slider_4_1").show().revolution({sliderType:"standard",jsFileLocation:"/js/vendor/revolution/js/",sliderLayout:"auto",dottedOverlay:"none",delay:1500,navigation:{onHoverStop:"off"},visibilityLevels:[1240,1024,778,480],gridwidth:600,gridheight:281,lazyType:"smart",shadow:0,spinner:"off",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"on",disableProgressBar:"on",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:!1,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:!1}})})},{}]},{},[1]);