var scroll_top = $(window).scrollTop();
    
    function shownElement( name, new_class, percent, scrTop, remove_prev, remove_class){
        $('.'+name).each(function(){
            if( ($(this).offset().top + $(this).height()*percent)  < (scroll_top + $(window).height()) && !$(this).hasClass(new_class)  ){     
                $(this).addClass(new_class);
                $(this).removeClass(remove_class);
                if(remove_prev){ $(this).removeClass(name); };
            }
        });
    }
    shownElement( 'animatable', 'animated', 0.8, scroll_top, true);
    $(window).bind('scroll', function (e) {
        scroll_top = $(window).scrollTop();
        shownElement( 'animatable', 'animated', 0.8, scroll_top, true);
    });