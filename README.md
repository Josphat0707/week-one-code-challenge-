# WEEK ONE CODE CHALLENGE
## DESCRIPTION
There are three tests meant to be done for this week's code challenge.The first test entails writing a program that takes in a student's marks as an input and in return it produces a grade based on the grading system which is set as the condition.(index.js)

The second test entailswriting a program that requires a person to key in their driving speed. The program checks whether the speed keyed in is per the speed limit. If the speed is per the speed limit, the program will return "okay". If the speed keyed in is greater than the speed limit, the program assigns you a demerit point and if ones' speed crosses the set 12 demerit points, the program returns "Cancelled Licemce!"(codeTest2.js)

The third test entails calculating someone's net salary. The program will ask for your basic salary and benefits as inputs, run the keyed in values against some calculations and conditions and in the end provide an output which will be your net salary.(codeTest3.js)

## PROJECT SETUP
I will be going through the challenges that i have succeded.

#### index.js
in this challenge, we were supposed to write a program that provides grades to students based on their marks.
I started by creating a function named `studentsGrades()`.I went on to write ( marks = prompt("Enter your marks");)so that when one goes to the console and calls on the function`console.log(studentsGrades())`, one can be prompted to key in their distinctive marks. I then went on to write an if statement that checks to ensure that the values being keyed in as marks are between 0 and 100 as per the instructions. If the values keyed in are above 100 or less than 0 the program is set to return "Invalid marks".
After ensuring that the values keyed in are values within the expected range, i went on to write assign grade as a variable which is then followed by an if..else if statement that sets the condition for which grade will be assigned to values within what range. For example `(if(marks >= 79)
        grade = "A";)` , 
this statement states that for a grade to be A, the marks value should range from 79 and above. after setting up each condition. i went ahead and wrote "return grade ;" so that after the value has been passed aound and has met a specific condition and a grade has been assigned to it, we need to get that grade. At the end of the code,At the end i went ahead and wrote on how one can call the function in the console. That is ``console.log(studentsGrades())``.

#### codeTest2.js
in this challenge, we were supposed to write a program that would key in someone's speed limit, then the program would output whether the speed is okay.if not it would add a demerit point and if it the added demerit points have crossed the maximum number of demerit points, then it would output"Cancelled Licence!". 
I started by creating a function called `speedDetector()` which takes in speed. I then set the constant variables using the const keyword as stated."const speedLimit = 70;" sets the speed limit to 70, "const demeritPoint = 5;" sets demeritpoints to be awarded if one goes up more than 5 km per hour of the set speed limit, "const maxPointsGiven = 12;" sets the maximum number of points one can get to 12.
i then wrote an if statement that reurns "okay" if the speed keyedd in is less than or equal to the speed limit. I then went ahead and set a variable named demeritPoints that contains a method Math.floor() that return the number of points awarded for every 5km/hr past the speed limit.
I then used the if..else if statement to set up conditions and outputs for every point that is acquired from the above step.
The last steps are where one keys in his/her cars' speed and calls the function so as to check the final output of the program.

 #### codeTest3.js
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
