function piccolo(arr){
    let parkingLot = [];
    for (const elem of arr){
        let direction = elem.split(", ")[0];
        let carNumber = elem.split(", ")[1];
        if (direction === "IN"){
            if(!parkingLot.includes(carNumber)){
                parkingLot.push(carNumber)
            }
        }else if ( direction === "OUT"){
            if(parkingLot.includes(carNumber)){
                let idx = parkingLot.indexOf(carNumber);
                parkingLot.splice(idx, 1);
            }
        }
    }
    if (parkingLot.length === 0){
        console.log("Parking Lot is Empty");
    }else{
        let sortedParkingLot = parkingLot.sort((a,b) => a.localeCompare(b));
        for (const car of sortedParkingLot) {
            console.log(car);
        }
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)