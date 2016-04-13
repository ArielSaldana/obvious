(function ( $ ) {


  // test functions

    // obvious : function(){
    //
    // }
    var test = {
      lala : function(){
        console.log('lala');
      }
    };

    test.lala2 = function(){
      console.log('lala2');
    }

    for (var hey in test) {
    if (typeof test[hey] == "function" && test.hasOwnProperty(hey)) {
        test[hey]();
    }
}

  // var testFunctions = {
  //   lala : function(){
  //
  //   }
  //
  //   lala2: function(){
  //
  //   }
  // }

  //global variables; ONLY IN THIS SCOPE
  var arraytest = [];
  var hashtable = {};

  var didScroll = false;
  // interval to check for scroll shit
  var interval = 100;

  // position from top currently
  var top = 0;

  // the page we're scrolling through
  var page = document.getElementById("container");


  if (page.addEventListener){
    	// IE9, Chrome, Safari, Opera
    	page.addEventListener("mousewheel", MouseWheelHandler, false);
      // Firefox
  page.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
  }
      // IE 6/7/8
  else page.attachEvent("onmousewheel", MouseWheelHandler);

  var top  = window.pageYOffset || document.documentElement.scrollTop,
      left = window.pageXOffset || document.documentElement.scrollLeft;

  var windowHeight = getWindowHeight();
  var scrollTo = 0;
  var time = 10000; //10 secs by 16 miniseconds travel.. 625 scrolltos.
  // 1k from top by 625 = 1.6 per set off
  var remainder = 0;
  function MouseWheelHandler(e) {
    //  didScroll = true;

    top  = window.pageYOffset || document.documentElement.scrollTop

    console.log(top);
  e.stopPropagation();
  e.preventDefault();

    //scrollTo = top+1000;
    // that's 100 / s but we need really like....

    //var endPosition = top+100;
    //var time = 1000;
    // setInterval(function () {
    //   window.scrollBy(0,endPosition);
    //   window.scrollTo(0,endPosition);
    // }, 10);


  //  window.scrollBy(0,500);
  //  window.scrollTo(0,500);

  }


  setInterval(function () {
       window.scrollBy(0,top+Math.floor(1.6));
       window.scrollTo(0,top+Math.floor(1.6));
  }, 16);
  // work is handled here with an interval (let's not kill the UI);
  setInterval(function () {
    if (didScroll)
    {
      didScroll = false;
      top  = window.pageYOffset || document.documentElement.scrollTop
    //console.log(top);
    //console.log(top+windowHeight);


      arraytest.forEach(function(entry){
        if (top+windowHeight > entry) {

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
    }
  }, interval);

window.onload = function(){
var attrs = getAllElementsWithAttribute('data-ix');
top  = window.pageYOffset || document.documentElement.scrollTop;
// attrs.forEach(console.log('caca'));
if (attrs) {
Array.prototype.slice.call(attrs).forEach(function(item) {

  // push the item position from top to our array
  arraytest.push(item.offsetTop);
  // hold the position as a key to the item ID for reference later
  hashtable[item.offsetTop] = item.id;
});
}

//console.log(item)

}
someFunction = function() {
    alert("done");
}


someFunction = (function() {
    var cached_function = someFunction;

    return function() {
        // your code

        var result = cached_function.apply(this, arguments); // use .apply() to call it

        // more of your code
        alert("done2");
        return result;
    };
}());
    var start = function(){

      return new someFunction();
      //return new testt();
    }
    $.testt = function(){
      console.log('meow');

    };
    $.greenify = function() {
        //this.css( "color", "green" );
        this.color = 'foo';
        return this;
    };

    // functions

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

    function getWindowHeight() {
      var myHeight = 0;
      if( typeof( window.innerHeight ) == 'number' ) {
        //Non-IE
        myHeight = window.innerHeight;
      } else if( document.documentElement && ( document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        myHeight = document.documentElement.clientHeight;
      } else if( document.body && ( document.body.clientHeight ) ) {
        //IE 4 compatible
        myHeight = document.body.clientHeight;
      }

      return myHeight;
    }

    if(!window.start) {
        window.start = start;
    }

}( obvious ));
