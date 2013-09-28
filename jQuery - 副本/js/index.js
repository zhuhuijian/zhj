$function(){
	//事件的委托
	iniEvents();

}


function iniEvents () {
	// body...
	$("#test2").mouseover(function(){
		$(".show2").show();
	});

	$("#test2").mouseout(function(){
		$(".show2").hide();

	});

}