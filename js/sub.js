$(function(){


	$("a.m_h_btn.on").click(function(){
		$("a.m_h_btn.off").addClass("active");
		$("ul.h_left").addClass("active");
		$("div.h_right").addClass("active");

	});

	$("a.m_h_btn.off").click(function(){
		$("a.m_h_btn.off").removeClass("active");
		$("ul.h_left").removeClass("active");
		$("div.h_right").removeClass("active");

	});

	$("p.btn2").click(function(){
		$("nav").css("right","-100%");
		$(".btn2").removeClass("on");		

	});



	
	$("li.btn > a").on("click", function(e){

		var bbb = $(window).outerWidth();
			console.log(bbb);

		e.preventDefault();


		if(bbb < 940){
				$(this).parent().toggleClass("on");
			}

		$(window).resize(function(){

			var ccc = $(window).outerWidth();

			if(ccc > 940){
				$(this).parent().removeClass("on");
			}

			$("ul.h_left>li").on("mouseover", function(){
		
			var aaa = $(window).outerWidth();
				console.log(aaa);


				if(aaa > 940){
					$("nav").stop().addClass("on");
					$(this).stop().addClass("on");	
				}
		});

		$("ul.h_left>li").on("mouseout", function(){
				$("nav").stop().removeClass("on");
				$(this).stop().removeClass("on");

			
			});

		});	
		

	});		

	
	$("ul.h_left>li").on("mouseover", function(){
		
		var aaa = $(window).outerWidth();
			console.log(aaa);


			if(aaa > 940){
				$("nav").stop().addClass("on");
				$(this).stop().addClass("on");	
			}
	});

	$("ul.h_left>li").on("mouseout", function(){
		$("nav").stop().removeClass("on");
		$(this).stop().removeClass("on");

	
	});






	$("div.contentsList>div").slick({
	
 		variableWidth: true,
 		arrows: true,
		infinite: true,
		speed: 300,
		slidesToScroll: 2,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    }
		]   
    });
	



});




