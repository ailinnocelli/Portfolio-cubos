$(document).on("ready", function(){

	$("#menu ul li a").on("click", function(){
		var seccion = $(this).attr("name");
		var posicion = $("#"+seccion).position().top;

		$("body").animate({
			scrollTop:posicion,
		},1500, "easeInOutCubic");
	})

	$(window).scroll(function(){
		var barra = $("body").scrollTop();
		console.log(barra);
		if(barra>=50){
			$("nav").addClass("nav-dos");
		}
		if(barra<50){
			$("nav").removeClass("nav-dos");

		}

	})

})
