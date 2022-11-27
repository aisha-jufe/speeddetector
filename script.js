const button = document.getElementById("submitBtn");
button.addEventListener("click", function () {
    const speed = parseFloat(document.getElementById("num1").value);
    if (speed <= 70) {
        merit = 'Ok';
        document.getElementById("answer").innerText = merit
    } else {
        const points = speed - 70;
        const calculation = parseInt(points / 5);
        let pointsdemerited = calculation * 1;
        let pointsToDemerit = `Points: ${pointsdemerited}`;
        if (pointsdemerited > 12) {
            pointsToDemerit = "License suspended"
        }document.getElementById("answer").innerText = pointsToDemerit
    }
});