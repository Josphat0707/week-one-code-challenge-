function studentsGrades(marks){
    //marks = parseFloat(marks); (This bit of code prompts a user to input student's marks in the browser. I used this as an alternative because the code couldn.t run on vs code so i ran it on the browser as an alternative. But since the code can now run on vs code, i have commented this bit of code)

    // if(isNaN(marks)){
    //     return "Not a number."
    // }(Since runing the code in vs code had failed, i used the commented if function so as to ensure only numbers can be keyed in. But i have commented it since i can now run the code via vs code)

    if(marks < 0 || marks > 100){
        return "Invalid marks";
    }//This if function ensures that the output will be provided so long as the number is between 0 and 100. if the number is above 100 or less than 0 you get "invalid marks"

    let grade;//Conditions are set for different grades and their value ratio
    if(marks >= 79){
        grade = "A";
    }else if(marks >= 60 && marks < 79){
        grade = "B";
    }else if(marks >= 49 && marks <= 59){
        grade = "C";
    }else if(marks >= 40 && marks <49){
        grade = "D";
    }else{
        grade = "E";
    }
    
    return grade;
}
const marks = 101 //eEnter student's marks
console.log(studentsGrades(marks));//Calling the function in order to get the grade from the keyed in marks

