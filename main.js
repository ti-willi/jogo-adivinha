const input = document.querySelector('[data-input]');
const tentativas = document.querySelector('[data-tentativas]');
const button = document.querySelector('[data-button]');
const resultado = document.querySelector('[data-resultado]');


let numero = Math.round(Math.random() * 10);
let cont = 2;

input.focus();


function verifica() {

    

    while (cont > 0) {

        if(input.value == numero) {
            resultado.textContent = "Parabéns! Você acertou!"
            return;  
        }
        else if (cont == 1) {
            resultado.textContent = "Última tentativa!"
            input.value = ""
            input.focus();
            cont--
            return;
        }
        else {
            resultado.textContent = `Restam ${cont} tentativas`
            input.value = ""
            input.focus();
            cont--
            return;
        }
        
    }

    if(cont == 0 && input.value != numero) {
        resultado.textContent = "Que pena, você errou. O número era " + numero
    }
    else {
        resultado.textContent = "Parabéns! Você acertou!" 
    }

    

}

button.addEventListener("click", () => {

    verifica();

})

input.addEventListener("keyup", (event) => {
    if(event.code === "Enter") {
        verifica();
    }
})


   
    


