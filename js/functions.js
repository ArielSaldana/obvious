//document ready
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  // var width = window.innerWidth
  // || document.documentElement.clientWidth
  // || document.body.clientWidth;

  var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  var heroContent = document.getElementsByClassName("hero-content")[0];
  //var heroContent = document.getElementById("hero");

  heroContent.style.height = height + "px";
});

/* IE 8 doesn't support the top function
 * we could use onreadystatechange for it. but...
 *

 document.onreadystatechange = function () {
     if (document.readyState == "complete") {
     //document is ready. Do your stuff here
   }
 }

 *
 *
 */

/*$(document).ready(function () {
    //$('div.hidden').fadeIn(900).removeClass('hidden');

    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    var heroContent = document.getElementsByClassName("hero-content")[0];

    heroContent.style.height = height + "px";
    //document.getElementsByClassName("hero-content")[0].style.height = $(window).height();
    //style="padding: 200px 0px 200px 0px;"
    //document.getElementById("container").className = "";
    //fadeIn( document.getElementById("container"), 400 );
});*/

function openOverlay(){
  var body = document.getElementsByTagName('body')[0];
  //body.innerHtml =
  //document.body.innerHTML += '<div class="overlay-diag" style="position:fixed;width:100%;height:100%;opacity:0.95;z-index:100;background:#FFF;top:0;left:0;"><button class="button chromeless button--close" data-action="overlay-close">\u00D7</button></div>';

  //our overlay popup div
  var overlayDiv = document.createElement("div");
  overlayDiv.className = "overlay-popup";

  // wrap it!
  var overlayWrapper = document.createElement("div");
  overlayWrapper.className = "wrapper";

  // our button!
  var overlayCloseButton = document.createElement("button");
  overlayCloseButton.className="chromeless overlay-close";
  overlayCloseButton.addEventListener("click", function(){closeOverlay()}, false);
  overlayCloseButton.innerHTML+='\u00D7';

  // our content!
  var overlayPopupContent = document.createElement("div");
  overlayPopupContent.className = "overlay-content"
  overlayPopupContent.innerHTML+='<h2 class="overlay-title">Urban FT</h2>';


  // append all the childs
  overlayDiv.appendChild(overlayWrapper);
  overlayWrapper.appendChild(overlayCloseButton);
  overlayWrapper.appendChild(overlayPopupContent);

  body.appendChild(overlayDiv);





}

function closeOverlay(){
  removeElementsByClass("overlay-popup");
}
