$( document ).ready(function() {

    var position = 0;

    $("nav").mousemove(function (event) {
        var index = $("#index");
        var frame = $(this);

        var frameWidth = frame.width();
        var indexWidth = index.outerWidth();

        var minLeftCursor = indexWidth / 2 + 6;
        var maxLeftCursor = frameWidth - minLeftCursor;

        var leftCursor = event.pageX - $(this).offset().left;

        if(leftCursor > minLeftCursor && leftCursor < maxLeftCursor ){
            position = (leftCursor - minLeftCursor) / (maxLeftCursor - minLeftCursor);

            updateLine();

            $("#index span").show();
        }
    });

    $("#index").click(function () {
        var offsetLeft = $("header>div").height();
        var maxScroll = $("#frame .background").width() + offsetLeft - $(window).width();
        $("body, html").animate({
            scrollLeft: position * maxScroll
        },300);
        $("#index span").hide();
    });

    $(window).scroll(function () {
        var offsetLeft = $("header>div").height();
        var maxScroll = $("#frame .background").width() + offsetLeft - $(window).width();
        var windowScrollLeft = $(window).scrollLeft();
        position = windowScrollLeft / maxScroll;
        updateLine();
    });

    function updateLine() {
        var index = $("#index");
        var frame = $("nav");

        var frameWidth = frame.width();
        var indexWidth = index.outerWidth();

        var maxLeftFrame = frameWidth - indexWidth;
        var frameLeft = maxLeftFrame * position;
        index.css("left", frameLeft);

        var lineWidth = frame.children("img").width();
        var maxLeftOffset = -1 * lineWidth + frameWidth;
        var lineOffset = position * maxLeftOffset;
        frame.children("img").css("left", lineOffset);
    }
});

