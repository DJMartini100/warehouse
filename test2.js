// fuction with 2 parameters first is array of strings and second integetrs
//return nr of strings in array that has the first nr matching length and second nr matching length

//exxpected:3 // “hello” and “world” have a length of 5 and “a” has a length of 1
//made it extra difficult because i didnt realise that only count was needed
function getLength(strings, numbers){
    let totalResult = 0;
    let matchGroupNames = {};
    if (strings.length === 0) 
        return (totalResult, console.log(` No strings were found`));
   
    for (let num of numbers){
        let matchNames = [];
        for (let str of strings){
            if(str.length === num){
            totalResult++;
            matchNames.push(str);}

            } 
            if (matchNames.length > 0){
                matchGroupNames[num] = matchNames
            }
     }
     return {totalResult, matchGroupNames}
}


let strings = ["hello", "world", "tim", "a", "it"]
let numbers = [5, 1]

console.log(getLength(strings, numbers))
