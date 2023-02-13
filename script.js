let car = {
    model: 'nissan',
    year: 2010,
    color: 'blue',
    signal: function(){
        console.log('fa! fa!');
    },
}
car.color = 'red';
car.type = 'electric'

console.log(car);
car.signal();


//-------------------------------------------


// let salaries = {
//     frontend: 12000,
//     backend: 10000,
//     designer: 8000,
// }

// salaries.manager = 5000;
// delete salaries.designer


// let result = 0;
// for (let key in salaries) {
//     result += salaries[key];
// }
// console.log('we must pay salary on Tuesday!',result);


//-------------------------------------------


// function Model(brand,system,cost){
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
// }

// let dell = new Model('Dell','windows',800);
// let apple = new Model('Apple','Mac OS',1700);

// console.log(dell,apple)