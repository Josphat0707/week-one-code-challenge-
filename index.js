function studentsGrades(){
    marks = prompt("Enter your marks");//prompts someone to input their marks

    if(isNaN(marks)){//checks to ensure that the number entered is a valid number
        return "Not a number."
    }
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

console.log(studentsGrades());//Calling the function in order to get the grade from the keyed in marks

