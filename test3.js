/*
Question 3
Write a function that accepts a plain text password and returns the relative strength of the
password based on the following criteria.
Types of Passwords:
- Weak Password: 0 - 2 points.
- Medium Password: 3 points.
- Strong Password: 4 points.
- Very Strong Password: 5 Points.
Criteria For Points:
- Length: 1 point if more than 10 characters
- Capital letters: 1 point if at least 1 capital letter is present
- Lowercase letters: 1 point if at least 1 lowercase letter is present
- Numbers: 1 point if at least 1 number is present
- Special characters: 1 point if any of the following characters are present: %, ^, &, *, (, ),
@, !, #, $ (i.e all the special characters accessible from the number keys 1, 2, 3, 4... etc)
Your function should return “weak”, “medium”, “strong” or “very strong” to classify the given
password.
*/
let password = "helloworld123*";


function passwordStrength(password){
    let strengthCounter = 0;
    if (password.length >= 10){
        strengthCounter++;
    }
    if (/[A-Z]/.test(password)){
        strengthCounter++;
    }
    if (/[a-z]/.test(password)){
        strengthCounter++;
    }  
     if (/[0-9]/.test(password)){
        strengthCounter++;
    }  
     if (/[\W_]/.test(password)){
        strengthCounter++;
    }  
  
let result = "Weak"
    if (strengthCounter === 5){
        result = "Very Strong";
    }
        else if (strengthCounter === 4){
        result = "Strong";
    }
        else if (strengthCounter === 3){
        result = "Medium";
    }

    return result;
}
console.log(passwordStrength(password));