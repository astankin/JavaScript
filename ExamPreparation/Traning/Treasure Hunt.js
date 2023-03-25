function solve(input) {
  let treasureChest = input.shift().split("|");
  for (const data of input) {
    let line = data.split(" ");
    let command = line.shift();
    if (command === "Loot") {
      for (const item of line) {
        if (!treasureChest.includes(item)) {
          treasureChest.unshift(item);
        }
      }
    } else if (command === "Drop") {
      let idx = Number(line.shift());
      if (0 <= idx && idx < treasureChest.length) {
        let item = treasureChest[idx];
        treasureChest.splice(idx, 1);
        treasureChest.push(item);
      }
    } else if (command === "Steal") {
      let count = Number(line.shift());
      let stolenItems = treasureChest.splice(-count);
      console.log(stolenItems.join(", "));
    }
  }
  if (treasureChest.length > 0) {
    let sum = 0;
    treasureChest.forEach(el => {
        sum += el.length ;
    });
    let average = sum / treasureChest.length;
    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
  } else {
    console.log("Failed treasure hunt.");
  }
}

solve([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
