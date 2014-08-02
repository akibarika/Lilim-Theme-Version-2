$(document).ready(function(){
	jQuery(function() {
		$('.search-text .text').focus(function() {
			if ($(this).val() == '找东西？') {
				$(this).val('')
			}
		}).blur(function() {
			if ($(this).val() == '') {
				$(this).val('找东西？')
			}
		})
	});
	$('.bt-search').click(function(event) {
        event.stopPropagation();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('nav.search').removeClass('open');
            $('nav.search .dropdown').removeClass('active');
		    $('nav.search, .filters').removeClass('open');
		    $('.filters, .filters .filter').hide();
        } else {
            $(this).addClass('active');
            $('nav.search').addClass('open');
            $('nav .search-text input[type="text"]').focus();
        }
    });	
	$('.item').stop().fadeTo(100,1,function(){
		$('.item').addClass('stop');
	});
	var $post = $('#post'); 
	$post.imagesLoaded( function() {
	  $post.masonry({
		  	  itemSelector: '.item',
		  	  columnWidth: '.item',
		  	  transitionDuration: 0,
		  	  "gutter":20
			});
	});
    // go down and up change
    var arrivedAtBottom = false;
    $(window).scroll(function(event){
		event.stopPropagation();
	    arrivedAtBottom = $(window).scrollTop() >= $(document).height() - $(window).height();
	    if(arrivedAtBottom){
		    $('.tool-goto').removeClass("tool-down fa-angle-down");
		    $('.tool-goto').addClass("tool-up fa-angle-up");
	    }else{
		    $('.tool-goto').removeClass("tool-up fa-angle-up");
		    $('.tool-goto').addClass("tool-down fa-angle-down");	    
	    }
    });	
    $('.right-toolbar').on("click",".tool-up",function(){
	    $('html, body').animate({scrollTop: 0}, 500);
    });
    $('.right-toolbar').on("click",".tool-down",function(){
	    $('html, body').animate({scrollTop: $('#page-wrap').height()},500);
    });    
    $('.fa-comment-o').click(function () {
        $('html, body').animate({scrollTop:$('#respond').position().top}, 500);
    }); 	 	    	 	      
    $('.fa-share-alt').click(function () {
        $('html, body').animate({scrollTop:$('.WPSNS_main').position().top}, 500);
    });
    $('nav.search .dropdown').click(function() {
        var type = $(this).data('filter');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.filters').removeClass('open');
            $('.filters').slideToggle('slow');
            setTimeout(function() {
                $('.filters .filter').hide();
            }, 500);
        } else {
            $('nav.search .dropdown').removeClass('active');
            $(this).addClass('active');
            if ($('.filters').hasClass('open')) {
                $('.filters .filter').hide();
                $('.filters .filter.' + type).fadeIn();
            } else {
                $('.filters').addClass('open');
                $('.filters .filter.' + type).fadeIn();
                $('.filters').slideToggle('slow');
            }
        }
    });
	 $(window).scroll(function(event) {
        event.stopPropagation();
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 48) {
        	$('nav.search').removeClass('open');
            $('.bt-search').removeClass('active');
            $('body').addClass('header-fixed');
            $('.main').addClass('white-bg');
            $('nav.search .dropdown').removeClass('active');
		    $('nav.search, .filters').removeClass('open');
		    $('.filters, .filters .filter').hide();
        } else {
            if ($('nav.search').hasClass('visible')) {
                $('nav.search').addClass('open');
                $('.bt-search').addClass('active');
            }        
            $('body').removeClass('header-fixed');
            $('.main').removeClass('white-bg');
        }

    });
	$("#menu-mobile .bt-menu").click(function(event) {
        event.stopPropagation();
        if ($("#menu-mobile").hasClass('open')) {
            $("#menu-mobile").removeClass('open');
        } else {
            $("#menu-mobile").addClass('open');
        }
	});
    $('.tag ul > li:first-child').mouseenter(function(event) {
        event.stopPropagation();
        $(this).parents('ul').addClass('show');
    });
    $('.tag ul > li').click(function(event) {
        event.stopPropagation();
    });
    $('.tag ul').mouseleave(function(event) {
        event.stopPropagation();
        $(this).removeClass('show');
    });
	var wrap = 960;
	var a = 60;
	var b = 20;
	var loli = parseInt((jQuery(window).width() - wrap +1) / 2 - a - b);
	if (loli<20){
		loli = 20;
	}
	$(".right-toolbar").css({
		right:loli,
		opacity:1
	});	
	$('.wrapper-menu').css('height', $(window).height() + 'px');
	var count = $("ul#1st-menu li").size();
	var hentai = 100 / count;
	$("ul#1st-menu li").css('width', hentai +'%');

})
function grin(tag) {
	var myField;
	tag = ' ' + tag + ' ';
	if (document.getElementById('comment') && document.getElementById('comment').type == 'textarea') {
		myField = document.getElementById('comment')
	} else {
		return false
	}
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = tag;
		myField.focus()
	} else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var cursorPos = endPos;
		myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length);
		cursorPos += tag.length;
		myField.focus();
		myField.selectionStart = cursorPos;
		myField.selectionEnd = cursorPos
	} else {
		myField.value += tag;
		myField.focus()
	}
}
