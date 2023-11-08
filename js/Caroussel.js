

$(document).ready(function(){
    $('.episodListSection').slick({
    slidesToShow: 5,
    centerMode: false,
    infinite:true,
    variableWidth:true,
    nextArrow:'<button id="CarRightArr" class="Button2"><img src="/La-citadel-Derick/image/right arrow.png" alt="Left button"></button>',
    prevArrow:'<button id="CarLeftArr" class="Button2"><img src="/La-citadel-Derick/image/left arrow.png" alt="Left button"></button>',
    accessibility:false,
    vertical:false,
    draggable:false
  });
  });
  
  $(document).ready(function(){
    $('.animeProposalCar').slick({
    slidesToShow: 5,
    centerMode: false,
    infinite:true,
    variableWidth:true,
    nextArrow:'<button id="CarRightArr" class="Button2"><img src="/La-citadel-Derick/image/right arrow.png" alt="Left button"></button>',
    prevArrow:'<button id="CarLeftArr" class="Button2"><img src="/La-citadel-Derick/image/left arrow.png" alt="Left button"></button>',
    accessibility:false,
    vertical:false,
    draggable:false,
    autoplay:true,
    autoplaySpeed:3000,
  });
  });