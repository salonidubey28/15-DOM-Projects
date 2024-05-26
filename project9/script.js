document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".switch-btn");
  const video = document.querySelector(".video-container");
  const preloader = document.querySelector(".preloader");

  // Hide preloader once the window is fully loaded
  window.addEventListener("load", () => {
      preloader.classList.add("hide-preloader");
  });

  // Toggle play/pause for the video on button click
  btn.addEventListener("click", () => {
      if (!btn.classList.contains("slide")) {
          btn.classList.add("slide");
          video.pause();
          btn.classList.add("playing");
      } else {
          btn.classList.remove("slide");
          video.play();
          btn.classList.remove("playing");
      }
  });
});
