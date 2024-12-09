const Eshop = {
    name: 'sulpak',
    phoneNumber: '8 707 865 7076',
        products: [ 
        {
            productName: "Ноутбук",
            category: "Электроника",
            price: 300000, 
            stock: 5,
        },
        {
            productName: "Смартфон",
            category: "Электроника",
            price: 150000,
            stock: 15,
        },
        {
            productName: "Холодильник",
            category: "Бытовая техника",
            price: 90000,
            stock: 6
        },
        {
            productName: "Пылесос",
            category: "Бытовая техника",
            price: 40000,
            stock: 20
        },
        {
            productName: "Стиральная машина",
            category: "Бытовая техника",
            price: 100000,
            stock: 30
        }
    ]
};


console.log(Eshop);

function listProductNames(Eshop) {
  const productNames = Eshop.products.map((product) => product.productName); 
  alert("products:\n" + productNames.join("\n")); 
}

const shop = {
    name: "Sulpak",
    phoneNumber: "+77078657076",
    products: [
        { productName: "Ноутбук", category: "Электроника", price: 300000, stock: 5 },
        { productName: "Смартфон", category: "Электроника", price: 150000, stock: 15 },
        { productName: "Холодильник", category: "Бытовая техника", price: 90000, stock: 6 },
        { productName: "Пылесос", category: "Бытовая техника", price: 40000, stock: 20 },
        { productName: "Стиральная машина", category: "Бытовая техника ", price: 100000, stock: 30 }
    ]
};

listProductNames(shop);


//5 tapsyrma
let products = [];
    
    function addProduct() {
        let name = prompt("Өнімнің атауын енгізіңіз:");
        let price = parseFloat(prompt("Өнімнің бағасын енгізіңіз (сандармен):"));
        let quantity = parseInt(prompt("Өнімнің санын енгізіңіз (сандармен):"));
        let category = prompt("Өнімнің категориясын енгізіңіз:");
        
        if (!name  (price)  (quantity) || !category) {
            alert("Барлық деректерді дұрыс енгізіңіз!");
            return;
        }
        
        let product = {
            name: name,
            price: price,
            quantity: quantity,
            category: category
        };
        
        products.push(product);
        
        alert("Өнім сәтті қосылды!");
        console.log("Қазіргі өнімдер:", products);
    }

addProduct();