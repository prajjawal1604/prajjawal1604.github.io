var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}


$(window).scroll(function(){
  $(".content1").css("opacity", 1 - $(window).scrollTop() / 350);
});

$(window).scroll(function(){
  $(".content").css("opacity", 1 - $(window).scrollTop() / 800);
});

// $(window).scroll(function(){
//  if($(window).scrollTop()>814){
//    $("#sidebar").css("display",none);
//    console("hi");
//   //$(".sidebar").css("top", 1000);
//   // alert("stop"); 
//  }
// });


var wrap = $(".sidebar");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop >814) {
    wrap.addId("fix-search");
  } else {
    wrap.removeId("fix-search");
  }
  
});