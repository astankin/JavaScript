function solve(input){
    let n = Number(input.shift());
    let data = {};
    for (let index = 0; index < n; index++) {
        let [piece, composer, key] = input.shift().split('|');
        data[piece] = { composer, key };  
    }
    for (const info of input) {
        let line = info.split('|');
        let command = line.shift();
        let piece = line.shift();
        if (command === 'Add'){
            let [composer, key] = line;
            if (piece in data){
                console.log(`${piece} is already in the collection!`);
            } else {
                data[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if ( command === 'Remove' ){
            if ( piece in data ){
                delete data[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if ( command === 'ChangeKey' ){
            let newKey = line.shift();
            if ( piece in data ){
                data[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    for (let [ piece, info ] of Object.entries(data)) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }

}
solve (
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
      ]
      
)