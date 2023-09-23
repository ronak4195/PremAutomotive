const x = document.getElementsByClassName("menu-sidebar")[0];
const y = document.getElementsByClassName("cart-sidebar")[0];
const z = document.getElementsByClassName("topcart")[0];
const a = document.getElementsByClassName("layer")[0];
const b = document.getElementsByClassName("layer")[1];
const c = document.getElementsByClassName("layer")[2];

function myFunction() {
  if (x.style.display === "block") {
    x.style.display = "none";
    c.classList.remove("activel");
    b.classList.remove("activel");
    a.classList.remove("activel");
  } else {
    x.style.display = "block";
    c.classList.add("activel");
    b.classList.add("activel");
    a.classList.add("activel");
    y.style.display = "none";
    z.classList.remove("active");
  }
}

function cartclose() {
  y.style.display = "none";
  z.classList.remove("active");
}
function cartopen() {
  y.style.display = "block";
  x.style.display = "none";
  c.classList.remove("activel");
  b.classList.remove("activel");
  a.classList.remove("activel");
  z.classList.add("active");
}


const productButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const checkoutButton = document.querySelector(".checkout");
const noi = document.querySelector(".noi");

let cart = [];
let total = 0;

productButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const productName = document.querySelectorAll(".pro span")[index].textContent;
    const productPrice = parseFloat(document.querySelectorAll(".pro h4")[index].textContent);
    const product = {
      name: productName,
      price: productPrice,
    };
    cart.push(product);
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("mylist");
    li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;

    cartItems.appendChild(li);
    total += item.price;
  });
  noi.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

checkoutButton.addEventListener("click", () => {
  alert(`Total: $${total.toFixed(2)} - Thank you for your purchase!`);
  cart = [];
  updateCart();
});

function clearcart() {
  cart = [];
  updateCart();
}