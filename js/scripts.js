
// Business Logic

let outputArray =[];

function beepBoop(userNumber) {
  let supportArray = [];
  const strNumber = userNumber.toString();
  for (let i = 0; i < strNumber.length; i ++) {
    supportArray.push(strNumber[i]);
  } if (supportArray.join().includes(3)) {
    outputArray.push("Won't you be my neighbor?");
  } else if (supportArray.join().includes(2)) {
      outputArray.push("Boop!");
  } else if (supportArray.join().includes(1)) {
      outputArray.push("Beep!");
  } else {
      boopBoop(userNumber);
  }

  function boopBoop(userNumber) {
    for (let i =0; i <= userNumber; i ++) {
      if (i === 1) {
        outputArray.push("Beep!");
    } else if (i === 2) {
        outputArray.push("Boop!");
    } else if (i === 3) {
        outputArray.push("Won't you be my neighbor?");
    } else {
        outputArray.push(i);
      }
    }
    return outputArray
  }
  return outputArray
}


// User interface logic

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const userNumber = parseInt($("input#userInput").val());
    let result = beepBoop(userNumber)

    $("#result").text(result.join(", "));

  });
});

