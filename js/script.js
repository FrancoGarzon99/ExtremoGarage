$(document).ready(function(){
	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 120){
			if(!flag){

				$("header").css({"background-color": "#000000"});
				flag = true;
			}
		}else{
			if(flag){
				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});