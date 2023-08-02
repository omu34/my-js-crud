// Data
let products = [];

// Elements
const productForm = document.getElementById('productForm');
const nameInput = document.getElementById('nameInput');
const priceInput = document.getElementById('priceInput');
const imageInput = document.getElementById('imageInput');
const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];

// Event Listeners
productForm.addEventListener('submit', addProduct);

// Functions
function addProduct(event) {
  event.preventDefault();

  const name = nameInput.value;
  const price = parseFloat(priceInput.value);
  const image = imageInput.files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const product = { name, price, image: reader.result };
    products.push(product);

    renderProduct(product);
    clearForm();
  };
  reader.readAsDataURL(image);
}

function renderProduct(product) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td><img src="${product.image}" alt="Product Image" style="max-width: 100px; max-height: 100px;"></td>
    <td>
      <button onclick="editProduct(${products.indexOf(product)})">Edit</button>
      <button onclick="deleteProduct(${products.indexOf(product)})">Delete</button>
    </td>
  `;

  productTable.appendChild(row);
}

function clearForm() {
  nameInput.value = '';
  priceInput.value = '';
  imageInput.value = '';
}

function editProduct(index) {
  const product = products[index];

  const newName = prompt('Enter new name:', product.name);
  const newPrice = parseFloat(prompt('Enter new price:', product.price));

  if (newName && !isNaN(newPrice)) {
    product.name = newName;
    product.price = newPrice;

    const row = productTable.getElementsByTagName('tr')[index];
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td><img src="${product.image}" alt="Product Image" style="max-width: 100px; max-height: 100px;"></td>
      <td>
        <button onclick="editProduct(${index})">Edit</button>
        <button onclick="deleteProduct(${index})">Delete</button>
      </td>
    `;
  }
}

function deleteProduct(index) {
  products.splice(index, 1);

  productTable.deleteRow(index);
}
