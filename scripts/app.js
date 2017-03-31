(function($, window, document) {

    $(function() {
        var playButton = $('.play-button');
        var videoIframeHtml = '<iframe width="854" height="480" src="https://www.youtube.com/embed/BzeFY4PGUNc?autoplay=1" frameborder="0" allowfullscreen></iframe>';

        playButton.on({

            'click': function() {
                $('.video-player').append(videoIframeHtml);
                $('.video-player').addClass('playing');
            }

        });
    });

})(window.jQuery, window, document);
