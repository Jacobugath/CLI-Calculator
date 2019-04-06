const opp = process.argv[2];
const one = parseInt(process.argv[3]);
const two = parseInt(process.argv[4]);
const equation = process.argv[3];

doMath();

function doMath(){
    switch(opp){
        case 'add':
            console.log(one+two);
            break;
        case 'subtract':
            console.log(one-two);
            break;
        case 'multiply':
            console.log(one*two);
            break;
        case 'divide':
            console.log(one/two);
            break;
        case 'remainder':
            console.log(one%two);
             break;
        case 'exp':
            console.log(Math.pow(one, two));
            break;
        case 'algebra':
            doAlgebra();
            break;
        default:
            console.log('Not a valid opperator.')
    }
}

function doAlgebra(){
    const xIndex = equation.indexOf("x");
    const signIndex = xIndex + 1;
    const equalIndex = equation.indexOf("=")
    const firstNum = parseInt(equation.substring(0, xIndex));
    const sign = equation[signIndex];
    const secondNum = parseInt(equation.substring(signIndex + 1, equalIndex));
    const thirdNum = parseInt(equation.substring(equalIndex + 1, equation.length));
    switch (sign){
        case '+':
            console.log("x = "+(thirdNum - secondNum) / firstNum);
            break;
        case '-':
            console.log("x = "+(thirdNum + secondNum) / firstNum);
            break;
        case '*':
            console.log("x = "+(thirdNum / secondNum) / firstNum);
            break;
        case '/':
            console.log("x = "+(thirdNum * secondNum) / firstNum);
            break;
        default:
            console.log('Invalid Equation Format');
            break;
    }
}