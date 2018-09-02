var userPin = 1234; //Default user pin code
var pinInputCount = 0; //This variable records the number of times the pin code has been entered wrongly. Only affects the first page
var changePinInputCount = 0; //This variable records the number of times the pin code has been entered wrongly. Only affects the account page.
var accountBalance = 1500; //Current account balance.
var cardExtracted = true; //This variable records the current state of the card; i.e whether it is currently inside or outside the machine. By default its set to 'true' when the card is outside the machine.

function insertCard() {

  if (cardExtracted) { //If the value of cardExtracted = true, which it is, then execute this fucntion.

    cardExtracted = false; //Set the value of cardExtracted to false because the card has been put into the machine.

    //When the value of cardExtracted is set to 'false', all of the following takes place. When the value is set to 'true' the following code is reverted and any changes made are reverted immediately.

    document.getElementById('card-insert').style.display = "none";
    document.getElementById('submit-pin').style.display = "block";
    document.getElementById('cancel-sub').style.display = "block";
    document.getElementById('cancel-sub').style.left = "56%";
    document.getElementById('pin-input').style.display = "block";
    document.getElementById('pin-input').style.marginLeft = "314px";

  } else {

  }

}

function cancelSub() {

  cardExtracted = true;

  document.getElementById('card-insert').style.display = "block";
  document.getElementById('submit-pin').style.display = "none";
  document.getElementById('cancel-sub').style.display = "none";
  document.getElementById('cancel-sub').style.left = "0px";
  document.getElementById('pin-input').style.display = "none";
  document.getElementById('pin-input').style.marginLeft = "0px";

}

function enterPIN() {

  var pinField = document.getElementById('pin-input');

  if (pinField.value == userPin) {

    alert("correct");

    window.location.href = "account.html";

  } else {

    pinInputCount = pinInputCount + 1; //When the wrong pin code has been put in, this variable increases by increments of 1.
    console.log("PIN Input Count: " + pinInputCount);
    alert("Wrong PIN. Try again.");

    if (pinInputCount == 2) {

      alert("You have entered an incorrect PIN 2 times. The next time will be your last chance to enter a correct PIN.");

    } else if (pinInputCount == 3) { //When the value of this variable reaches 3, the user is greated with the following alert.

      alert("You have reached the maximum number if tries. Account is now locked, please contact your bank to unlock the account and request a new card.");

      window.location.reload();

    }

  }

}

function screenBalance() {
  alert("Your account balance is £" + accountBalance + ". £450 is available for withdrawal.");
}

// Function below needs further functionality to ensure user does not perform multiple withdrawals that add up to more than £450.

function withdrawCash() {

  var cashAmount = prompt("State how much you would like to withdraw.");

  cashAmount;

  if (cashAmount > 450) {

    alert("You cannot withdraw more than £450.");

    withdrawCash();

  } else if (cashAmount > accountBalance) {

    alert("This ammount exceeds the account balance.");

    withdrawCash();

  } else {

    accountBalance = accountBalance - cashAmount;

  }

}

// Function below has errors, needs correction

function changePin() {

  function checkPin() {

    prompt("Input your current PIN.");

  }

  function newPin() {

    prompt("Input your new PIN.")

  }

  checkPin();

  if (checkPin.value == userPin) {

    alert("Correct");

    newPin();

    userPin = newPin.value;

  } else {

    changePinInputCount++;

    alert("Incorrect PIN. Try again.");

    if (changePinInputCount === 2) {

      alert("You have entered an incorrect PIN 2 times. The next time will be your last chance to enter a correct PIN.");

    } else if (changePinInputCount === 3) {

      alert("You have reached the maximum limit of entries. Account is now locked, please contact your bank to unlock the account and request a new card.");

      window.location.href = "index.html";

    }

  }

}

function returnCard() {

  alert("Please take your card.");

  cardExtracted = true;

  window.location.href = "index.html"; //Takes user back to first page

}
