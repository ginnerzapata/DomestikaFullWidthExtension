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
  const button = document.createElement("button");
  button.textContent = "Adjust width";
  button.className = "adjustWidthBtn";

  button.addEventListener("click", function () {
    adjustMaxWidth();
  });

  const videoContainerCoursePage = document.querySelector(
    ".course-trailer-footer__tool"
  );

  if (videoContainerCoursePage) {
    button.style.marginLeft = "24px";
    videoContainerCoursePage.appendChild(button);
  }
  const videoContainers = document.querySelectorAll(
    ".video-player-widget-link"
  );

  if (videoContainers && videoContainers.length > 0) {
    videoContainers.forEach((element) => {
      element.appendChild(button);
    });
  }
}

createAdjustButton();
