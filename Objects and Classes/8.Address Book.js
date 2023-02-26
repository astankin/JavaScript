function solve(arr){
    let addressBook = {};
    for (const elem of arr) {
        let name = elem.split(":")[0];
        let address = elem.split(":")[1];
        addressBook[name] = address;
    }
    const sortedAddressBook = Object.keys(addressBook).sort().reduce(
        (obj, key) => { 
          obj[key] = addressBook[key]; 
          return obj;
        }, 
        {}
      );
      

    for (const [name, address] of Object.entries(sortedAddressBook)) {
        console.log(`${name} -> ${address}`);
    }
};
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])