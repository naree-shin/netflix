$(function(){


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
    
    $("div.contentsList2>div").slick({
	
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




