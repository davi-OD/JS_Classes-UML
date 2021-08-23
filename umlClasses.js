//Inheritance
class Employee{
    constructor(name, started){
        //Attributes
        this.name = name;
        this.started=started;
   
    }
    //Methods
    employee(){

    }

    setName(){

    }

    setStarted(){

    }
}

class FullTimeEmployee extends Employee{
    constructor(name, started, pension){
        super(name, started);
        this.pension = pension;
    }

    fullTimeEmployee(){

    }
    setPensiontier(){

    }
}

class PartTimeEmployee extends Employee{
    constructor(name, started, hoursWorked){
        super(name, started);
        this.hoursWorked= hoursWorked;
    }
    partTimeEmployee(){

    }
    setHoursWorked(){

    }
}


//Abstraction
class Customer {
    constructor(firstName, lastName, accountType){
        this.firstName=firstName;
        this.lastName=lastName;
        this.accountType=accountType;
        
        let discount = 1000;
        let monthlyPurchases = 5000;



        let discountCalculator = function(){

        };

        this.accountName = function(){
            discountCalculator();
        };
    }
    

}

//Encapsulation
class Student {
    constructor(studentName, studentID, course){
        this.studentName=studentName;
        this.studentID=studentID;
        this.course=course;
        this.yearOfStudy= 2020;
        let cgpa;
        let adLogin = "1234"
        

        this.setCgpa = function(adLoginArg, cgpaArg){
            if(adLogin === adLoginArg){
                cgpa = cgpaArg;
            }else{
                throw "Unknown Login Credentials"
                
            }
        }

        this.studentDetails = function(){
            console.log("Student Name: "+this.studentName +"| Student ID: "+this.studentID +"| Course: "+this.course +"| Year: "+this.yearOfStudy);
        }

        this.getCgpa = function(){
            return cgpa;
        }

    }
}

let student = new Student("Hawse", "3243522", "BBA");
student.studentDetails();
student.setCgpa("1234", "4.0");
console.log(student.getCgpa());