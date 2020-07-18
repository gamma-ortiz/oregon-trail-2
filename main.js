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
        /*for (let index = 0; index < this.passangers.length; index += 1) {
            console.log(this.passangers[index])
            if (this.passangers[index].isHealthy = false) {
                return true
            }
            else {
                return false
            }*/

            let notHealthy = this.passangers.filter(Traveler => Traveler.isHealthy == false)
            if(notHealthy.length > 0) {
                return true
            } else {
                return false
            }
        
            /* 
            From line 45-50 this code belongs to Cameron Winney
            My code is from line 36-43, however, we could not find a way to make it work (if you have a solution that would
            work with my method that would be preffered)
            */
        
    }

    totalFood() {
        let totalNumber = 0
        for (let index = 0; index < this.passangers.length; index += 1) {
            totalNumber += this.passangers[index].food
        }
        return totalNumber
    }
}

class Doctor extends Traveler {
    heal(Traveler) {
        return Traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor(name, food = 2) {
        super(name, food)
        this.food = food
    }
    hunt() {
        this.food += 5
    }
    eat() {
        if (this.food < 2) {
            this.food = 0
            this.isHealthy = false
        }
        else {
            this.food -= 2
        }
    }
    giveFood(Traveler, numOfFoodUnits) {
        if (this.food < numOfFoodUnits) {
            return 'not enough food'
        }
        else {
            this.food -= numOfFoodUnits
            console.log(this.food)
            Traveler.food += numOfFoodUnits
            console.log(Traveler.food)
        }
    }
}






//test code 2

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);