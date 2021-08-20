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

// Defining a class
class Animal {
    constructor(nameArg, colorArg) {
        // Data / Attributes
        this.name = nameArg;
        this.color = colorArg

        // Operations / Methods / Behaviours
        this.communicate = function() {
            console.log('Hey I am a ' + this.color +' '+ this.name);
        }
        //OR
        /**
         communicate() {
             console.log(this.color, this.name)
         }
         */
    }
   
}

// Instantiate a class to create objects
let dog = new Animal('Dog', 'Brown');

// Access the properties or variables of an object
console.log(dog.name);

// Invoking a method with in an object
dog.communicate();

// 1. Encapsulation

/**Procedural/ Structured Programming 
//Data
let firstName = "John";
let lastName = "Doe";

//Function to combine and return a name
function getName(){
    return firstName +' '+ lastName;
}

// Store a combined name
let combinedName = getName();

//Output the name
console.log(combinedName);

*/

class Person{
    constructor() {
        //Data
        this.firstName = "John";
        this.lastName = "Doe";
    }
    //Method to combine and return a name
    getName(){
        return this.firstName +' '+ this.lastName;
    }

   
    printName(){
         // Store a combined name
        let combinedName = this.getName();

        //Output the name
        console.log(combinedName);
    }

}

let person1 = new Person();
person1.printName();

    // Information Hiding
    class User{
        constructor(){
           let username;
           let password = "test@123";

           this.setUsername = function(passwordArg, usernameArg){
                if(passwordArg === password){
                username = usernameArg;
                }
                else {
                    throw "Authentication Failed"
                }
           }
        
           this.getUsername = function(){           // Getters dont have specified parameters
                return username;
           }
        
        }

    }

    let user1 = new User();

    // user1.setUsername("wrongPassword", "Pete");
    // let uName = user1.getUsername();

    // console.log(uName);
    // user1.setUsername("test@123", "Davi");
    // console.log(user1.getUsername());

class Book{
    constructor(authorArg, genreArg){
        let title;
        this.author = authorArg;
        this.genre = genreArg;
        let ISBNnumber = "123-bn-456";

        this.setBookTitle = function(ISBNnumberArg, titleArg){
            if(ISBNnumber === ISBNnumberArg){
                title = titleArg;
            }else{
                throw "Unknown ISBN"
            }    
        }
        this.getBookTitle = function(){
            return title;
        }

    }
}

let book1 = new Book("Jackson", "Fiction");

book1.setBookTitle("123-bn-456", "Jumanji");
console.log(book1.getBookTitle());
console.log(book1.author, book1.genre);
