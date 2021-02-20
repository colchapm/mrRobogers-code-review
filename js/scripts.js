
// Business Logic

function beepBoop(userNumber, userName) {
  let outputArray = [];
  for (let i = 0; i <= userNumber; i++) {
    if (i === 1) {
      outputArray.push("Beep!");
    } else if (i === 2) {
      outputArray.push("Boop!");
    } else if (i === 3) {
      outputArray.push("Won't you be my neighbor, " + userName + "?");
  } else if (i.toString().includes(3)) {
      outputArray.push("Won't you be my neighbor, " + userName + "?");
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
  $("#name-form").submit(function(event) {
    event.preventDefault();
    const userName = $("input#userName").val();
    $("#number-form").show();
    $("#name-form").hide();

  $("#number-form").submit(function(event) {
    event.preventDefault();
    const userNumber = parseInt($("input#userInput").val());
    const userName = "Collin";
    let result = beepBoop(userNumber, userName)

    $("#result").text(result.join(", "));

  });
});
});