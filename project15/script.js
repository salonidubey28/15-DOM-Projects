const slides = document.querySelectorAll(".slide");
let count = 0;

// Initialize the position of each slide
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Function to move to the previous slide
const goPrev = () => {
  count--;
  // Ensure the count doesn't go below 0
  if (count < 0) {
    count = slides.length - 1; // Loop to the last slide
  }
  slideImage();
}

// Function to move to the next slide
const goNext = () => {
  count++;
  // Ensure the count doesn't go beyond the number of slides
  if (count >= slides.length) {
    count = 0; // Loop to the first slide
  }
  slideImage();
}

// Function to update the position of each slide
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
if (count === 0) {
  prevButton.style.display = "none";
  nextButton.style.display = "block";
} else if (count === slides.length - 1) {
  prevButton.style.display = "block";
  nextButton.style.display = "none";
} else {
  prevButton.style.display = "block";
  nextButton.style.display = "block";
}
}

// Initialize button visibility on page load
slideImage();
