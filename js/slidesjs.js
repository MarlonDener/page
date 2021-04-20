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
  			centerMode:false,
  			slidesToShow: 1,
				dots:true,
				infinite:true,
  				autoplay: true,
  				autoplaySpeed: 1100,

			}

		},
		{
			breakpoint:650,
			settings:{
				arrows:false,
				centerMode:false,				
				dots:true,
				slidesToShow:1,				
  				autoplay: true,
  				autoplaySpeed: 1100,
			}

		},
		{
			breakpoint:380,
			settings:{

				dots:true,
				arrows:false,
				centerMode:false,
				slidesToShow:1,
  				autoplay: true,
  				autoplaySpeed: 2000,
			}

		},

		]
	});
})