class CaloriesTracker {
    constructor(maxCalories){
        this.maxCalories= maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount
        if(this.currentCalories > this.maxCalories){
            this.logCalorieSurplus()
        }
    }

    // logCalorieSurplus(){
    //     console.log('Max calories exceeded');
    // }
}

const ct = new CaloriesTracker(2000);
ct.trackCalories(500);
ct.trackCalories(1000);
ct.trackCalories(700);