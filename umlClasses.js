//Inheritance
class Employee{
    constructor(name, started){
        //Attributes
        this.name = name;
        this.started=started;
   
    }
    //Methods
    employeeDetails(){
        console.log("Employee name: "+this.name +"| Start Date: "+this.started);
    }

}

class FullTimeEmployee extends Employee{
    constructor(name, started){
        super(name, started);
        
    }

    employeeDetails(){
        console.log("Employee name: "+this.name +"| Start Date: "+this.started +"| Status: Full-Time");
    }

}

class PartTimeEmployee extends Employee{
    constructor(name, started, hoursWorked){
        super(name, started);
        this.hoursWorked= hoursWorked;
    }
    employeeDetails(){
        console.log("Employee name: "+this.name +"| Start Date: "+this.started +"| Status: Part-Time");
    }

    setHoursWorked(timeArrived, timeLeft){
        let hoursWorked = timeLeft - timeArrived;
    }

    getHours(){
        return hoursWorked;
    }
}
let employee = new Employee("Super", "Super");

employee = new FullTimeEmployee("Daya", "24/05");
employee.employeeDetails();
employee = new PartTimeEmployee("Haywire", "24/07");
employee.employeeDetails();



//Abstraction
class Customer {
    constructor(firstName, lastName, accountType){
        this.firstName=firstName;
        this.lastName=lastName;
        this.accountType=accountType;
        
        let discount = 1000;
        let monthlyPurchases = 5000;



        let discountCalculator = function(){
            let discount = monthlyPurchases - 500
        };

        this.accountName = function(){
            console.log("Account: "+firstName + lastName);
            discountCalculator();
        };
    }
    
}
let customer = new Customer("david", "Zake", "Subscriber");
customer.accountName();
console.log();


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