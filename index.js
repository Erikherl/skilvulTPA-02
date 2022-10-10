let calculate = document.getElementById("calculate-button")
let result = document.getElementById("result-text")

calculate.addEventListener("click", function caulculateBMI() {
    let weight = document.getElementById("weight-input").value
    let height = document.getElementById("height-input").value

    if (weight <= 0 && height <= 0) {
        result.innerText = "Cannot Accept Negative or Unknown Number"
    }else{
        let bmi = (weight / ((height/100)*(height/100))).toFixed(1)

        result.innerHTML = `Your BMI is <strong>${bmi}</strong> Which means You are`
        if (bmi < 18.5) {
            result.innerHTML += ` <strong>Underweight</strong>`;
        }
        else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML += ` <strong>Normal Weight</strong>`;
        }
        else if (bmi >= 25 && bmi < 29.9){
            result.innerHTML += ` <strong>Overweight</strong>`;
        }
        else {
            result.innerHTML += ` <strong>Obesity</strong>`;
        }
    }
})