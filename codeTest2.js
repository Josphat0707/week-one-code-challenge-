function speedDetector(){

    speed = parseInt(prompt("Enter your speed"));

    const speedLimit = 70;// sets the speed limit to 70 using the const keyword since its constant
    const demeritPoint = 5;//This is the speed per kilometers per hour past the speed limit from which demerit points will be awarded 

    
    if(speed <= speedLimit){
        return "okay"
    }else{
        let demeritPoints = Math.floor((speed-speedLimit)/demeritPoint);//here we are calculating to find out how many points will be awarded if the driver is overspeeding

        if(demeritPoints == 1){//sets the condition for every point and the message to be shown.
            return "Points: 1"
        }else if(demeritPoints == 2){
            return "Points: 2"
        }else if(demeritPoints == 3){
            return "Points: 3"
        }else if(demeritPoints == 4){
            return "Points: 4"
        }else if(demeritPoints == 5){
            return "Points: 5"
        }else if(demeritPoints == 6){
            return "Points: 6"
        }else if(demeritPoints == 7){
            return "Points: 7"
        }else if(demeritPoints == 8){
            return "Points: 8"
        }else if(demeritPoints == 9){
            return "Points: 9"
        }else if(demeritPoints == 10){
            return "Points: 10"
        }else if(demeritPoints == 11){
            return "Points: 11"
        }else if(demeritPoints == 12){
            return "You have reached the maximum number of points: 12!"
        }else{
            return "Licence Is Suspended!"
        }
    }
}

console.log(speedDetector());//calls the function so as to generate output