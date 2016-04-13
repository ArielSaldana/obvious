(function ( $ ) {


  //global shiz;
  window.arraytest = [];
  var hashtable = {};

  // relative from the page
  function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}

var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
};

  function getAllElementsWithAttribute(attribute)
  {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++)
    {
      if (allElements[i].getAttribute(attribute) !== null)
      {
        // Element exists with attribute. Add to array.
        matchingElements.push(allElements[i]);
      }
    }
    return matchingElements;
  }


  function alertSize() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  //window.alert( 'Width = ' + myWidth );
  //window.alert( 'Height = ' + myHeight );
  return myHeight;
}


  var content = document.getElementById("container");
  if (content.addEventListener){
    	// IE9, Chrome, Safari, Opera
    	content.addEventListener("mousewheel", MouseWheelHandler, false);
      // Firefox
  content.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
  }
      // IE 6/7/8
  else content.attachEvent("onmousewheel", MouseWheelHandler);

  var top  = window.pageYOffset || document.documentElement.scrollTop,
      left = window.pageXOffset || document.documentElement.scrollLeft;

  var windowHeight = alertSize();
  function MouseWheelHandler(e) {
  //  console.log('wheel scroll');
      top  = window.pageYOffset || document.documentElement.scrollTop
    //console.log(top);
    //console.log(top+windowHeight);


      arraytest.forEach(function(entry){
        if (top+windowHeight > entry) {
        //  console.log('BIACHHHHH');
          //console.log(top+windowHeight +' > '+ entry);
          // console.log(arraytest);
          // console.log(hashtable);

          //console.log(hashtable[entry]);
          //perhaps store the element and skip this step
          var elemm = document.getElementById(hashtable[entry]);
          elemm.style.opacity = '1';
          elemm.style.transform = 'translateX(0px) translateY(0px)';
          elemm.style.padding = '15px';

          var index = arraytest.indexOf(entry);

          if (index == 0)
          {
            arraytest.shift();
          }

          else {
            arraytest.splice(index,index);
          }

          //if no other shit in array close the scroll event listeners;

        }
      });
      //console.log(alertSize());
  	// cross-browser wheel delta
  	// var e = window.event || e; // old IE support
  	// var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  }





window.onload = function(){
var attrs = getAllElementsWithAttribute('data-ix');
// attrs.forEach(console.log('caca'));
Array.prototype.slice.call(attrs).forEach(function(item) {
  getPos(item);
  // console.log(item);
  // console.log(getPos(item));
  // console.log(cumulativeOffset(item));
  // console.log(item.offsetLeft + ': ' + item.offsetTop);
  arraytest.push(item.offsetTop);
  //hashtable.item.offsetTop = item.id;
  hashtable[item.offsetTop] = item.id;
  console.log(item.id);
  console.log(item.offsetTop);
});
console.log(arraytest);
console.log(hashtable);
//console.log(item)



var top  = window.pageYOffset || document.documentElement.scrollTop,
    left = window.pageXOffset || document.documentElement.scrollLeft;

// document.body.addEventListener("scroll", function(){
//   console.log('broken?');
// });
//
// document.body.addEventListener("mousewheel", function(){
//   top  = window.pageYOffset || document.documentElement.scrollTop
//   console.log(top);
// });


document.body.addEventListener("ScrolledDown", function(){
  var nav = document.getElementById('navbar');
  nav.style.opacity = '0';

  var elemm = document.getElementById('img-unr');
  var elemmm = document.getElementById('img-unr3');
  //var elem = document.getElementById('hero-container');



  // if (isElementVisible(elemm)){
  //   console.log('yup');
  //   elemm.style.opacity = '1';
  //   elemm.style.transform = 'translateX(0px) translateY(0px)';
  //   elemm.style.padding = '15px';
  // }
  //
  // if (elementInViewport(elemm)){
  // console.log('yup2');
  // elemm.style.opacity = '1';
  // elemm.style.transform = 'translateX(0px) translateY(0px)';
  // elemm.style.padding = '15px';
  // }
  //
  // if (elementInViewport(elemmm)){
  // console.log('yup2');
  // elemmm.style.opacity = '1';
  // elemmm.style.transform = 'translateX(0px) translateY(0px)';
  // elemmm.style.padding = '15px';
  // }
  // if (withinviewport(elem)){
  //   alert('FUCK YEAH');
  // }
  // else {
  //   console.log('nope');
  // }

}, false);







}
console.log(attrs);
    var start = function(){
      return new testt();
    }
    $.testt = function(){
      console.log('meow');

    };
    $.greenify = function() {
        //this.css( "color", "green" );
        this.color = 'foo';
        return this;
    };

    if(!window.start) {
        window.start = start;
    }

}( obvious ));
