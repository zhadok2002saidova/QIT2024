document.addEventListener("DOMContentLoaded", function () {
  const catalog = document.getElementById("catalog");

  const products = [
    { name: "Chanel No. 5", price: "35,000₸", image: "chanel.jpg" },
    { name: "Dior Sauvage", price: "40,000₸", image: "dior.jpg" },
    { name: "Gucci Bloom", price: "38,000₸", image: "gucci.jpg" },
  ];

  function renderProducts() {
    catalog.innerHTML = "";
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            `;
      catalog.appendChild(productCard);
    });
  }

  renderProducts();
});


document.addEventListener("DOMContentLoaded", function () {
  const catalog = document.getElementById("catalog");

  const products = [
    { name: "Chanel No. 5", price: "35,000₸", image: "chanel.jpg" },
    { name: "Dior Sauvage", price: "40,000₸", image: "dior.jpg" },
    { name: "Gucci Bloom", price: "38,000₸", image: "gucci.jpg" },
    { name: "Versace Eros", price: "42,000₸", image: "versace.jpg" },
    { name: "Armani Code", price: "39,000₸", image: "armani.jpg" },
    { name: "YSL Black Opium", price: "45,000₸", image: "ysl.jpg" },
    { name: "Bvlgari Man", price: "41,000₸", image: "bvlgari.jpg" },
    { name: "Tom Ford Oud Wood", price: "50,000₸", image: "tomford.jpg" },
    { name: "Creed Aventus", price: "55,000₸", image: "creed.jpg" },
    {
      name: "Jo Malone Wood Sage & Sea Salt",
      price: "47,000₸",
      image: "jo_malone.jpg",
    },
  ];

  function renderProducts() {
    const productList = document.createElement("div");
    productList.classList.add("product-list");
    catalog.innerHTML = "";

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            `;
      productList.appendChild(productCard);
    });

    catalog.appendChild(productList);
  }

  renderProducts();
});
