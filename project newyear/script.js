const NUMBER_OF_SNOWFLAKES = 200;
const MAX_SNOWFLAKE_SIZE = 4;
const MAX_SNOWFLAKE_SPEED = 0;
const SNOWFLAKE_COLOUR = "#ddd";
const snowflakes = [];

const canvas = document.createElement("canvas");
canvas.style.position = "absolute";
canvas.style.pointerEvents = "none";
canvas.style.top = "0px";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const createSnowflake = () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
  color: SNOWFLAKE_COLOUR,
  speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
  sway: Math.random() - 0.5, // next
});

const drawSnowflake = (snowflake) => {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  ctx.fillStyle = snowflake.color;
  ctx.fill();
  ctx.closePath();
};

const updateSnowflake = (snowflake) => {
  snowflake.y += snowflake.speed;
  snowflake.x += snowflake.sway; // next
  if (snowflake.y > canvas.height) {
    Object.assign(snowflake, createSnowflake());
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    updateSnowflake(snowflake);
    drawSnowflake(snowflake);
  });

  requestAnimationFrame(animate);
};

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
  snowflakes.push(createSnowflake());
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("scroll", () => {
  canvas.style.top = `${window.scrollY}px`;
});

animate();


const cardsContainer = document.getElementById("cards-container");

const data = [
  {
    image: "https://red-box.kz/image/cache/catalog/data/39-600x600.jpg",
    name: "box",
    price: "25$",
  },
  {
    image: "https://red-box.kz/image/cache/catalog/6%281%29-600x600.jpg",
    name: "vine and snacks",
    price: "50$",
  },
  {
    image:
      "https://lazy-box.ru/upload/resize_cache/iblock/872/600_600_040cd750bba9870f18aada2478b24840a/872a6bb575fb88582131e2df2023f6ef.jpg",
    name: "box of sweets",
    price: "30$",
  },
  {
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/pdb/pa2/13442974.jpg?format=gallery-medium",
    name: "box-warm",
    price: "40$",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDS5XGE9zto5XIQ0KcTnd_wFDCU0YXbvjjdQ&s",
    name: "cutie-box",
    price: "55$",
  },
  {
    image: "https://images.satu.kz/171247971_w600_h600_171247971.jpg",
    name: "great-box",
    price: "85$",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTts8a5_qm2cLM-pX9WR-oJWSl0aIvyG0HXnQ&s",
    name: "candy-box",
    price: "35$",
  },
  {
    image:
      "https://lazy-box.ru/upload/resize_cache/iblock/2aa/600_600_040cd750bba9870f18aada2478b24840a/2aa1f1a264394906edd2c9043f5d1b5b.JPG",
    name: "lovely-box",
    price: "50$",
  },
];


data.forEach((item) => {
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardButton = document.createElement("button");

  cardImage.src = item.image;
  cardButton.textContent = `${item.name} - ${item.price}`;

  card.appendChild(cardImage);
  card.appendChild(cardButton);

  card.classList.add("card");

  cardsContainer.appendChild(card);
});