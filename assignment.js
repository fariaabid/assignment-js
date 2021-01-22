//-----------------Problem 1 start------------------------//
function kilometerToMeter(kilometer){
    if (kilometer < 0){
        return "Distance can not be negative.";
    }
    else{
        var meter = kilometer * 1000;
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
        var watchBudget = watch * 50;
        var mobilePhoneBudget = mobilePhone * 100;
        var laptopBudget = laptop * 500;
        var totalBudget = watchBudget + mobilePhoneBudget + laptopBudget;
        return totalBudget;
    }
}
var budgetResult = budgetCalculator(1, 1, 1);
console.log(budgetResult);
//-----------------Problem 2 end------------------------//

//-----------------Problem 3 start------------------------//
function hotelCost(days){
    var hotelBill = 0;
    if(days<=10){
        hotelBill = days * 100;
    }
    else if(days<=20){
        var first10DaysBill = 10 * 100;
        var remainingDays = days-10;
        var second10DaysBill = remainingDays * 80;
        hotelBill = first10DaysBill + second10DaysBill ;
    }
    else{
        var first10DaysBill = 10 * 100;
        var second10DaysBill = 10 * 80;
        var remainingDays = days-20;
        var moreThan20DaysBill = remaining * 50;
        hotelBill = first10DaysBill + second10DaysBill + moreThan20DaysBill;
    }
    return hotelBill;
}
var myHotelBill = hotelCost(12);
console.log(myHotelBill);
//-----------------Problem 3 end------------------------//

//-----------------Problem 4 start------------------------//
function megaFriend(names){
    var largestName = names[0];
    for (var i = 1; i < names.length; i++) {
        if (names[i] == "") {
            return "Name cannot be empty string.";
        }
        var givenName = names[i];
        if (largestName.length < givenName.length) {
            largestName = givenName;
        }
    }
    return largestName;     
}
var nameResult = megaFriend(["fariaAbid","kibria","zuhair","jannat","abid","shahanara"]);
console.log(nameResult);
//-----------------Problem 4 end------------------------//









