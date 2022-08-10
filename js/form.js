var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault()
    
    var form = document.querySelector(".form-adiciona")

    var paciente = obtemPacienteDoFormulario(form)
    console.log(paciente)

    var pacienteTr = montarTr(paciente)

    var erros = validaPaciente(paciente)

    if (erros.length > 0){
       exibeMensagensErro(erros)
        return
    }

    var tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)

    adicionaPacienteNaTabela(paciente)

    form.reset()
    var mensagemErro = document.querySelector('#mensagem-erro')
    mensagemErro.innerHTML = ''
    
})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montarTr(paciente)
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function exibeMensagensErro(erros){
    var ul = document.querySelector('#mensagem-erro')

    ul.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente
}

function montarTr(paciente){
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}



function montaTd(dado, classe){
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td

}

function validaPaciente(paciente){

    var erros = []

    if (paciente.nome.length == 0){
        erros.push('o nome não pode ser em branco !')
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('peso é inválida!')
    }
    if(!validaAltura(paciente.altura)) {
        erros.push('altura inválida!') 
    }
    if(paciente.gordura.length == 0){
        erros.push('gordura não pode esta em branco !')
    }

    if(paciente.peso.length == 0){
        erros.push('peso não pode ser em branco !')
    }

    if(paciente.altura.length == 0){
        erros.push('altura não pode ser em branco !')
    }

    return erros
}