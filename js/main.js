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



	$("div.mainSliderIn").slick({
		infinite: true,
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: false,
		fade: true,
        
    });

	
$("a.scroll").click(function(e){

        e.preventDefault();

         var offset = $("div.contentMenu").offset();

  

        $("html,body").stop().animate({scrollTop: offset.top-0},300);

    });


	$("li.btn > a").on("click", function(e){

		var bbb = $(window).outerWidth();
			console.log(bbb);

		e.preventDefault();


		if(bbb < 940){
				$(this).parent().toggleClass("on");
				$("li.btn.on").not($(this).parent()).removeClass("on");
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

			$("ul.h_left>li").on("mouseout", function(){

			var ddd = $(window).outerWidth();
				console.log(ddd);

				if(ddd > 940){
					$("nav").stop().removeClass("on");
					$(this).stop().removeClass("on");
				}
			
			});

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

		var aaa = $(window).outerWidth();
			console.log(aaa);


			if(aaa > 940){
				$("nav").stop().removeClass("on");
				$(this).stop().removeClass("on");	
			}
		

	
	});


	$("div.ori > a").click(function(e){
		e.preventDefault();
		$("div.ori>ul").stop().toggleClass("on");
		$("div.ori > a").stop().toggleClass("on");

		var aaa = $(window).outerWidth();
		console.log(aaa);

		if(aaa < 940) {
			$("div.ori > a").stop().removeClass("on");
			$("div.ori>ul").stop().removeClass("on");
			$("div.ori>ul").stop().addClass("active");
			$("div.ori>ul.active").stop().slideToggle(1000);

		}
	});

});




