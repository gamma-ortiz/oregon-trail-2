// Your task: Following the Class pattern (as shown above), create two different classes: a Traveler and a Wagon.

// The Traveler Class
// The Traveler class (blueprint) should set the following properties for each instance:

// a name, which must be provided as a parameter to the constructor.
// an amount of food, with an initial value of 1.
// an isHealthy property, with an initial value of true, which indicates whether a traveler is sick.
// The Traveler class should also have the following methods:

// hunt() – Increases the traveler's food by 2.
// eat() – Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
// The Wagon Class
// The Wagon class should set the following properties for each instance:

// a capacity, which must be provided to the constructor: this is the maximum number of passengers a wagon can hold.
// a passengers list, which is initially an empty array.
// The Wagon class should have these methods:

// getAvailableSeatCount() – Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
// join(traveler) - Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
// shouldQuarantine() - Returns true if there is at least one unhealthy person in the wagon. Return false if not.
// totalFood() - Returns the total amount of food among all passengers in the wagon.
// Testing
// Add the following code to the end of your program to verify that it is working properly – or perhaps, add this to a tests.js file to load last in your index.html.

// Click to access the test code
// Stretch Goals
// Add the wagons and the travelers to the DOM.
// Display relevent information in the DOM about the wagons and traveler – for example: travelers name/food/isHealthy, and/or Wagon's passengers/capacity.
// Add buttons to your classes – for example: make a traveler eat, add a traveler to a wagon, check if a wagon should quarantine, etc.
// Add a button to create a new traveler based on a name the user inputs.
// Add animations simulating travel, etc.
// Generally just make your game feel more like the original Oregon Trail.



class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food += 2

    }
    eat() {
        if (this.food <= 0) {
            this.isHealthy = false
        }
        else {
            this.food -= 1
        }
    }
}


class Wagon {
    constructor(capacity) {
        this.passangers = []
        this.capacity = capacity
    }
    getAvailableSeatCount() {
        return this.capacity - this.passangers.length
    }
    join(Traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passangers.push(Traveler)
        }
    }
    shouldQuarantine() {
        for (let index = 0; index < this.passangers.length; index += 1) {
            if (this.passangers[index].isHealthy === false) {
                return true
            }
        }
        
    }

    totalFood() {
        let totalNumber = 0
        for (let index = 0; index < this.passangers.length; index += 1) {
            totalNumber += this.passangers[index].food
        }
        return totalNumber
    }
}










//test code
let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`)