let balance = 5000;


function updateScreen(message) {
    document.getElementById("screen").innerText = message;
}

function getAmount() {
    return parseFloat(document.getElementById("amount").value);
}

function checkBalance() {
    updateScreen(`Your balance is $${balance}`);
}

function deposit ()  {
    let amount = getAmount();
    if(amount > 0) {
        balance += amount;
      updateScreen("Deposited $" + amount + " | New balance: $" + balance);
    } else {
        updateScreen("Invalid deposit amount");
    }
    document.getElementById(amount).value = "";
}

function withdraw() {
    let amount = getAmount();
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateScreen("Withdrew $" + amount + " | New balance: $" + balance);
    }
    else {
        updateScreen("Invalid or insuffienct funds");
    }
    document.getElementById(amount).value = "";
}

function exitATM() {
    updateScreen("Thank you for using the atm machine ninja");
    document.getElementById("amount").disabled = true;
}






