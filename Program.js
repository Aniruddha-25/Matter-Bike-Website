const bikeContainer = document.querySelector(".bike");
const totalImages = 289;
let currentIndex = 0;

/*Adding Image 289 */
for (let i = 1; i <= totalImages; i++) {
  const bikeImage = document.createElement("img");
  bikeImage.src = `./downloaded_images/image_${i}.webp`;
  bikeImage.alt = `Bike Image ${i}`;
  bikeImage.classList.add("bike-image");
  bikeContainer.appendChild(bikeImage);
}

const images = document.querySelectorAll(".bike-image");

/*Update Image Function */
function updateActiveImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });

  // Handle text_area_1 visibility
  const textArea1 = document.querySelector(".text_area_1");
  if (index >= 51 && index <= 63) {
    textArea1.style.display = "block";
  } else {
    textArea1.style.display = "none";
  }

  // Handle text_area_2 visibility
  const textArea2 = document.querySelector(".text_area_2");
  if (index >= 75 && index <= 110) {
    textArea2.style.display = "block";
  } else {
    textArea2.style.display = "none";
  }
  // Handle text_area_3 visibility
  const textArea3 = document.querySelector(".text_area_3");
  if (index >= 155 && index <= 194) {
    textArea3.style.display = "block";
  } else {
    textArea3.style.display = "none";
    // Handle text_area_4 visibility
    const textArea4 = document.querySelector(".text_area_4");
    if (index >= 213 && index <= 240) {
      textArea4.style.display = "block";
    } else {
      textArea4.style.display = "none";
    }
  }
  // Handle text_area_5 visibility
  const textArea5 = document.querySelector(".text_area_5");
  if (index >= 271 && index <= 289) {
    textArea5.style.display = "block";
  } else {
    textArea5.style.display = "none";
  }
}

updateActiveImage(currentIndex);

/*Scrolling Option with Function*/
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, totalImages - 1);
  } else {
    currentIndex = Math.max(currentIndex - 1, 0);
  }
  updateActiveImage(currentIndex);
});
/*Scrolling Keydown with Function*/
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    currentIndex = Math.min(currentIndex + 1, totalImages - 1);
    updateActiveImage(currentIndex);
  } else if (event.key === "ArrowUp") {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateActiveImage(currentIndex);
  }
});
