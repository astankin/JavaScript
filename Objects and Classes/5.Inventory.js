function createRegister(arr){
    let heroRegister = [];

    class Hero{
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    for (const data of arr) {
        let info = data.split(" / ");
        let heroName = info[0];
        let heroLevel = info[1];
        let heroItems = info.slice(2)
        heroRegister.push(new Hero(heroName, heroLevel, heroItems))
    }
    let sortedHeroRegister = heroRegister.sort((a, b) => {
        return a.level - b.level;
    });
    for (const hero of sortedHeroRegister) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

createRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )

