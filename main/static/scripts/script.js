function Calcular(){
    console.log("Função Calcular foi chamada");
    var peso = document.getElementById("txtpeso").value
    var altura = document.getElementById("txtaltura").value
    peso = parseFloat(peso);
    altura = parseFloat(altura) / 100;
    var res = document.getElementById("res")
    if (peso && altura) {
        var imc = peso / (altura ** 2);
        if (imc < 18.5){
            res.innerHTML = `Seu número de IMC é: ${imc.toFixed(2)} Você está abaixo do peso normal`;
            res.style.color = 'red'

        } else if (imc > 18.5 && imc < 24.9) {
            res.innerHTML = `Seu número de IMC é: ${imc.toFixed(2)} Você está no peso normal`;
            res.style.color = '#B4DD1E'

        } else if (imc > 25.0 && imc < 29.9) {
            res.innerHTML = `Seu número de IMC é: ${imc.toFixed(2)} Você está no sobrepeso`;
            res.style.color = 'yellow'

        } else if (imc > 30.0 && imc < 34.9) {
            res.innerHTML = `Seu número de IMC é: ${imc.toFixed(2)} Você está com obesidade classe I`;
            res.style.color = 'orange'

        } else if (imc > 35.0 && imc < 39.9) {
            res.innerHTML = `Seu número de IMC é: ${imc.toFixed(2)} Você está com obesidade classe II`;
            res.style.color = 'red'

        } else if (imc > 39.9) {
            res.innerHTML = `Seu número de IMC é: ${imc.toFixed(2)} Você está com obesidade classe III`;
            res.style.color = 'brown'

        } 
    } else {
        res.innerHTML = "preencha os dados corretamente.";
    }

}