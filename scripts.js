document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
            cartModal.show();
        });
    });

    function updateCart() {
        cartItemsElement.innerHTML = "";
        let total = 0;
        cart.forEach((item) => {
            const tableRow = document.createElement("tr");
            tableRow.className =
                "list-group-item d-flex justify-content-between align-items-center";
            tableRow.innerHTML = `${item.name} <span>LKR ${item.price.toFixed(
                2
            )}</span>`;
            cartItemsElement.appendChild(tableRow);
            total += item.price;
        });
        cartTotalElement.textContent = total.toFixed(2);
    }
});
