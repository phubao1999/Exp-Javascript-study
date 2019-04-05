function tossCoin () {
    var value = Math.random();
    var result = (value < 0.5) ? 'Mat Sap' : 'Mat Ngua';
    // if (value < 0.5) {
    //     result = 'Mat Sap';
    // } else {
    //     result = 'Mat Ngua'
    // }
    console.log(result);
}
tossCoin();

// Toán Tử Ternary Operator