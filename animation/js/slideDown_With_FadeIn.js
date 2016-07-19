$('#run').click(function() {
    $('.box1').css({top: 0, opacity: 0}).
    animate({top: 50, opacity: 1}, 500);

    $('.text').css({top: 150, opacity: 0}).
    animate({top: 200, opacity: 1}, 1000);
});