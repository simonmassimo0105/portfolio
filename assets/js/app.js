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
});