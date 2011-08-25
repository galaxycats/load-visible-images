jQuery plugin - loadVisibleImages
---------------------------------
  
  
Installation
-----------

Just put
  
  <script src="jquery.load-visible-images" type="text/javascript"></script>

in you HTML-Head.


Usage
-----

Just put
  
  <script src="jquery.load-visible-images" type="text/javascript"></script>

in you HTML-Head.

Now you can call `loadVisibleImages()` on any jQuery-Object.

Example
-------

  <div id="scrollable-div-container">
    <img src="loading-image.gif" data-img-src="the-real-image-src.jpg">
    <img src="loading-image.gif" data-img-src="the-real-image-src.jpg">
    <img src="loading-image.gif" data-img-src="the-real-image-src.jpg">
    <img src="loading-image.gif" data-img-src="the-real-image-src.jpg">
  </div>
  
  <script type="text/javascript" charset="utf-8">
    $(document).ready(function() { $('#scrollable-div-container').loadVisibleImages(); });
  </script>
  
So if you div-container is smaller than the images to display and a scrollbar appears, all images will only be loaded if they are visible.
