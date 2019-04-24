function getFriendlyNumbers(start, end) {
    let friendlyNumbers = [];

    if (typeof(start) === 'number' && typeof(end) === 'number' && start > 0 && end >= start
        && start == Math.round(start) && end == Math.round(end)) {

        for ( let num = start; num < (end + 1); num++ ) {
            getFriendly(num, end, friendlyNumbers);
        }
        return friendlyNumbers;
    } else {
        return false;
    }
}

// функция определения собственных делителей числа
function getDiv(numb) {
    let ownDivs = [];

    for (let i = 2; i <= numb/2; i++) {
        if ((numb % i) == 0 && ownDivs.indexOf(i) == -1) {
            ownDivs.push(i);
            ownDivs.push(numb/i);
        }
    }
    ownDivs.push(1);
    return ownDivs;
}

// функция суммы собственных делителей
function getSum(numb) {
    let sum = 0,
        divs = getDiv(numb);

    divs.forEach(function(item) {
        sum = sum + item;
    });
    return sum;
}

// функция определения дружественных чисел и записи в массив
function getFriendly(numb, end, friendlyNumbers) {
    let numFriend = getSum(numb);

    if ( numFriend > numb && numFriend <= end && getSum(numFriend) == numb ) {
        console.log('done');
        friendlyNumbers.push([numb, numFriend]);
    }
}

// console.log(getFriendlyNumbers(1, 100300));

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}