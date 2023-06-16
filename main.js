const senha = document.getElementById('senha');
const btnEnviar = document.getElementById('enviar');

senha.addEventListener('keyup', e => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()])[A-Za-z\d@$!%*?&]{6,8}$/
    if (regex.test(senha.value)) {
        document.getElementById('minmax').style.color = 'greenyellow';
        btnEnviar.classList.remove('inativo')
        btnEnviar.classList.add('ativo')
    } else {
        document.getElementById('minmax').style.color = '#ff8787';
        btnEnviar.classList.remove('ativo')
        btnEnviar.classList.add('inativo')
    }

    if (/^(?=.*[a-z])(?=.*[A-Z])/.test(senha.value)) {
        document.getElementById('maiorMenor').style.color = 'greenyellow';
    } else {
        document.getElementById('maiorMenor').style.color = '#ff8787';
    }

    if (/^(?=.*[@$!%*?&()#])/.test(senha.value)) {
        document.getElementById('especial').style.color = 'greenyellow';
    } else {
        document.getElementById('especial').style.color = '#ff8787';
    }
})

btnEnviar.addEventListener('click', e => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()])[A-Za-z\d@$!%*?&]{6,8}$/
    if (regex.test(senha.value)) {
        alert('Cadastrado com sucesso!');
    }
})