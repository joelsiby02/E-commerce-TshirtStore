// frontend.js

document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/api/tshirts')
    .then(response => response.json())
    .then(data => {
      // Clear previous content
      const tShirtContainer = document.getElementById('tShirtContainer');
      tShirtContainer.innerHTML = '';

      // Render t-shirts data in your frontend UI
      data.forEach(tShirt => {
        const tShirtElement = document.createElement('div');
        tShirtElement.classList.add('t-shirt');

        // Create elements to display t-shirt information
        const brandElement = document.createElement('h3');
        brandElement.textContent = `Brand: ${tShirt.brand}`;

        const colorElement = document.createElement('p');
        colorElement.textContent = `Color: ${tShirt.color}`;

        const sizeElement = document.createElement('p');
        sizeElement.textContent = `Size: ${tShirt.size}`;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${tShirt.price}`;

        const stockElement = document.createElement('p');
        stockElement.textContent = `Stock: ${tShirt.stock_quantity}`;

        // Append elements to t-shirt container
        tShirtElement.appendChild(brandElement);
        tShirtElement.appendChild(colorElement);
        tShirtElement.appendChild(sizeElement);
        tShirtElement.appendChild(priceElement);
        tShirtElement.appendChild(stockElement);

        // Append t-shirt element to container
        tShirtContainer.appendChild(tShirtElement);
      });
    })
    .catch(error => console.error('Error fetching t-shirts:', error));
});
