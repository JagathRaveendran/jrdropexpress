function addToCart() {
    var quantity = document.getElementById("quantity").value;
    alert("Added " + quantity + " item(s) to the cart!");
}

function buyNow() {
    var quantity = document.getElementById("quantity").value;
    alert("Redirecting to checkout for " + quantity + " item(s) purchase!");
}

function addToFavorites() {
    alert("Added to Favorites!");
}
function home(page) {
    // Redirect to the specified page
    window.location.href = page;
}