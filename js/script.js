$(function () {
    playerInit();
    popupInit();
});

/* YouTube functions BEGIN */
var player;

playerInit = function() {
    $('#mediaWrapper .button.video').click(function (event) {
        event.preventDefault();
        $(this).hide();

        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
};

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'bt-Xy0F0Fds',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

/* END */

/* Popup BEGIN */
popupInit = function() {
    $(".register").click(function(e) {
        e.preventDefault();
        $('body').addClass('popupOpened');
        $(".popup").focus();
    });

    $('.close').click(function () {
        $('body').removeClass('popupOpened');
    });

    /*$(".popup").on('blur', function() {
        $('body').removeClass('popupOpened');
    });*/
};
/* END */