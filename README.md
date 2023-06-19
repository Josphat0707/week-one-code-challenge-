# WEEK ONE CODE CHALLENGE
## DESCRIPTION
There are three tests meant to be done for this week's code challenge.The first test entails writing a program that takes in a student's marks as an input and in return it produces a grade based on the grading system which is set as the condition.(index.js)

The second test entailswriting a program that requires a person to key in their driving speed. The program checks whether the speed keyed in is per the speed limit. If the speed is per the speed limit, the program will return "okay". If the speed keyed in is greater than the speed limit, the program assigns you a demerit point and if ones' speed crosses the set 12 demerit points, the program returns "Cancelled Licemce!"(codeTest2.js)

The third test entails calculating someone's net salary. The program will ask for your basic salary and benefits as inputs, run the keyed in values against some calculations and conditions and in the end provide an output which will be your net salary.(codeTest3.js)

## PROJECT SETUP
I will be going through the challenges that i have succeded.

#### index.html
in this challenge, we were supposed to write a program that provides grades to students based on their marks.
I started by creating the javascript program by creating a function named`studentsGrades()`, followed by an if statement that ensures that the values keyed in are numbers and numbers only. Ithen wrote another if statement to set the range for which numbers can be keyed in. For my case the if statement states that only numbers between 0 and 100 can be keyed in. Any other number wont be taken in instead an "invalid marks" statement will appear in an alert box. I went ahead and set the conditions for which grades will be assigned to what range of numbers.
I then created a html file since i am running the program as a user and not a developer. I created a label file and assigned it a `studentGrade` variable followerd with text that states"Enter your marks". its followed by an input tag that ensures the values we enter are numbers. It's followed by a button that once clicked will run the keyed in marks and produce an output.
in the javascript code i had to assign the studentGrade variable some values and i also had to assign marks some values in orfer for the code to run smoothly thus the following lines of code  "const studentGrade = document.getElementById("studentGrade");
                                                             const marks = parseInt(studentGrade.value);"

#### codeTest2.html
in this challenge, we were supposed to write a program that would key in someone's speed limit, then the program would output whether the speed is okay.if not it would add a demerit point and if it the added demerit points have crossed the maximum number of demerit points, then it would output"Cancelled Licence!". 
In terms of placing the html document inorder for the code to run on the browser rather than the console, i followed the steps in `index.html`.
i then wrote down a javascript function that takes in a users' car speed and runs it through an if statement to see if its per the speed limit. If it is then the output will be okay. If not, the speed entered is subtracted from the speed limit and divided by the demerit point which is 5. the value acquired is run through an if statement so as to see what point will be given as an output. if the points are past 12 demeritPoints, the users licence is suspended.

 #### codeTest3.html
 i havent been able to complete test number 3 beacause i couldnt understand the question
 
## LICENSE & AUTHOR
Copyright (c) [2023] [MWANGI JOSPHAT IRURA]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
