$(document).ready(function(){
	$("#about_me").slideDown(1500);
});
$(document).ready(function(){
	$("#header").slideDown(1500);
});
$("#scroll_down").click(function(){
	$("html, body").animate({scrollTop: $(document).height()}, "slow");
	return false;
});