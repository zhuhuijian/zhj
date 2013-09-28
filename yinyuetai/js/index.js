$(function(){
	//事件的委托
	initEvents();
	iniPosition();
})



//事件的委托
function initEvents () {
	// body...
	$(".tbmenu").mouseover(function(){
		$(this).find("dd").show();
		$(this).find("b").addClass("bup");



	});
	

	$(".tbmenu").mouseout(function(){
		$(this).find("dd").hide();
		$(this).find("b").removeClass("bup");
	});


	$(".mv_pic").mouseover(function(){
		$(this).find(".bigico_play").show();

	});

	$(".mv_pic").mouseout(function(){
		$(this).find(".bigico_play").hide();

	});

	$(".mv_pic").mouseover(function(){
		$(this).find(".smallico_play").show();

	});

	$(".mv_pic").mouseout(function(){
		$(this).find(".smallico_play").hide();

	});


	//$(".J_mv").mouseover(function(){
	//	$(this).find(".my_pic_info").show();

	//});

	//$(".J_mv").mouseout(function(){
	//	$(this).find(".my_pic_info").hide();

	//});






}






