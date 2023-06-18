function speedDetector(speed){
    const speedLimit = 70;//since the speed limit is a solid 70 i had to use the const keyword.
    const demeritPoint = 5;//a demerit point is awarded to a driver after going 5kilometers per hour past the speed limit.
    const maxPointsGiven = 12;//Maximum number of demerit points awarded is 12. Past that, you drivers license is cancelled.
    if(speed <= speedLimit){
        return "okay"// If one doesn't cross the speed limit, it returns okay.
    }else {
        let excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(speed/demeritPoint);
        if(demeritPoints > maxPointsGiven){//condition checks if one has crossed the maximum number of points given.
            return "Cancel Licence!"
        }else{"points" + demeritPoints};//if one hasn't then it adds to the demerit points one already has.
    }
}
const speed = 70//Enter your car speed.
console.log(speedDetector(speed));//calls the function so as to run the code.