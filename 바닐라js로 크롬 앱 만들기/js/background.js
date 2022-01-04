const images = ["0.png", "1.jfif", "2.jfif", "3.jfif", "4.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);