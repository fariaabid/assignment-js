//-----------------Problem 1 start------------------------//
function kilometerToMeter(kilometer){
    if (kilometer < 0){
        return "Distance can not be negative.";
    }
    else{
        var meter = kilometer*1000;
        return meter;
    }
}
var givenKilometer = kilometerToMeter(38);
console.log(givenKilometer);
//-----------------Problem 1 end------------------------//

//-----------------Problem 2 start------------------------//
function budgetCalculator(watch,mobilePhone,laptop){
    if (watch < 0 || mobilePhone < 0 || laptop < 0) {
        return "Please,enter positive value";
    }
    else {
        var watchCount = watch*50;
        var mobilePhoneCount = mobilePhone*100;
        var laptopCount = laptop*500;
        var totalBudget = watchCount + mobilePhoneCount + laptopCount;
        return totalBudget;
    }
}
var budgetResult = budgetCalculator(1, 1, 1);
console.log(budgetResult);
//-----------------Problem 2 end------------------------//