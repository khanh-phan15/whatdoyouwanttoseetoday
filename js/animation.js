document.addEventListener("DOMContentLoaded", function() {
  const div5 = document.getElementById("image1");
  const div6 = document.getElementById("image2");

  // Function to animate images
  function animateImages() {
      // Make images larger
      div5.style.width = "300px"; // New width
      div6.style.width = "300px"; // New width

      // Set a timeout to shrink back after 1 second
      setTimeout(() => {
          div5.style.width = "200px"; // Original width
          div6.style.width = "200px"; // Original width
      }, 1000); // Duration before shrinking back
  }

  // Trigger the animation every 2 seconds
  setInterval(animateImages, 2000); // Change every 2 seconds
});