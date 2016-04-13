var clicked = false;

// buttonClicked = function(){
//   console.log(clicked);
//   var elem = document.getElementById("content");
//   if (clicked){
//     elem.className = '';
//     clicked = false;
//   }
//   else {
//     elem.className += 'animate ';
//     clicked = true;
//   }
// }
var clicked = false;
buttonClicked = function(){
  if (clicked){
    $("#app-ribbon-menu").css('display', "block");

  $( "#app-col-right" ).animate({
      marginLeft: "240px"
    }, 300, function() {
      // Animation complete.
        $('.obvious').TrackpadScrollEmulator('recalculate');
    });

    clicked = false;
  }

  else {

    $( "#app-col-right" ).animate({
        marginLeft: "0px"
      }, 500, function() {
        // Animation complete.
          $('.obvious').TrackpadScrollEmulator('recalculate');
          $("#app-ribbon-menu").css('display', "none");
      });
    clicked = true;
    //$("#app-col-right").css("marginLeft") = "0px";
  }
}


//$(".element").css("marginLeft") = "200px";
//$('.wrapper').TrackpadScrollEmulator('recalculate');
