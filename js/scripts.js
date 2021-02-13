





// Business Logic

const userNumber = 5
const outputArray = [];

function beepBoop(userNumber) {
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

beepBoop(userNumber)