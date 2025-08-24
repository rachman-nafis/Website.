document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Hamburger Menu Logic
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Dummy Product Data (nantinya ini dari API)
    const products = [
        {
            name: "Produk Keren 1",
            price: "Rp 150.000",
            image: "images/product1.jpg"
        },
        {
            name: "Produk Keren 2",
            price: "Rp 250.000",
            image: "images/product2.jpg"
        },
        {
            name: "Produk Keren 3",
            price: "Rp 350.000",
            image: "images/product1.jpg"
        }
    ];

    const productGrid = document.querySelector('.product-grid');

    // Function to display products
    function displayProducts() {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Beli</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    displayProducts();
});
