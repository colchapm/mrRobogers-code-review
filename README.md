# Mr Robogers Neighborhood

### Epicodus Independent Code Review - Arrays and Looping

### By Collin Chapman

## Technologies Used

* Git
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Description

This webpage takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

* Numbers that contain a 1: all digits are replaced with "Beep!"
* Numbers that contain a 2: all digits are replaced with "Boop!"
* Numbers that contain a 3: all digits are replaced with "Won't you be my neighbor?"

## Setup/Installation Requirements

  1. Clone this repository to your desktop
  2. Navigate to the top level of the directory
  3. Open index.html in your browser 

## Tests

Describe: beepBoop();

**Test 1** Test: "The program should replace the number 1 with "Beep!"".

Expect(beepBoop(1)).toEqual(0, "Beep!")

**Test 2** Test: "The program should replace the number 2 with "Boop!"".

Expect(beepBoop(2)).toEqual(0, "Beep!", "Boop!")

**Test 3** Test: "The program should replace the number 3 with "Won't you be my neighbor?"".

Expect(beepBoop(3)).toEqual(0, "Beep!", "Boop!", "Won't you be my neighbor?")

**Test 4** Test: "The program should replace the number 5 with 5".

Expect(beepBoop(5)).toEqual(0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5)

**Test 5** Test: "The program should replace all digits in a number that contains 1 with "Beep!"".

Expect(beepBoop(10)).toEqual(0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!")

**Test 6** Test: "If the user inputs a number that contains a 2, all digits are replaced with "Boop!"". This rule will also return "Boop!" if the user inputs a number that contains both a 1 and a 2.

Expect(beepBoop(21)).toEqual("Boop!")

**Test 7** Test: "If the user inputs a number that contains a 3, all digits are replaced with "Won't you be my neighbor?". This rule will also return "Won't you be my neighbor?" if the user inputs a number that contains a 3 along with a 1 or a 2.

Expect(beepBoop(31)).toEqual("Won't you be my neighbor?")

## Known Bugs

No known bugs at this time

## Link

https://colchapm.github.io/mrRobogers-code-review/

## License

Copyright (c) 2021 Collin Chapman

This software is licensed under the MIT license

## Contact Information

cchap14@gmail.com