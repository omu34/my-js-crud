// Data (Assuming products data is available)
const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 30, image: 'product3.jpg' },
    // Add more products as needed
  ];
  
  // Get product list container element
  const productList = document.getElementById('productList');
  
  // Function to render product cards
  function renderProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product');
  
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    card.appendChild(image);
  
    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = product.name;
    card.appendChild(name);
  
    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = `$${product.price}`;
    card.appendChild(price);
  
    productList.appendChild(card);
  }
  
  // Render product cards
  products.forEach(renderProductCard);
  