$(document).ready(function(){
    $('#cell1').mouseenter(function(){
        $(this).attr('transform', 'scale(1 1) translate(200, 10)');
        $('#cell1_img').css('opacity', '1');
        $('#nori_txt').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('user interaction with technology');
        };
        txt();

    });
    $('#cell2').mouseenter(function(){
        $(this).attr('transform', 'scale(1 1) translate(0, -70)');
        $('#cell2_img').css('opacity', '1');
        $('.cell #data_txt').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('UX design with machine learning');
        };
        txt();
    });
    $('#cell3').mouseenter(function(){
        $(this).attr('transform', 'scale(1 1) translate(-200, 10)');
        $('#cell3_img').css('opacity', '1');
        $('.cell #soccer_txt').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('interactive data visualization');
        };
        txt();
    });
    $('#cell4').mouseenter(function(){
        $(this).attr('transform', 'scale(1 1) translate(100, 60)');
        $('#cell4_img').css('opacity', '1');
        $('.cell #school_txt').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('data visualization with social value');
        };
        txt();
    });
    $('#cell5').mouseenter(function(){
        $(this).attr('transform', 'scale(1 1) translate(-100, 60)');
        $('#cell5_img').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('international experience');
        };
        txt();
    });
    $('#cell6').mouseenter(function(){
        $(this).attr('transform', 'scale(1 1) translate(200, 60)');
        $('#cell6_img').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('experience with various forms');
        };
        txt();
    });
    $('#cell7').mouseenter(function(){
        $(this).attr('transform', 'scale(1 1) translate(0, 140)');
        $('#cell7_img').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('graphic design with patterns');
        };
        txt();
    });
    $('#cell8').mouseenter(function(){
        $(this).attr('transform', 'scale(1 1) translate(-200, 60)');
        $('#cell8_img').css('opacity', '1');
        var txt = function() {
            $('.cell').find('span').text('internship in Helsinki');
        };
        txt();
    });
});
