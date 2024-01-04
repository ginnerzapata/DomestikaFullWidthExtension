// content.js
let fullWidth = false;

function adjustMaxWidth() {
  const container = document.querySelector(".course-page > .container");
  if (fullWidth) {
    container.classList.add("domestika-full-width");
    fullWidth = false;
  } else {
    container.classList.remove("domestika-full-width");
    fullWidth = true;
  }
}

function createAdjustButton() {
  var button = document.createElement("button");
  button.textContent = "Adjust width";
  button.id = "adjustWidthBtn";
  button.style.marginLeft = "24px"; // Adjust the margin as needed

  button.addEventListener("click", function () {
    adjustMaxWidth();
  });

  // Assuming the video element has a common class, adjust it accordingly
  var videoContainer = document.querySelector(".course-trailer-footer__tool");
  if (videoContainer) {
    videoContainer.appendChild(button);
  }
}

// Call the function to create the button when the page loads
createAdjustButton();
