// JavaScript source code
(function($){
    $.fn.hoverDelay = function(options){
        var defaults = {
            hoverDuring: 300,
            outDuring: 1,
            hoverEvent: function(){
                $.noop();
            },
            outEvent: function(){
                $.noop();
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer;
        return $(this).each(function(){
            $(this).hover(function(){
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            },function(){
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
        });
    }
})(jQuery);

(function ($) {
    function MouseInStatus(obj){
        var item_text=obj.find('span');
        item_text.fadeIn();
        item_text.animate({ left: '55px' }, "fast");
        obj.find('i').removeClass('small-circle');
        obj.find('i').addClass('big-circle');
    }
    function MouseOutStatus(obj){
        var item_text=obj.find('span');
        item_text.animate({ left: '0' }, 100, function () {
            $(this).hide();
        });
        obj.find('i').removeClass('big-circle');
        obj.find('i').addClass('small-circle');
    }
    $(function() {
        $('.nav-item').each(function(i){
            var that = $(this)
            that.hoverDelay({
                hoverDuring: 200,
                outDuring: 10,
                hoverEvent:function(){MouseInStatus(that)},
                outEvent: function(){MouseOutStatus(that)}
            });
            that.click(function(){
                $('html,body').animate({scrollTop: $('.page-block').eq(i).offset().top-i* 130}, 200);
            });
            $('.page-block').eq(i).mouseenter(function(){
                MouseInStatus(that);
            }).mouseleave(function(){
                MouseOutStatus(that);
            });
        });
        $('.back-top').click(function(){
            $('html,body').animate({scrollTop: 0}, 200);
        });
    });
})(jQuery);

