document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sort').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMaximo = document.getElementById('numeroMaximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo + 1;
        numeroAleatorio = Math.floor(numeroAleatorio)
        document.getElementById('result-value').innerText = numeroAleatorio
        document.querySelector('.result').style.display = "block";
    })
})