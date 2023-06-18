function speedDetector(speed){
    const speedLimit = 70;
    const demeritPoint = 5;
    const maxPointsGiven = 12;
    if(speed <= speedLimit){
        return "okay"
    }else {
        let excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(speed/demeritPoint);
        if(demeritPoints > maxPointsGiven){
            return "Cancel Licence!"
        }else{"points" + demeritPoints};
    }
}
const speed = 70//Enter your car speed
console.log(speedDetector(speed));