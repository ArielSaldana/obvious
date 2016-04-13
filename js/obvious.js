var obvious = obvious || {};

(function(window,document,undefined){
  'use strict';
    var priv_var = 'bar';

    obvious.MyClass = function(){
        this.property = 'foo';
        this.test = 'meow';
        //priv_var is accessible in here
        
        return this;
    }
    // dollar signs yall
    window.obvious = window.$ = obvious;

})(window,document,undefined);
