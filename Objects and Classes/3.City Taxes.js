function cityTaxes(name, population, treasury){
    let cityInfo = {
        "name": name,
        "population": population,
        "treasury": treasury,
        "taxRate": 10,
        collectTaxes(){
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(percentage){
            percentage /= 100;
            this.population *= percentage + 1;
        },
        applyRecession(percentage){
            percentage /= 100;
           this.treasury *= 1 - percentage;
        }
    };
    return cityInfo;

};
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);
