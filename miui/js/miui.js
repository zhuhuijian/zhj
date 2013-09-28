$(function(){
	events();
	inihover();
})

function events () {
	// body...
	$(".showpro").mouseover(function(){
		$(".tbmenu").show();
	});

	$(".showpro").mouseout(function(){
		$(".tbmenu").hide();
	});

}

function inihover(){
	$(".v1").mouseover(function(){
		$(this).removeClass(".v1");
		$(this).addClass(".v2");
	});
}