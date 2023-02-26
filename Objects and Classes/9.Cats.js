function catCreator(arr){
    let cats = [];
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for(const info of arr){
        let catName = info.split(' ')[0];
        let catAge = info.split(' ')[1];
        cats.push(new Cat(catName, catAge));
    }
    for (const cat of cats) {
        cat.meow();
    }
};

catCreator(['Mellow 2', 'Tom 5']);
catCreator(['Candy 1', 'Poppy 3', 'Nyx 2']);