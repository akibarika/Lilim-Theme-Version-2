function grin(e){var o;if(e=" "+e+" ",!document.getElementById("comment")||"textarea"!=document.getElementById("comment").type)return!1;if(o=document.getElementById("comment"),document.selection){o.focus();var t=document.selection.createRange();t.text=e,o.focus()}else if(o.selectionStart||"0"==o.selectionStart){var a=o.selectionStart,n=o.selectionEnd,i=n;o.value=o.value.substring(0,a)+e+o.value.substring(n,o.value.length),i+=e.length,o.focus(),o.selectionStart=i,o.selectionEnd=i}else o.value+=e,o.focus()}var RikaSite=RikaSite||{};if(jQuery(document).ready(function(e){"use strict";RikaSite=function(){},RikaSite.prototype={init:function(){var o=this,t=e("#post .column--invisible .list--post");o.hoverSearchText(),o.initial(t),o.placeToolbar(960,60,20),o.ajaxPostLoading(),o.responsiveColumn(t),o.navDropDownClick(),o.navFilterClick(),o.menuScroll(),o.upperDownClick(),o.toolBarPlace(),o.dispalyMoblieMenu(),o.tagPost(),o.ScrollMenuMobile(),o.searchClick(),o.layoutSwitchClick()},hoverSearchText:function(){e(".search-text .text").focus(function(){"找东西？"==e(this).val()&&e(this).val("")}).blur(function(){""==e(this).val()&&e(this).val("找东西？")})},initial:function(o){this.adjustColumnHeights(o.clone()),e(".column--post").addClass("stop--sliding")},responsiveColumn:function(t){e(window).resize({viewModel:o},function(e){var o=e.data.viewModel;o.adjustColumnHeights(t.clone())})},layoutSwitchClick:function(){e("i.icon-layout").on("click",function(){var o=e(this),t=o.hasClass("icon-th"),a=o.hasClass("icon-th-list");t&&!o.hasClass("active")?(e("#post").removeClass("list--view").addClass("grid--view"),void RikaSite.prototype.setCookie("layout",1),o.siblings(".icon-th-list").removeClass("active"),o.addClass("active"),e(".column--post.column--invisible").removeClass("column--invisible"),RikaSite.prototype.adjustColumnHeights(e("#post .column--invisible .list--post").clone()),e(".column--invisible").removeClass("column--show")):a&&!o.hasClass("active")&&(e("#post").removeClass("grid--view").addClass("list--view"),void RikaSite.prototype.setCookie("layout",2),o.siblings(".icon-th").removeClass("active"),o.addClass("active"),e(".column--invisible").addClass("column--show"),e(".column--post ").addClass("column--invisible"))})},adjustColumnHeights:function(o){e(".column--one").empty(),e(".column--two").empty(),e(".column--three").empty();var t=[],a=function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)},n=1420,i=768;t.push(e(".column--one")),a()>=i&&t.push(e(".column--two")),a()>=n&&t.push(e(".column--three"));for(var s=0;s<o.length;s++)this.getTargetColumn(t).append(o.eq(s).addClass("post--item").removeClass("list--post"))},getTargetColumn:function(e){for(var o=Number.MAX_VALUE,t=0;t<e.length;t++)if(e[t].outerHeight()<o){var a=e[t];o=e[t].outerHeight()}return a},tagPost:function(){e(document).on("mouseenter",".tag ul > li:first-child",function(o){o.stopPropagation(),e(this).parents("ul").addClass("show")}),e(document).on("click",".tag ul > li",function(e){e.stopPropagation()}),e(document).on("mouseleave",".tag ul",function(o){o.stopPropagation(),e(this).removeClass("show")})},placeToolbar:function(o,t,a){var n=parseInt((e(window).width()-o+1)/2-t-a);20>n&&(n=20),e(".right-toolbar").css({right:n,opacity:1})},ajaxPostLoading:function(){var t=window.location.href;e(document).on("click",".navigation a",{viewModel:o},function(o){o.preventDefault();var a=o.data.viewModel,n=e(this).attr("href");a.turnpage(n),history.pushState(null,document.title,n),t=window.location.href}),window.addEventListener("popstate",{viewModel:o},function(e){var o=window.location.href,a=e.data.viewModel;t!=o&&(a.turnpage(o),t=o)})},turnpage:function(o){e(".pageload-overlay").addClass("show"),e("html,body").animate({scrollTop:0},300),e(".column--post").addClass("fading"),e(".column--invisible").addClass("fading"),e.ajax({url:o}).always(function(o){var t=e.parseHTML(o);e("#post").html(e("#post",t).html()),e(".navigation").html(e(".navigation",t).html()),e(".wp-post-image").load(function(){RikaSite.prototype.initial(e("#post .column--invisible .list--post")),RikaSite.prototype.responsiveColumn(e("#post .column--invisible .list--post"))})})},navDropDownClick:function(){e(document).on("click",".open-nav",function(o){o.stopPropagation(),e("#nav-filters").toggleClass("open"),e(".box-overlay").addClass("open")}),e(document).on("click",".close-nav",function(){e(".nav-sidebar").removeClass("open"),e(".box-overlay").removeClass("open")})},navFilterClick:function(){e(document).on("click",".wrapper-dropdown",function(){e(this).toggleClass("active"),e.stopPropagation()}),e(document).on("click",".nav-sidebar",function(e){e.stopPropagation()}),e(document).on("click",function(){e(".nav-sidebar").removeClass("open"),e(".box-overlay").removeClass("open")})},searchClick:function(){e(document).on("click",".bt-search",function(){e(".search-text").hasClass("visible")?e(".search-text").removeClass("visible"):e(".search-text").addClass("visible"),setTimeout(function(){e(".search-text .text").trigger("focus")},200),setTimeout(function(){e(".search-text").removeClass("visible")},1e4)})},menuScroll:function(){e(window).scroll(function(o){o.stopPropagation();var t=e(window).scrollTop();t>48?(e("nav.search").removeClass("open"),e("body").addClass("header-fixed"),e(".main").addClass("white-bg")):(e("nav.search").hasClass("visible")&&e("nav.search").addClass("open"),e("body").removeClass("header-fixed"),e(".main").removeClass("white-bg"))})},dispalyMoblieMenu:function(){e(document).on("click","#menu-mobile .bt-menu",{viewModel:o},function(){e("#menu-mobile").hasClass("open")?e("#menu-mobile").removeClass("open"):e("#menu-mobile").addClass("open")})},toolBarPlace:function(){var o=!1;e(window).scroll(function(t){t.stopPropagation(),o=e(window).scrollTop()>=e(document).height()-e(window).height(),o?(e(".tool-goto").removeClass("tool-down icon-angle-down"),e(".tool-goto").addClass("tool-up icon-angle-up")):(e(".tool-goto").removeClass("tool-up icon-angle-up"),e(".tool-goto").addClass("tool-down icon-angle-down"))})},upperDownClick:function(){e(document).on("click",".right-toolbar .tool-up",function(){e("html, body").animate({scrollTop:0},500)}),e(document).on("click",".right-toolbar .tool-down",function(){e("html, body").animate({scrollTop:e("#page-wrap").height()},500)}),e(document).on("click",".right-toolbar .icon-bubbles",function(){e("html, body").animate({scrollTop:e("#respond").position().top},500)}),e(document).on("click",".right-toolbar .icon-share",function(){e("html, body").animate({scrollTop:e(".share").position().top},500)})},ScrollMenuMobile:function(){setTimeout(function(){e(".wrapper-nav").css("height",e(window).height()+"px")},500),e(window).resize(function(){setTimeout(function(){e(".wrapper-nav").css("height",e(window).height()+"px")},500)})},setCookie:function(e,o){var t=new Date;t.setTime(t.getTime()+31536e6),document.cookie=e+"="+o+";path=/;expires="+t.toUTCString()}};var o=new RikaSite;o.init()}),0<jQuery(".pivot-audio").length){var q="Microsoft Internet Explorer"==window.navigator.appName||"Netscape"==window.navigator.appName&&/trident\/\d\.\d/i.test(window.navigator.userAgent)?"flash, html":"html, flash",r=fx_ajax_url.swfurl;jQuery.getScript(fx_ajax_url.jplayerurl).done(function(){jQuery(".pivot-audio").each(function(){var e=jQuery(this),o=e.find(".xiami-cover"),t=e.attr("songid"),a=e.data("type");jQuery.ajax({type:"get",dataType:"json",jsonp:"callback",url:fx_ajax_url.ajax_url,data:{action:"fxjson",id:t,type:a},async:!1,beforeSend:function(){},success:function(t){if(200==t.msg){t=t.song,o.attr("style","background-image:url("+t.song_cover+")"),e.find(".audio-name").html(t.song_title),e.find(".audio-author").html(t.song_author);var a=e.children(".audio-jplayer");a.jPlayer({ready:function(){a.jPlayer("setMedia",{mp3:t.song_src}),e.hasClass("auto")&&a.jPlayer("play")},timeupdate:function(o){var t;if(t=o.jPlayer.status.currentTime,!isFinite(t)||0>t)t="--:--";else{var a=Math.floor(t/60);t=Math.floor(t)%60,t=(10>a?"0"+a:a)+":"+(10>t?"0"+t:t)}e.find(".play-timer").text(t),e.find(".play-prosess-bar").width(o.jPlayer.status.currentPercentAbsolute+"%")},play:function(){e.find(".play-button").addClass("playing")},pause:function(){e.find(".play-button").removeClass("playing")},ended:function(){e.find(".play-button").removeClass("playing")},swfPath:r,solution:q,volume:1,supplied:"mp3",wmode:"window",preload:"none"})}}})}),jQuery(".pivot-audio .play-button").click(function(){var e=jQuery(this).parent().parent().children(".audio-jplayer"),o=e.attr("id");jQuery(".pivot-audio").each(function(){var e=jQuery(this).children(".audio-jplayer");e.attr("id")!=o&&e.jPlayer("pause")}),e.data().jPlayer.status.paused?e.jPlayer("play"):e.jPlayer("pause")}),jQuery(".pivot-audio .play-prosess").click(function(e){var o=jQuery(this),t=o.parent().children(".audio-jplayer"),a=o.width(),o=o.offset().left;t.jPlayer("playHead",100*((e.pageX-o)/a))})}).fail(function(){window.console&&console.log("播放器初始化失败")})}jQuery(document).ready(function(){function e(){jQuery.ajax({url:"http://www.xiami.com/search/json?t=1&k="+o.val()+"&n=10&callback=jsonp978",type:"GET",dataType:"jsonp",success:function(e){e||console.log("sb");for(var o="",t=0;t<e.length;t++){var n=e[t];o+='<li class="add-xiamil" data-id="'+n.song_id+'"><div class="img"><img width="30" height="30" alt="爱你" src="http://img.xiami.net/'+n.album_logo+'"></div><div class="name"><p>'+n.song_name+"</p><p>"+n.artist_name+'</p></div><a class="play-btn"></a></li>'}o='<div class="search-title">歌曲</div><ul class="pads">'+o+"</ul>",a.empty(),a.html(o).show()}})}var o,t,o=jQuery(".js-search-input"),a=jQuery(".js-search-results"),n={bind_event:function(){o.bind("keyup",function(){""!=o.val()?(t&&clearTimeout(t),t=setTimeout(e,500)):""==o.val()&&a.empty().hide()})},unbind_event:function(){o.unbind("keyup")}};jQuery(document).click(function(e){!a.is(":visible")&&!a.is(":visible")||e.target||a.hide()}),o.focus(function(){n.bind_event()}).blur(function(){n.unbind_event()})}),$(document).ready(function(){function e(){TweenMax.to(n,.1,{scaleX:1.2,scaleY:.6,ease:Quad.easeOut,onComplete:function(){TweenMax.to(n,.8,{scale:.6,ease:Elastic.easeOut,easeParams:[1.1,.6]}),TweenMax.to(n.children(".share-icon"),.8,{scale:1.4,ease:Elastic.easeOut,easeParams:[1.1,.6]})}}),a.each(function(e){var o=$(this),t=e-l;t>=0&&(t+=1);var a=Math.abs(t);o.css({zIndex:l-a}),TweenMax.to(o,1.1*a,{x:t*c,scaleY:.6,scaleX:1.1,ease:Elastic.easeOut,easeParams:[1.01,.5]}),TweenMax.to(o,.8,{delay:.2*a-.1,scale:.6,ease:Elastic.easeOut,easeParams:[1.1,.6]}),TweenMax.fromTo(o.children(".share-icon"),.2,{scale:0},{delay:.2*a-.1,scale:1,ease:Quad.easeInOut})})}function o(){TweenMax.to(n,1.4,{delay:.1,scale:1,ease:Elastic.easeOut,easeParams:[1.1,.3]}),a.each(function(e){var o=$(this),t=e-l;t>=0&&(t+=1);var a=Math.abs(t);o.css({zIndex:a}),TweenMax.to(o,.4+.1*(l-a),{x:0,scale:.95,ease:Quad.easeInOut}),TweenMax.to(o.children(".share-icon"),.2,{scale:0,ease:Quad.easeIn})})}function t(){i=!i,i?e():o()}var a=$(".share-button"),n=$(".share-toggle-button"),i=!1,s=a.length,l=s/2,c=75;n.on("mousedown",function(){t()})});
//# sourceMappingURL=app.js.map