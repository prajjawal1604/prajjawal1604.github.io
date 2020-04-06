/* ..................................navigation bar....................*/

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

/* .................................background fading....................*/


$(window).scroll(function(){
  $(".content1").css("opacity", 1 - $(window).scrollTop() / 350);
});

$(window).scroll(function(){
  $(".content").css("opacity", 1 - $(window).scrollTop() / 800);
});

/* .................................side navigation bar....................*/


// $(window).scroll(function(){
//  if($(window).scrollTop()>814){
//    $("#sidebar").css("display",none);
//    console("hi");
//   //$(".sidebar").css("top", 1000);
//   // alert("stop"); 
//  }
// });


$(window).scroll(function(){
  $(".sidebar").css("opacity", $(window).scrollTop() / 900);
});


/* ....................................................login popup............................................*/


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}















