(function($, window, document) {

    $(function() {
        var playButton = $('.play-button');
        var videoIframeHtml = '<iframe src="http://player.vimeo.com/video/63318482?title=0&byline=0&portrait=0&autoplay=1" width="700" height="467"></iframe>';

        playButton.on({

            'click': function() {
                $('.video-player').append(videoIframeHtml);
                $('.video-player').addClass('playing');
            }

        });
    });

})(window.jQuery, window, document);