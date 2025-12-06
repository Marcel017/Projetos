const form = document.getElementById('form-comparador');

function validaNumero(a, b) {
    return b > a;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Pegamos os elementos
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagemSucesso = document.querySelector('.success-message');
    const mensagemErro = document.querySelector('.error-message');

    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    const formEValido = validaNumero(valorA, valorB);

    if (formEValido) {
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';

        campoA.value = '';
        campoB.value = '';
    } else {
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
        
        campoB.style.border = '1px solid red';
    }
});

console.log(form);