function solve(input){
    const n = Number(input.shift());
    let collection = {};
    for (let index = 0; index < n; index++) {
        let line = input.shift().split('|');
        let [piece, composer, key] = line;
        collection[piece] = {composer, key};
    }
    input.forEach(element => {
        let [command, piece, composer, key] = element.split('|');
        if (command === 'Add'){
            if (collection.hasOwnProperty(piece)){
                console.log(`${piece} is already in the collection!`);
            } else {
                collection[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove'){
            if (collection.hasOwnProperty(piece)){
                delete collection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey'){
            if (collection.hasOwnProperty(piece)){
                collection[piece].key = composer;
                console.log(`Changed the key of ${piece} to ${composer}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    });
    for (const [piece, info] of Object.entries(collection)) {
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