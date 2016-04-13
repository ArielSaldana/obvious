/*  TODO: find a way to attach functions to events globally. and remove them as
 *  need be
 *
 */

var scroll = scroll || {};

(function(window,document,undefined){
  'use strict';

    /* functions */
    /* make them all internal */
    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;

        while(element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
        return { x: xPosition, y: yPosition };
    }

    /* anonymous functions end*/

    /*
     *  Animation testing
     */

     scroll.animateScroll = function(elem, duration){

       var element = document.getElementById(elem);
       var pos = getPosition(element);
       var intval =  pos.y / duration;
       var i = 0;
       console.log(intval);

       var myInterval = setInterval(function(){
          if (i <= pos.y){
            //console.log(i);
            window.scrollTo(0, i);
            i+=10;
          }
          else {
            window.scrollTo(0, pos.y);
            clearInterval(myInterval);
          }

       },16);

       var animate = setInterval(anim, 100);

       var anim = function(){
         console.log("meow");
        //  if(i <= pos.y){
        //    scrollTo(0, i+7);
        //    i+=7;
        //  }
        //
        //  else {
        //  clearInterval(animate);
        // }
       }

      //  setInterval(function () {
       //
      //    if (i <= pos.y){
      //      scrollTo(0, i+7);
      //      i+=7;
      //    }
      //  }, 100);

    //    setTimeout(function(){ scrollTo(0, i+7);
    //    i+=7;
    //  }, 100);
      //  while (i < pos.y){
      //    setInterval(function () {
      //      document.scrollTo(0, i+1);
      //      i++;
      //      console.log(i);
      //    }, 10);
      //  }
       console.log(pos.y);
       console.log(duration);
       console.log(intval);


     }

     /* end animation testing */

    var priv_var = 'bar';
    var rootElement = document.documentElement;

    /* custom events */
    var scrolled_up   = new CustomEvent("ScrolledUp");
    var scrolled_down = new CustomEvent("ScrolledDown");

    // usage of events

    // document.body.addEventListener("ScrolledDown", function(){
    //  code here
    // }, false);

    scroll.initDetectScroll = function(){
      var lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      window.addEventListener('scroll', function(){
        var top  = window.pageYOffset || document.documentElement.scrollTop;
        if (top > lastScrollPosition+30){
          document.body.dispatchEvent(scrolled_down);
          lastScrollPosition = top;
        }
        else if (top + 30 < lastScrollPosition) {
          document.body.dispatchEvent(scrolled_up);
          lastScrollPosition = top;
        }
      });
    }


    scroll.init = function(str) {
      console.log('initiated');
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //alert('Mobile-not-supported')
        // this won't work for iPhone with iOS < 8
        //return;
      }


      priv_var = str;

      var c = document.querySelectorAll('[data-uscroll]');
        //c[i].style.display = 'none';
        //c[i].addEventListener('onscroll', run(i));
        window.addEventListener('scroll', function(){

          /* test */

          for ( var i = 0; i < c.length; i++){

          var content = document.getElementById("navbar");
          var header = document.getElementsByClassName("hero-content")[0];
          //alert(content.clientHeight);
          //alert(header.clientHeight);

          var top  = window.pageYOffset || document.documentElement.scrollTop;
              //,left = window.pageXOffset || document.documentElement.scrollLeft;

            if (top > header.clientHeight-80) {
              document.getElementById("navbar").className = "black";
            }

            else if (top < header.clientHeight-80) {
              document.getElementById("navbar").className = "";
            }

            var opa = (1-(top*.003));

            //var scrollDiv = document.getElementsByClassName("u-scroll")[0];
            var scrollDiv = c[i];
            // Opacity
            scrollDiv.style.opacity = opa;

            // Position
            scrollDiv.style.top = (top * 0.13) + "px";




}
        }, false);
      //document.getElementById('myButton').addEventListener('click', myFunction, false);

    }

    var run = function(){
      console.log('found! ');
    }

    scroll.post_custom = function(){
      var a = document.getElementById('container')
      var c = document.querySelectorAll('[data-uscroll]');
      c[0].style.display ='none';
      console.log(a);
      console.log(c);
      //c.display('none');
    //  document.querySelectorAll('div[uscroll]');
    }

    scroll.post = function(){
      console.log(priv_var);
    }

    scroll.MyClass = function(){
        this.property = 'foo';

        //priv_var is accessible in here
        scroll.hello = function(){
          console.log('hello');
        }

        return this;
    }

})(window,document,undefined);
