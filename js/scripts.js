
// Business Logic


function beepBoop(userNumber) {
  let outputArray = [];
  const strNumber = userNumber.toString();
  for (let i = 0; i < strNumber.length; i ++) {
    outputArray.push(strNumber[i]);
  } if (outputArray.join().includes(3)) {
    outputArray = ["Won't you be my neighbor?"];
  } else if (outputArray.join().includes(2)) {
      outputArray = ["Boop!"];
  } else if (outputArray.join().includes(1)) {
      outputArray = ["Beep!"];
  } else {
      outputArray = [];
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

    $("#result").text(result.join(", "))
  });
});

