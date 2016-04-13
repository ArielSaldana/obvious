scrollControl = {
    keys : [32, 37, 38, 39, 40],

    scrollTimer : 0,

    lastScrollFireTime : 0,

    preventDefault  :   function(e){
                            e = e || window.event;
                            if (e.preventDefault)
                              e.preventDefault();
                            e.returnValue = false;
                        },

    keydown :   function(e){
                    for (var i = scrollControl.keys.length; i--;) {
                        if (e.keyCode === scrollControl.keys[i]) {
                            scrollControl.preventDefault(e);
                            return;
                        }
                    }
                },

    wheel   :   function(e){
                    scrollControl.preventDefault(e);
                },

    disableScroll   :   function(){
                            if (window.addEventListener) {
                                  window.addEventListener('DOMMouseScroll', scrollControl.wheel, false);
                              }
                              window.onmousewheel = document.onmousewheel = scrollControl.wheel;
                              document.onkeydown = scrollControl.keydown;
                        },

    enableScroll    :   function(){
                            if (window.removeEventListener) {
                                window.removeEventListener('DOMMouseScroll', scrollControl.wheel, false);
                            }
                            window.onmousewheel = document.onmousewheel = document.onkeydown = null;
                        }

}


// var content = document.getElementById("container");
// if (content.addEventListener){
//   	// IE9, Chrome, Safari, Opera
//   	content.addEventListener("mousewheel", MouseWheelHandler, false);
//     // Firefox
// content.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// }
//     // IE 6/7/8
// else content.attachEvent("onmousewheel", MouseWheelHandler);
//
//
// function MouseWheelHandler(e) {
//   console.log('wheel scroll');
// 	// cross-browser wheel delta
// 	// var e = window.event || e; // old IE support
// 	// var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//
// }
