//create a 12 dotBoxes spread evenly across the window
function getGridAreaSize(){
	//$('#grid-area').width($(window).width()-50 );
}

function getBoxSize(){
	var boxWidth = $('#grid').width() /8;
	return boxWidth;
};

function createBoxes(){
	for (i = 0; i < 8; i++) {
		$('#grid').append("<div class='dotBox' id='box_" + i + "'><div class='dotarea' id= 'dotarea_" + i + "'><div class='dot' id= 'dot_" + i + "'></div></div></div>");
		$('.dotBox').css('width',getBoxSize());
		$('.dotBox').css('height',getBoxSize());
	};
};

getGridAreaSize();
getBoxSize();
createBoxes();

$("#dotarea_0 ").append("<img id='img_0' src='img/nori.png'><p id='work_0'>user interaction with technology</p>");
// $("#dotarea_0 ").append("<p id='work_0'>user interaction with technology </p>");
$("#dotarea_1 ").append("<img id='img_1' src='img/data.png'><p id='work_1'>service design with machine learning </p>");
$("#dotarea_2 ").append("<img id='img_2' src='img/soccer.png'><p id='work_2'>interactive data visualization in sports</p>");
$("#dotarea_3 ").append("<img id='img_3' src='img/school.png'><p id='work_3'>data visualization with social value</p>");
$("#dotarea_4 ").append("<img id='img_4' src='img/mari.png'><p id='work_4'>international experience</p>");
$("#dotarea_5 ").append("<img id='img_5' src='img/42.png'><p id='work_5'>experience with various form</p>");
$("#dotarea_6 ").append("<img id='img_6' src='img/zyga.png'><p id='work_6'>internship in Helsinki in a startup</p>");
$("#dotarea_7 ").append("<img id='img_7' src='img/graphic.png'><p id='work_7'>graphic design with patterns</p>");

$(function() {
    $('#dotarea_0').hover(function() {
        $('#work_0').css('opacity', '1');
        $('#img_0').css('opacity', '1');
    }, function() {
        $('#work_0').css('opacity', '0');
        $('#img_0').css('opacity', '0');
    });
});
$(function() {
    $('#dotarea_1').hover(function() {
        $('#work_1').css('opacity', '1');
        $('#img_1').css('opacity', '1');
    }, function() {
        $('#work_1').css('opacity', '0');
        $('#img_1').css('opacity', '0');
    });
});
$(function() {
    $('#dotarea_2').hover(function() {
        $('#work_2').css('opacity', '1');
        $('#img_2').css('opacity', '1');
    }, function() {
        $('#work_2').css('opacity', '0');
        $('#img_2').css('opacity', '0');
    });
});
$(function() {
    $('#dotarea_3').hover(function() {
        $('#work_3').css('opacity', '1');
        $('#img_3').css('opacity', '1');
    }, function() {
        $('#work_3').css('opacity', '0');
        $('#img_3').css('opacity', '0');
    });
});
$(function() {
    $('#dotarea_4').hover(function() {
        $('#work_4').css('opacity', '1');
        $('#img_4').css('opacity', '1');
    }, function() {
        $('#work_4').css('opacity', '0');
        $('#img_4').css('opacity', '0');
    });
});
$(function() {
    $('#dotarea_5').hover(function() {
        $('#work_5').css('opacity', '1');
        $('#img_5').css('opacity', '1');
    }, function() {
        $('#work_5').css('opacity', '0');
        $('#img_5').css('opacity', '0');
    });
});
$(function() {
    $('#dotarea_6').hover(function() {
        $('#work_6').css('opacity', '1');
        $('#img_6').css('opacity', '1');
    }, function() {
        $('#work_6').css('opacity', '0');
        $('#img_6').css('opacity', '0');
    });
});
$(function() {
    $('#dotarea_7').hover(function() {
        $('#work_7').css('opacity', '1');
        $('#img_7').css('opacity', '1');
    }, function() {
        $('#work_7').css('opacity', '0');
        $('#img_7').css('opacity', '0');
    });
});

// CONNECT THE DOTS

var startDotSet = false;
var endDotSet = false;
var mouseX;
var mouseY;

//get mouse coords
$(document).mousemove(function(){
	mouseX = event.pageX;
	mouseY = event.pageY;
});

//if there is NO startdot yet
$('.dotarea').mouseenter(function(){
	if (startDotSet === false) {
		//name a startdot on mouseover
		$(this).children('.dot').addClass('startDot');
		$(this).children('.dot').addClass('visitedDot');
		console.log("added startdot Class");
		//tell program now there's a startdot!
		$('#canvas').append("<svg><line class=\"line\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"0\" /></svg>");
		$('#canvas line:last-child').unwrap();
		return startDotSet = true;
		//if there IS a startdot already
		} else {
		//name a enddot on mouseover
		$(this).children('.dot').addClass('endDot');
		$(this).children('.dot').addClass('visitedDot');
		console.log("added enddot Class");
		//tell program now there's an enddot!
		return endDotSet = true;
	};
});



//if there IS a startdot but no enddot
$(document).mousemove(function(){
	if ((startDotSet === true) && (endDotSet === false)) {
		//draw a line from startdot to mouse
		console.log("ok, ready to draw!");
		var startDotOffset = $('.startDot').offset();
		var endDotOffset = $('.endDot').offset();
		$('#canvas line:last-child').attr('x1', (parseInt(startDotOffset.left) + 5));
		$('#canvas line:last-child').attr('y1', (parseInt(startDotOffset.top) + 5));
		$('#canvas line:last-child').attr('x2', mouseX);
		$('#canvas line:last-child').attr('y2', mouseY);
	//if there is BOTH startdot and enddot
	} else if ((startDotSet === true) && (endDotSet === true)) {
		//build a line from startdot to enddot
		var startDotOffset = $('.startDot').offset();
		var endDotOffset = $('.endDot').offset();
		$('#canvas line:last-child').attr('x1', (parseInt(startDotOffset.left) + 5));
		$('#canvas line:last-child').attr('y1', (parseInt(startDotOffset.top) + 5));
		$('#canvas line:last-child').attr('x2', (parseInt(endDotOffset.left) + 5));
		$('#canvas line:last-child').attr('y2', (parseInt(endDotOffset.top) + 5));
		//remove classes startdot and enddot
		$('.startDot').removeClass('startDot');
		$('.endDot').addClass('startDot');
		$('.endDot').removeClass('endDot');
		//turn off startdot and enddot set
		startDotSet = true;
		endDotSet = false;
		//add a new potential line (invisible for now)
		$('#canvas').append("<svg><line class=\"line\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"0\" /></svg>");
		$('#canvas line:last-child').unwrap();
	};
});


$('#dot_0').css('background-color', '#80E6DB');
$('#dot_1').css('background-color', '#80E6DB');
$('#dot_2').css('background-color', '#B9C20A');
$('#dot_3').css('background-color', '#B9C20A');
$('#dot_4').css('background-color', '#783784');
$('#dot_5').css('background-color', '#80E6DB');
$('#dot_6').css('background-color', '#783784');
$('#dot_7').css('background-color', '#FDCB4E');

$('#dot_0').click(function(){
    window.location = 'http://www.naver.com/';
});
$('#dot_1').click(function(){
	window.location = 'http://www.naver.com/';
});
$('#dot_2').click(function(){
    window.location = 'http://www.naver.com/';
});
$('#dot_3').click(function(){
    window.location = 'http://www.naver.com/';
});
$('#dot_4').click(function(){
    window.location = 'http://www.naver.com/';
});
$('#dot_5').click(function(){
    window.location = 'http://www.naver.com/';
});
$('#dot_6').click(function(){
    window.location = 'http://www.naver.com/';
});
$('#dot_7').click(function(){
    window.location = 'http://www.naver.com/';
});

$(document).scroll(function(){
	$('#canvas').attr('height', $(document).height());
	$('#canvas').attr('width', $(document).width());
});

$(window).resize(function(){
	$('#canvas').empty();
	$('#canvas').attr('height', $(document).height());
	$('#canvas').attr('width', $(document).width());
});

// //re-measure & print anytime the window is resized
$(window).resize(function(){
    console.log("123123213123")
 $('#grid').empty();
    getGridAreaSize();
    getBoxSize();
    createBoxes();
});
