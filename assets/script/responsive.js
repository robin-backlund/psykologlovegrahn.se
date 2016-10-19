var windowWidth = $( window ).width();
function responsiveNavar(){
  windowWidth = $( window ).width();
  if(windowWidth < 768){
    $(".nav-link").css("font-size","20px");
    $(".nav-link").css("height","50px");
    $(".nav-link").css("line-height","25px");
    $(".navbar-nav").css("width","100%");
    $(".navbar-nav").css("max-width","340px");
  }else{
    $(".nav-link").css("font-size","13px");
    $(".navbar-nav").css("width","");
    $(".navbar-nav").css("max-width","");
    $(".nav-link").css("height","");
    $(".nav-link").css("line-height","20px");
  }
  setTimeout(responsiveNavar, 200)
}

responsiveNavar();
