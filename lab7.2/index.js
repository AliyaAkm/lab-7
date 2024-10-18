
function runTask1() {
    let name = prompt("What is your name?");
    let standardizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    alert("Hello " + standardizedName);
}

function runTask2() {
    function lifeInWeeks(age) {
        const yearsRemaining = 90 - age;
        const daysRemaining = yearsRemaining * 365;
        const weeksRemaining = yearsRemaining * 52;
        const monthsRemaining = yearsRemaining * 12;

        alert(`You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`);
    }

    let age = prompt("What is your age?");
    lifeInWeeks(age);
}

function runTask3() {
    function bmiCalculator(weight, height) {
        let bmi = weight / (height * height);
        if (bmi < 18.5) {
            return `Your BMI is ${bmi.toFixed(1)}, so you are underweight.`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return `Your BMI is ${bmi.toFixed(1)}, so you have a normal weight.`;
        } else {
            return `Your BMI is ${bmi.toFixed(1)}, so you are overweight.`;
        }
    }

    let weight = prompt("Enter your weight in kg:");
    let height = prompt("Enter your height in meters:");
    alert(bmiCalculator(weight, height));
}

function runTask4() {
    function whoIsPaying(names) {
        let randomIndex = Math.floor(Math.random() * names.length);
        return `${names[randomIndex]} is going to buy lunch today.`;
    }

    let names = ["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"];
    alert(whoIsPaying(names));
}

function runTask5() {
    function fibonacciGenerator(n) {
        let sequence = [];
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                sequence.push(0);
            } else if (i === 1) {
                sequence.push(1);
            } else {
                sequence.push(sequence[i - 1] + sequence[i - 2]);
            }
        }
        return sequence;
    }

    let n = prompt("Enter the number of Fibonacci sequence elements you want:");
    alert(fibonacciGenerator(n).join(", "));
}
