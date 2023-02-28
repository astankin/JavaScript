function solve(arr) {
    let piecesCollection = [];
    class Piece {
        constructor(name, composer, key) {
            this.name = name;
            this.composer = composer;
            this.key = key;
        }
    }
    function findPieceByName(pieceName) {
        for (const piece of piecesCollection) {
            if (piece.name === pieceName) {
                return piece;
            }
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "Stop") {
            piecesCollection.forEach((piece) => console.log(`${piece.name} -> Composer: ${piece.composer}, Key: ${piece.key}`));
        }
        let n = Number(arr[0]);
        let pieceInfo = arr[i].split("|");
        if (i <= n) {
            let name = pieceInfo[0];
            let composer = pieceInfo[1];
            let key = pieceInfo[2];
            piecesCollection.push(new Piece(name, composer, key))

        } else {
            let command = pieceInfo[0];
            let pieceName = pieceInfo[1];
            let serchedPiece = findPieceByName(pieceName);
            if (command === "Add") {
                if (serchedPiece === undefined) {
                    let composer = pieceInfo[2];
                    let key = pieceInfo[3];
                    piecesCollection.push(new Piece(pieceName, composer, key));
                    console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);

                } else {
                    console.log(`${pieceName} is already in the collection!`);
                }

            } else if (command === "Remove") {
                if (serchedPiece === undefined) {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                } else {
                    let indexOfObject = piecesCollection.findIndex(object => {
                        return object.name === pieceName;
                    });
                    piecesCollection.splice(indexOfObject, 1);
                    console.log(`Successfully removed ${pieceName}!`);
                }

            } else if (command === "ChangeKey") {

                if (serchedPiece === undefined) {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                }
                else {
                    let newKey = pieceInfo[2];
                    serchedPiece.key = newKey;
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