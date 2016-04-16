
var fs = require( 'fs' );
var path = require('path');

// less api and clean-css apis

var less = require( 'less' );
var cleancss = require('clean-css');



// let's load our main less file

fs.readFile('less/obvious.less', function(error, data){
    
    // get the main less file contents.
    
   var dataStr = data.toString();
   
   // less options
   
   var lessOptions = {
       paths : ['./less', '/'],
       outputDir : "./css",
       optimization : 1,
       filename : "obvious.less",
       compress : true,
       yuicompress : true
       
   };
   
   // cleanCss options
   
   var cleanCssOptions = {
       advanced : true,
   };
   
   // render our css

   less.render(dataStr, lessOptions, function(e, output){
        
        // if error 
        
        if (e) {
            console.log(e); 
            return;
        }
        
        // all good
        
        // minify?
        
        var minified = new cleancss(cleanCssOptions).minify(output.css).styles;
       
        fs.writeFileSync('css/obvious.css', output.css, 'utf8'); 
        fs.writeFileSync('css/obvious.min.css', minified, 'utf8'); 
    });
    

});

