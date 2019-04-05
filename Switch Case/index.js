var memberCard = {
    tier: 'diamod'
};

function getTotal(price, card){
    var discountRate;

    switch (card.tier) {
        case 'bronze':
        discountRate = 0.02;
        break;
        case 'silver':
        discountRate = 0.05;
        break;
        case 'gold':
        discountRate = 0.08;
        break;
        default:
        discountRate = 0.1;
        break;
    }
    return price * (1 - discountRate);
};

var total = getTotal(500000, memberCard);
console.log(total);

console.log('=========================');

var traffictLight = 'green';
function goOrNotInVietNam (lightValue){
    switch(lightValue) {
        case 'green':
        console.log('Go');
        break;
        case 'yellow':
        console.log('Slow Down');
        break;
        default:
        console.log('Stop');
        break;
    }
}

goOrNotInVietNam(traffictLight);
