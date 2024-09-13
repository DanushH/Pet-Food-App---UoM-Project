The web site is designed for a Pet Food Shop. It allows users to browse different pet products, each displayed in a card format. Users can add products to a shopping cart, which appears as a modal pop-up. The shopping cart modal dynamically updates with the product's name and price, and displays a total price for all items added. The footer provides links to external social media pages of the shop.

This design is responsive, clean, and uses Bootstrap to manage the layout and modal functionality for ease of use and aesthetics.

## index page

* The header displays the title of the page, "Pet Food Shop," with an animation.
* The main content features product cards for different pet products.
* Each product card has an "Add to Cart" button with associated product details (name and price) stored as attributes.
* When users click the "Add to Cart" button, the product is added to a shopping cart, and a modal window displays the cart items.
* The modal shows a list of products added to a table with dynamic rows.


## styles page

* Header has a sliding animation (`slideIn`) that makes the title appear with a smooth transition from left.
* Images in the product cards are standardized to a height of 200px, ensuring consistency.


## scripts page

* Shopping cart functionality is dynamically managed by the script.
* It initializes an empty array (`cart`) to store the products added by the user.
* When a user clicks on the "Add to Cart" button, the product details (name and price) are fetched using `data-*` attributes and stored in the cart array.
* The `updateCart()` function refreshes the cart modal by populating it with the latest cart items and updating the total price.
* The cart is displayed in a modal window, which can be shown or hidden using Bootstrap's modal API.
