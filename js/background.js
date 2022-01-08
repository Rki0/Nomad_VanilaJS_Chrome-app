const images = ["0.png", "1.jfif", "2.jfif", "3.jfif", "4.png"];

const radImg = images[Math.floor(Math.random()*images.length)];

const thisImg = document.createElement("img");
thisImg.id = "back1"

thisImg.src = `images/${radImg}`;

document.body.appendChild(thisImg);