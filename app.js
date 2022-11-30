// პირველი დავალება

let arrayFilter = [-1, 1, 3, -4, 11, -21, 50];

let filtered = arrayFilter.filter((number)=> number > 0);

console.log(filtered)

let sumNum = filtered.reduce((acc, curr)=>{
    return acc+=curr
},0)

console.log(sumNum)
// მეორე დავალება

let fruits = ["Mango","Watermelon","Mango","Banana","Banana","Banana", "Banana"];

let reduceFruits = fruits.reduce((acc,curr)=>{
    if(acc[curr]) {
        acc[curr] +=1
    } else {
        acc[curr] = 1
    } 
    return acc
},{})
console.log(reduceFruits)


// მესამე დავალება

class Car {
    constructor(brand, model, speed=0) {
        this.brand=brand;
        this.model=model;
        this.speed=speed;
        this.motion="Car is not moving"
    }
    checkMotion(){
        if(this.speed){
            return this.motion = "Car is moving"
        } else {
            return this.motion 
        }
    }
    accelerate(carSpeed){
       return this.speed+=carSpeed
    }
    brake(brakeSpeed){
       if((this.speed-brakeSpeed)>=0){
            return this.speed=this.speed-brakeSpeed
       } else{
        return this.speed=0
       }
    }
    emergency_brake(){
        return this.speed=0
    }
    status(){
        return console.log(`მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია ${this.checkMotion()}`)
    }

}

const firstCar = new Car("Ford","Mustang", 100)
console.log("Actual Speed", firstCar.speed)
console.log("brake", firstCar.brake(70))
console.log("emergencyBreak", firstCar.emergency_brake())
console.log("accelerate", firstCar.accelerate(120))
console.log("status", firstCar.status())


// მეოთხე დავალება- 
// ფრომისები კარგად არ ვიცი და რაც გამოვა გამოვა. ჯს კურსზეც ვერ გავიგე თავისდროზე;დ

const value1=20;
const value2=30;

const promise = new Promise((resolve, reject)=>{
    if(typeof value1==="number" && typeof value2==="number"){
        resolve(value1 + value2)
    }
    else{
        reject("oops ERROR")
    }
})

promise
    .then((res)=>{
        console.log("They are numbers", res)
    })
    .catch((error)=>{
        console.log("There are no numbers", error)
    })