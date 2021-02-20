
// Business Logic

function beepBoop(userNumber) {
  let outputArray = [];
  for (let i = 0; i <= userNumber; i++) {
    if (i === 1) {
      outputArray.push("Beep!");
    } else if (i === 2) {
      outputArray.push("Boop!");
    } else if (i === 3) {
      outputArray.push("Won't you be my neighbor?");
  } else if (i.toString().includes(3)) {
      outputArray.push("Won't you be my neighbor?");
  } else if (i.toString().includes(2)) {
      outputArray.push("Boop!");
  } else if (i.toString().includes(1)) {
      outputArray.push("Beep!");
  } else {
      outputArray.push(i);
    } 
  } return outputArray
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