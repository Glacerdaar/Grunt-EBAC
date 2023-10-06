document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sort').addEventListener('submit', function(){
        let numeroMaximo = document.getElementById('numeroMaximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        alert(numeroAleatorio);
    })
})