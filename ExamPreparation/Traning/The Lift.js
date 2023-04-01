function sort(input){
    const maxPeople = 4;
    let peopleCount = Number(input.shift());
    let liftState = input.shift().split(' ').map(x => Number(x));
    for (let i = 0; i < liftState.length; i++) {
        let availableSpace = maxPeople - liftState[i];
        if (peopleCount - availableSpace >= 0){
            peopleCount -= availableSpace;
            liftState[i] += availableSpace;
        } else {
            liftState[i] += peopleCount;
            peopleCount = 0;
            break;
        }
    }
    let isCabinFull = true;
    liftState.forEach(cabin => {
        if (cabin < maxPeople){
            isCabinFull = false;
        }
    });
    if (peopleCount === 0 && !isCabinFull){
        console.log('The lift has empty spots!');
    }
    if (peopleCount > 0 && isCabinFull){
        console.log(`There isn't enough space! ${peopleCount} people in a queue!`);

    }
    
    console.log(liftState.join(' '));
}
sort([
    "15",
    "0 0 0 0 0"
   ]
   )