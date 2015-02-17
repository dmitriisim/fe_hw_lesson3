
function squareNumber(number) {
    var squaredNumber = number * number;
    console.log('The result of squaring the number ' + number + ' is ' + squaredNumber);
    return squaredNumber;
}

squareNumber(10);
////////
function halfNumber(number) {
    var half = number / 2;
    console.log('Half of ' + number + ' is ' + half);
    return half;
}

halfNumber(10);
////////
function percentOf(number1, number2) {
    var percent = number2 * 100 / number1;
    console.log(number2 + ' is ' + percent + '% of ' + number1 );
    return percent;
}

percentOf(4, 2);
////////
function areaOfCircle(radius){
    var area = (Math.PI * (radius * radius)).toFixed(2)
    console.log('The area for a circle with radius ' + radius + ' is ' + area);
    return area;
}
areaOfCircle(2);
/////////
function calculations(number) {
    var half    = halfNumber(number);
    var squared  = squareNumber(half);
    var area = areaOfCircle(squared);
    var percent = percentOf(area, squared)
}

calculations(10);