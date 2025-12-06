const form = document.getElementById("form-deposito");

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
})

console.log(form);
