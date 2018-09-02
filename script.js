var userPin = 1234;
var pinInputCount = 0;
var changePinInputCount = 0;
var accountBalance = 1500;
var cardExtracted = true;

function insertCard() {

  if (cardExtracted) {

    cardExtracted = false;

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

    pinInputCount = pinInputCount + 1;
    console.log("PIN Input Count: " + pinInputCount);
    alert("Wrong PIN. Try again.");

    if (pinInputCount == 2) {

      alert("You have entered an incorrect PIN 2 times. The next time will be your last chance to enter a correct PIN.");

    } else if (pinInputCount == 3) {

      alert("You have reached the maximum number if tries. Account is now locked, please contact your bank to unlock the account and request a new card.");

      window.location.reload();

    }

  }

}

function screenBalance() {
  alert("Your account balance is £" + accountBalance + ". £450 is available for withdrawal.");
}

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

  window.location.href = "index.html";

}
