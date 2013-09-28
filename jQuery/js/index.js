$(function(){
	//事件的委托
	initEleEvents();
	initEvents();
	iniPosition();
})



//事件的委托
function initEleEvents () {
	// body...
	$(".flashControl").mouseover(function(){
		$(".flashControl").removeClass("flashControlover");
		$(this).addClass("flashControlover");
	});

	$(".flashControl").mouseout(function(){
		$(".flashControl").removeClass("flashControlover");


	});

}




function initEvents () {
	// body...
	$(".tbmenu").mouseover(function(){
		$(this).find("dt").addClass("dtover");
		$(this).find("dd").show();

	});

	$(".tbmenu").mouseout(function(){
		$(this).find("dt").removeClass("dtover");
		$(this).find("dd").hide();

	});

}

function iniPosition(){
	$.each($(".tbmenu"),function(i){
		$(this).css("left",i*105+"px");
	});

}



