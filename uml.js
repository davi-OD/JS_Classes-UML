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

// 4. Abstraction 
    // 1. Information Hiding
    // 2. Abstract Classes and Methods
    // 3. Interfaces 

class DigestiveSystem{
    
    constructor(){
        //Attributes

        //Behaviours
        this.ingestion= function(food){
            digest(food);
        }

        let digest = function(food){
            swallowing(food)
        }

        let swallowing= function(bolus){
            absorption(bolus)
        }
        let absorption= function(absovable){
            egestion(absovable)
        }
        let egestion= function(crap){
            console.log("Excreting "+crap);
        }

        }
}

let ds = new DigestiveSystem();
ds.ingestion("Posho");