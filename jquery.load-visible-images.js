/**
 * jQuery.loadVisibleImages - load images if they are visible
 * Copyright (c) 20011 Andreas Bade - andi(at)galaxycats(dot)com | http://galaxycats.com
 * Dual licensed under MIT and GPL.
 * Date: 25/08/2011
 * @author Andreas Bade
 * @version 0.1.0
 *
 */
 
(function( $ ){
  
  var methods = {
    
    init : function( options ) {

      var settings = {
        'effect' : 'fadeIn' // not in use at the moment
      };
      if ( options ) { 
        $.extend( settings, options );
      };
      
      $(this).scroll(function(){ $(this).loadVisibleImages("checkForVisibility"); });
      $(this).loadVisibleImages("checkForVisibility");
      
    },
    
    checkForVisibility : function() {
      var visHeight = $(this).height();
      
      $(this).find("img").each(function(){
        var $this = $(this);
        if($this.position().top <= visHeight){
          if($this.data("img-src")) {
            if($this.attr("src") != $this.data("img-src")){
              $this.attr("src", $this.data("img-src"));
            }
          }
        }
      });
    }
    
  };
  
  $.fn.loadVisibleImages = function( method ) {
    
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.loadVisibleImages' );
    }
    
  };
})( jQuery );