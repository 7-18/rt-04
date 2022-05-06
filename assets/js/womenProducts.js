import products from "./data.json" assert { type: "json" };
const containerProducts = document.querySelector("#products");

const getMenProducts = () => {
  const containerElement = document.createElement("article");
  containerElement.classList.add("container-men");
  products
    .filter((product) => product.category === "women")
    .map((product) => {
      return (containerElement.innerHTML += `<div class="product" onclick="window.location.href='product.html';">
      <img
        src="${product.image}"
        alt="${product.title}"
      />
      <div class="description">
        <span>${product.category === "women" ? "mujeres" : ""}</span>
        <h5>${product.title}</h5>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4>US$${product.price}</h4>
      </div>
      <a href="#" class="cart"><i class="fas fa-shopping-cart"></i></a>
    </div>`);
    });
  containerProducts.appendChild(containerElement);
};
getMenProducts();
