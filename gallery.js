// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(/* function */ callback, /* DOMElement */ element) {
      window.setTimeout(callback, 1000 / 60);
    };
})();


// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
  requestAnimFrame(animate);
  var currentTime = new Date().getTime();
  if (mLastFrameTime === 0) {
    mLastFrameTime = currentTime;
  }

  if ((currentTime - mLastFrameTime) > mWaitTime) {
    swapPhoto();
    mLastFrameTime = currentTime;
  }
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
  //Add code here to access the #slideShow element.
  function swapPhoto(){}
  //Access the img element and replace its source
  //with a new image from your images array which is loaded 
  //from the JSON string
  console.log('swap photo');
}


if(mCurrentIndex) = mImages.length={
  mCurrentIndex = 0
}

if(mCurrentIndex) = mImages.length={
  mCurrentIndex = mImages.length-1
}


document.getElementById('photo').src = mImages(mCurrentIndex).img

var location = document.getElementsByClassName('location');
loc[0].innerHTML = 'Location'+ mImages[mCurrentIndex].location;

var description = document.getElementsByClassName('description');
des[0].innerHTML = 'Description'+ mImages[mCurrentIndex].location;

var date = document.getElementsByClassName('date');
dt[0].innerHTML = 'Date'+ mImages[mCurrentIndex].location;

// Counter for the mImages array
var mCurrentIndex = 0;

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();


// Part 2 Slideshow 1 and 2
function fetchJSON() {
    mRequest.onreadystatechange = function() {
        console.log("on ready state change");
        if(this.readyState == 4 && this.status == 200) {
            mJson = JSON.parse(mRequest.responseText);
            iterateJSON(mJson);
        }
    }
    mRequest.open('GET', mUrl, true);
    mRequest.send();
};

fetchJSON()



// Array holding GalleryImage objects (see below).
var mImages = [];

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = "gallery.js <unique_id>";


//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
  return function(e) {
    galleryImage.img = e.target;
    mImages.push(galleryImage);
  }
}

$(document).ready(function() {

  // This initially hides the photos' metadata information
  $('.details').eq(0).hide();

});

window.addEventListener('load', function() {

  console.log('window loaded');

}, false);


function GalleryImage() {
  var location
  var description;
  var date;
  var img;
}