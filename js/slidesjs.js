$(function(){
	$('.mosaico .container-mosaico .mosaico-wraper').slick({
		centerMode:true,
		slidesToShow:3,
		arrows:false,		
		dots:true,

  autoplay: true,
  autoplaySpeed: 2000,

		responsive:[

		{
			breakpoint:900,
			settings:{
  			centerMode:true,
  			slidesToShow: 2,
				dots:true,
				infinite:true,
  				autoplay: true,
  				autoplaySpeed: 1000,

			}

		},
		{
			breakpoint:650,
			settings:{
				arrows:false,
				centerMode:true,				
				dots:true,
				slidesToShow:1,				
  				autoplay: true,
  				autoplaySpeed: 1000,
			}

		},
		{
			breakpoint:380,
			settings:{

				dots:true,
				arrows:false,
				centerMode:true,
				slidesToShow:1,
  				autoplay: true,
  				autoplaySpeed: 2000,
			}

		},

		]
	});
})