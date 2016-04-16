P.Components.form = P.Core.Abstract.extend(
{
    /**
     * Initialise and merge options
     * @constructor
     * @param {object} options Properties to merge with defaults
     * TODO: object in javascript map, might be worth it to traverse a map with the parent as a value
     */
    
    
    construct : function( options )
    {
        this.fields = options.form.getElementsByClassName("field");
        this.tels = options.form.querySelectorAll("input[type=tel]");
        this.emails = options.form.querySelectorAll("input[type=email]");
        
        
        this.listen_to_events();
    },
    
    triggerError : function(e) {
        var that = this;
        // console.log(this.fields);
        // console.log(e.type);
        [].forEach.call(this.fields, function (el) {
            if (el.contains(e)) {
                el.classList.add("error");
            }
        });
        
    },
    
    removeError : function(e) {
        [].forEach.call(this.fields, function (el) {
            if (el.contains(e)) {
                el.classList.remove("error");
            }
        });
    },
    
    isDescendant : function(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    },
    
    listen_to_events : function() {
        var that = this;
        
        // check email inputs
       
        [].forEach.call(
            this.emails, function(e) {
                e.addEventListener('focus', function(){
                    
                }),
                e.addEventListener('blur', function(){
                    // move this to a global scope??
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    
                    if (re.test(e.value)) {
                        that.removeError(e);
                        // that.triggerError(e);
                    }
                    else {
                        // error validating email
                        that.triggerError(e);
                    }
                    
                })
            }
        );
        
        // telephone inputs
        
        [].forEach.call(
            this.tels, function(e) {
                e.addEventListener('focus', function(){
                    console.log("FOCUSED");
                }, false),
                e.addEventListener('blur', function(){
                    var re = /^[2-9]\d{2}-\d{3}-\d{4}$/;
                    
                    if (re.test(e.value)) {
                        that.removeError(e);
                    }
                    
                    else {
                        that.triggerError(e);
                    }
                }),
                // input event.. but we'll support older browsers
                e.addEventListener('keydown', function(event) {
                    
                    // track the code for the key pressed
                    
                    var key = event.keyCode || event.charCode;
                    
                    if (key == 8 || key == 46) {
                        if (e.value.length == 4 || e.value.length == 8) {
                            e.value = e.value.substring(0, e.value.length - 1);
                        }
                    }
                    else {
                        return;
                    }
                }),
                e.addEventListener('input', function(){
                    if (e.value.length == 3 || e.value.length == 7) {
                        e.value += "-";
                        }
                });
            }
        );
    }
} );