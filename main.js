function myNav(){
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%";
            bar.src = "pic/menu.png"
        }else{
            nav.style.left = "0%";
            bar.src = "pic/x.png"
        }
    }
}
myNav();

window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}

// Sample JavaScript code to handle cart actions
var isCartOpen = false;

function toggleCart() {
    event.preventDefault();

    isCartOpen = !isCartOpen;

    // You can implement your own logic to show/hide the cart or perform other actions
    if (isCartOpen) {
        // Show the cart or perform other actions when the cart is opened
        console.log('Cart opened');
    } else {
        // Hide the cart or perform other actions when the cart is closed
        console.log('Cart closed');
    }
}

$(document).ready(function () {
    // Initialize an empty cart object
    var cart = {};

    // Function to handle adding items to the cart
    $('.add-to-cart').on('click', function (event) {
        event.preventDefault();

        var userId = $(this).closest('.shop1').data('user');
        var originalPriceString = $(this).closest('.shop1').find('article').text().trim().replace('₱', '');
        var originalPrice = parseFloat(originalPriceString);

        // Add the item to the cart for the specific user
        if (!cart[userId]) {
            cart[userId] = [];
        }

        cart[userId].push({
            originalPrice: originalPrice,
            // Add other item details as needed
        });

        // Update the total price in the cart icon
        updateTotalPrice(true);
    });

    // Function to update the total price dynamically
    function updateTotalPrice() {
        var totalPrice = 0;

        // Loop through each user in the cart
        Object.keys(cart).forEach(function (userId) {
            // Loop through each item for the specific user
            cart[userId].forEach(function (item) {
                totalPrice += item.originalPrice;
            });
        });

        // Update the total price in the cart icon
        $('.cart-total-price').text('₱' + totalPrice.toFixed(2));

        $('.cart-total-price').toggleClass('clicked', clicked);
        $('.cart-icon').toggleClass('clicked', clicked);
    }
});

document.querySelector('.cart-icon').addEventListener('click', function(event) {
    toggleCart(event);
});

// Function to handle cart actions
var isCartOpen = false;

function toggleCart() {
    event.preventDefault();

    isCartOpen = !isCartOpen;

    // You can implement your own logic to show/hide the cart or perform other actions
    if (isCartOpen) {
        // Show the cart or perform other actions when the cart is opened
        console.log('Cart opened');
    } else {
        // Hide the cart or perform other actions when the cart is closed
        console.log('Cart closed');
    }
}

$(document).ready(function () {
    // Initialize an empty cart object
    var cart = {};

    // Function to handle adding items to the cart
    $('.add-to-cart').on('click', function (event) {
        event.preventDefault();

        var userId = $(this).closest('.shop1').data('user');
        var originalPriceString = $(this).closest('.shop1').find('article').text().trim().replace('₱', '');
        var originalPrice = parseFloat(originalPriceString);

        // Add the item to the cart for the specific user
        if (!cart[userId]) {
            cart[userId] = [];
        }

        cart[userId].push({
            originalPrice: originalPrice,
            // Add other item details as needed
        });

        // Update the total price in the cart icon
        updateTotalPrice();
    });

    // Function to update the total price dynamically
    function updateTotalPrice() {
        var totalPrice = 0;

        // Loop through each user in the cart
        Object.keys(cart).forEach(function (userId) {
            // Loop through each item for the specific user
            cart[userId].forEach(function (item) {
                totalPrice += item.originalPrice;
            });
        });

        // Update the total price in the cart icon
        $('.cart-total-price').text('₱' + totalPrice.toFixed(2));
    }

    $('.cart-icon').on('click', function (event) {
        toggleCart();
    });
});

