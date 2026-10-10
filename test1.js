const numbers = [100, 200, 200, 100];

function largestIntegers(numbers) {
    if (numbers.length === 0) return [0 , 0] // if no nr added return 0
    if (numbers.length === 1) return numbers[[0] , 0]
    let largestOne = -Infinity;
    let largestSecond = -Infinity;
    for (let num of numbers) {
        if (num >= largestSecond && num > largestOne){
            largestSecond = largestOne; 
            largestOne = num;
        }
        else if (num <= largestOne && num > largestSecond) 
            largestSecond = num;
}
return [largestOne, largestSecond];
}

console.log(largestIntegers(numbers))
