function solve(arr) {
    let piecesCollection = [];
    class Piece {
        constructor(name, composer, key) {
            this.name = name;
            this.composer = composer;
            this.key = key;
        }
    }
    // function findPieceByName(pieceName) {
    //     for (const piece of piecesCollection) {
    //         if (piece.name === pieceName) {
    //             return piece;
    //         }
    //     }
    // }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "Stop") {
            piecesCollection.forEach((piece) => console.log(`${piece.name} -> Composer: ${piece.composer}, Key: ${piece.key}`));
        }
        let n = Number(arr[0]);
        let pieceInfo = arr[i].split("|");
        if (i <= n) {
            let [name, composer, key ] = pieceInfo;
            piecesCollection.push(new Piece(name, composer, key))

        } else {
            let [command, pieceName] = pieceInfo;
            let searchedPiece = piecesCollection.find((x) => x.name === pieceName);
            // let searchedPiece = findPieceByName(pieceName);
            if (command === "Add") {
                if (searchedPiece === undefined) {
                    let composer = pieceInfo[2];
                    let key = pieceInfo[3];
                    piecesCollection.push(new Piece(pieceName, composer, key));
                    console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);

                } else {
                    console.log(`${pieceName} is already in the collection!`);
                }

            } else if (command === "Remove") {
                if (searchedPiece === undefined) {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                    
                } else {
                    let indexOfObject = piecesCollection.indexOf(searchedPiece);
                    // let indexOfObject = piecesCollection.findIndex(object => {
                    //     return object.name === pieceName;
                    // });
                    piecesCollection.splice(indexOfObject, 1);
                    console.log(`Successfully removed ${pieceName}!`);
                }

            } else if (command === "ChangeKey") {

                if (searchedPiece === undefined) {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                }
                else {
                    let newKey = pieceInfo[2];
                    searchedPiece.key = newKey;
                    console.log(`Changed the key of ${pieceName} to ${newKey}!`);
                }
            }
        }
    }
}

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)