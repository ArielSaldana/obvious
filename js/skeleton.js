/*
 *  Ariel Saldana A Unreal Project
 *
 */

(function() {

  var AccessibleLibraryVariable = function (params){
    return new Library(params);
  };

  var Library = function (params) {

  };

  // Assign it to window object
  if(!window.AccessibleLibraryVariable) {
      window.AccessibleLibraryVariable = AccessibleLibraryVariable;
  }

})();

/* usage
 *
 * AccessibleLibraryVariable('');
 *
 */

var MyNamespace = MyNamespace || {};

(function(){
  'use strict';
    var priv_var = 'bar';

    MyNamespace.MyClass = function(){
        this.property = 'foo';

        //priv_var is accessible in here

        return this;
    }

}());



=====


var MyNamespace = MyNamespace || {};

(function(window,document,undefined){
  'use strict';
    var priv_var = 'bar';

    MyNamespace.MyClass = function(){
        this.property = 'foo';

        //priv_var is accessible in here

        return this;
    }

})(window,document,undefined);
