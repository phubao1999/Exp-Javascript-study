function getTicketFee(person){
    var basePrice = 20000;
    if (person.age < 15){
        return 20000 * 0.8;
    } else if (person.age > 60){
        return 20000 * 0.9;
    } else {
        return basePrice;
    }
}

var person = {
    age : 99
};

var fee = getTicketFee(person);
console.log(fee);