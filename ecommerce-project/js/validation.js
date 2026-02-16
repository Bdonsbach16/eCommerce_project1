// LOGIN FORM
function validateLogin() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
        alert("All login fields are required.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    alert("Login successful (test only)");
    return false;
}

// REGISTER FORM
function validateRegister() {
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("All fields are required.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    alert("Registration successful (test only)");
    return false;
}

// CHECKOUT FORM
function validateCheckout() {
    let card = document.getElementById("cardNumber").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    if (card.length !== 16 || isNaN(card) || cvv.length !== 3 || isNaN(cvv)) {
        alert("Enter a valid card number and CVV.");
        return false;
    }

    alert("Order placed (test only)");
    return false;
}
