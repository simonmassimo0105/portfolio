$(function() {
    $('.scroll').on('click', function() {
        // 画面の先頭に戻る
        // animate({実行すること}, 何秒使うか)
        $('html, body').animate({ scrollTop: 0 }, 3000);
    })

    $('.pro').on('click', function() {
        $('html, body').animate({ scrollTop: 900 }, 3000);
    })

    $('.car').on('click', function() {
        $('html, body').animate({ scrollTop: 1200 }, 3000);
    })

    $('.ski').on('click', function() {
        $('html, body').animate({ scrollTop: 1600 }, 3000);
    })

    $('.hob').on('click', function() {
        $('html, body').animate({ scrollTop: 2000 }, 3000);
    })

    const anime = $('.anime').offset({
        top: 217,
        left: 886
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

        function toggleNav() {
            var body = document.body;
            var hamburger = document.getElementById('js-hamburger');
            var blackBg = document.getElementById('js-black-bg');
        
            hamburger.addEventListener('click', function() {
                body.classList.toggle('nav-open');
            });
            blackBg.addEventListener('click', function() {
                body.classList.remove('nav-open');
            });
        }
        toggleNav();
});

$(document).ready(function() {
    $(".animsition").animsition({
        inClass: 'rotate-in',
        outClass: 'rotate-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });
});