$(function(){
	//事件的委托
	initEvents();

})








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


