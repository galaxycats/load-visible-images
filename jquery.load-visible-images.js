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
  
  var defaults = {
    'effectBefore' : 'hide',
    'effectAfter' : 'fadeIn',
    'bindEvent' : 'scroll'
  };
  var settings;
  
  var methods = {
    
    init : function( options ) {
      settings = $.extend({}, defaults, settings, options );
      $(this).bind(settings.bindEvent, function(){ $(this).loadVisibleImages("checkForVisibility"); });
      $(this).loadVisibleImages("checkForVisibility");
    },
    
    checkForVisibility : function() {
      var visHeight = $(this).height();
      $(this).find("img").each(function(){
        var $this = $(this);
        if($this.position().top <= visHeight){
          if($this.data("img-src")) {
            if($this.attr("src") != $this.data("img-src")){
              if(settings.effectBefore){ $this[settings.effectBefore].call($this); }
              $this.attr("src", $this.data("img-src"));
              if(settings.effectAfter){ $this[settings.effectAfter].call($this); }
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