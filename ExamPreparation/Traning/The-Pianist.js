function solve(arr){
    const n = Number(arr.shift());

    let pieces = {};
    for (let i = 0; i < n; i++) {
        let [piece, composer, key ] = arr.shift().split('|');
        pieces[piece] = { composer, key};
    }

    for (const info of arr) {
        let line = info.split('|');
        let command = line.shift();
        if (command === 'Add'){
            let [piece, composer, key] = line;
            if (pieces.hasOwnProperty(piece)){
                console.log(`${piece} is already in the collection!`);
            } else{
                pieces[piece] = { composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove'){
            let piece = line.shift();
            if (pieces.hasOwnProperty(piece)){
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey'){
            let piece = line.shift();
            let newKey = line.shift();
            if (pieces.hasOwnProperty(piece)){
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    for (const [piece, info] of Object.entries(pieces)) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }

}

solve([
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