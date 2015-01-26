//jQuery
jQuery(function ($) {
    //jQueryUIのエフェクト確認
    $('project_name').click(function(){
        $(this).effect('bounce', 'slow');
    });
    //ナビマウスオーバー時の効果設定
    $('.nav_text').mouseover(function(){
        $(this).siblings().css('display', 'inline-block');
    }).mouseout(function(){
        $(this).siblings().css('display', 'none');
    });
    //スマホ版のタッチ操作時の効果設定
    var linkTouchStart = function(){
        thisAnchor = $(this);
        touchPos = thisAnchor.offset().top;
        moveCheck = function(){
            nowPos = thisAnchor.offset().top;
            if(touchPos == nowPos){
                thisAnchor.addClass("hover");
            }
        }
        setTimeout(moveCheck,100);
    }
    var linkTouchEnd = function(){
        thisAnchor = $(this);
        hoverRemove = function(){
            thisAnchor.removeClass("hover");
        }
        setTimeout(hoverRemove,500);
    }

    $(document).on('touchstart mousedown','a',linkTouchStart);
    $(document).on('touchend mouseup','a',linkTouchEnd);
});
