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

**Test 1** Test: "If the user inputs the number 1, it is replaced with "Beep!"".
Expect(beepBoop(1)).toEqual("Beep!")

**Test 2** Test: "If the user inputs the number 2, it is replaced with "Boop!"".
Expect(beepBoop(2)).toEqual("Boop!")

**Test 3** Test: "If the user inputs the number 3, it is replaced with "Won't you be my neighbor?"".
Expect(beepBoop(3)).toEqual("Won't you be my neighbor?")

**Test 4** Test: "If the user inputs the number 5, it should be replaced with a list of values of 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5
Expect(beepBoop(5)).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5])

**Test 5** Test: "If the user inputs a number that contains a 1, all digits are replaced with "Beep!"".
Expect(beepBoop(15)).toEqual("Beep!")

## Known Bugs

No known bugs at this time

## Link



## License

Copyright (c) 2021 Collin Chapman

This software is licensed under the MIT license

## Contact Information

cchap14@gmail.com