/**
 * 1. Encapsulation
 *      - Information hidding
 *          - setters / mutators
 *          - getters / accessors
 * 2. Inheritance
 * 3. Polymorphism
 * 4. Abstraction
 * 
 * 5. Access Control Modifiers
 *  - Public (-)
 *  - Private (+)
 *  - Protected (#)
 *  - Package (~)
 * 
 */

//Pascal: EachKeyWord
//Carmel: eachKeyWord
//Snake: each_key_word

// 2. Inheritance

// Super set 
class Animal{
    constructor(nameArg, breedArg){
        //Data
        this.name = nameArg;
        this.breed = breedArg;
    }

    // Attributes / Behaviours
    communicate(){
        console.log("I am a generic Animal");
    }
}

// Sub set 
class Dog extends Animal{
    constructor(nameArg, breedArg, colorArg){           // adding color is a specialized property
        //Attribute
        super(nameArg, breedArg,)                       // once you create a constructor in the child, you have to call the "super()" 
        this.color = colorArg;
    }

    // //Behaviour
    communicate(){                                      // Polymorphism "over riding"
        console.log('Barking ....');
    }
}

class Cat extends Animal{
       // //Behaviour
       communicate(){                                      // Polymorphism "over riding"
        console.log('Meawwww ......');
    }
}
// Super set <- Sub
let animal = new Animal("Rabit", "Newcastle");
console.log(animal.name, animal.breed);
animal.communicate();

let dog = new Dog("xav", "pug", "brown");
console.log(dog.name, dog.breed, dog.color);
dog.communicate();

let cat = new Cat("brownie", "cat");
console.log(cat.name, cat.breed);
cat.communicate();

// 3. Polymorphism
    // Default Dynamic variables
    // 1. Overloading
    // 2. Overriding
    // 3. Subtype Polymorphism


// Subtype Polymorphism is this
//  Allows you to use 1 variable to change its form like below

// let animal = new Animal("Super", "Super");

// animal = new Dog("", "", "")
// console.log(animal.name, animal.breed, animal.color);
// animal.communicate();

// animal = new Cat("", "", "")
// console.log(animal.name, animal.breed, animal.color);
// animal.communicate();