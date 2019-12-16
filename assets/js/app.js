$(function() {
    $('.scroll').on('click', function() {
        // 画面の先頭に戻る
        // animate({実行すること}, 何秒使うか)
        $('html, body').animate({ scrollTop: 0 }, 3000);
    })

    $('.pro').on('click', function() {
        // 画面の先頭に戻る
        // animate({実行すること}, 何秒使うか)
        $('html, body').animate({ scrollTop: 900 }, 3000);
    })

    $('.car').on('click', function() {
        // 画面の先頭に戻る
        // animate({実行すること}, 何秒使うか)
        $('html, body').animate({ scrollTop: 1200 }, 3000);
    })

    $('.ski').on('click', function() {
        // 画面の先頭に戻る
        // animate({実行すること}, 何秒使うか)
        $('html, body').animate({ scrollTop: 1600 }, 3000);
    })

    $('.hob').on('click', function() {
        // 画面の先頭に戻る
        // animate({実行すること}, 何秒使うか)
        $('html, body').animate({ scrollTop: 2000 }, 3000);
    })

    const anime = $('.anime').offset({
        top: 217,
        left: 870
    });

    $(window).scroll(function (){
        $("#sample").each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
            });
        });

        $(window).scroll(function (){
            $("#sample2").each(function(){
                var imgPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > imgPos - windowHeight + windowHeight/5){
                    $(this).addClass("fade_on");
                } else {
                    $(this).removeClass("fade_on");
                }
                });
        });

        $(window).scroll(function (){
            $("#sample3").each(function(){
                var imgPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > imgPos - windowHeight + windowHeight/5){
                    $(this).addClass("fade_on");
                } else {
                    $(this).removeClass("fade_on");
                }
                });
        });

        $(window).scroll(function (){
            $("#sample4").each(function(){
                var imgPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > imgPos - windowHeight + windowHeight/5){
                    $(this).addClass("fade_on");
                } else {
                    $(this).removeClass("fade_on");
                }
                });
        });

        // const res = $('#resani').offset({
        //     top: 217,
        //     left: 870
        // });
});