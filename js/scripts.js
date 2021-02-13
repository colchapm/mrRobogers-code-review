





// Business Logic

const userNumber = 15;
let outputArray = [];
const strNumber = userNumber.toString();

function beepBoop(userNumber) {
  for (let i = 0; i < strNumber.length; i ++) {
    outputArray.push(strNumber[i]);
  } if (outputArray.join().includes(1)) {
      outputArray = ["Beep!"];
  } else {
      outputArray = [];
      boopBoop(userNumber);
  }
}


function boopBoop(userNumber) {
  for (let i =0; i <= userNumber; i ++) {
    if (i === 1) {
      outputArray.push("Beep!");
    } else if (i === 2) {
      outputArray.push("Boop!");
    } else if (i === 3) {
      outputArray.push("Won't you be my neighbor?");
    } else { outputArray.push(i);
    }
    }
  }

beepBoop(userNumber);