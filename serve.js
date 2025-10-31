"use strict";

document.body.addEventListener('click', function(event) {
  // Check if the clicked element is an <img> tag
  if (event.target.matches("img")) {
    // Get the source URL of the specific image that was clicked
    const clickedImageSrc = event.target.src;
    
    // Save the image URL to sessionStorage
    sessionStorage.setItem('acces', clickedImageSrc);
    
    // Redirect the user to the product info page
    window.location.href = "product info.html";
  }
});