$function(){
	//事件的委托
	iniEvents();

}


function iniEvents(){
	$(".hp-dropDownMenu").mouseover(function(){
		$(this).addClass("dtover");
		$(".hupudd")show();

	});
}