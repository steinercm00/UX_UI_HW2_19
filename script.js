// Get the button element
var popupBtn = document.getElementById("popup-btn");

// Get the popup form element
var popupForm = document.getElementById("popup-form");

// Add event listener to the button
popupBtn.addEventListener("click", function() {
    // Toggle the display of the popup form
    if (popupForm.style.display === "none") {
        popupForm.style.display = "block";
    } else {
        popupForm.style.display = "none";
    }
});
