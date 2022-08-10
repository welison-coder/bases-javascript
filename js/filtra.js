var campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function(){

    console.log(this.value)
    var pacintes = document.querySelectorAll('.paciente')
    for(var i = 0; i < pacientes.lengh ; i ++){
        var paciente = pacintes[i]
        var tdNome = paciente.querySelector(".info-nome")
        var nome = tdNome.textContent
        if(nome != this.value){
            paciente.classList.add("invisivel")
        }else{
            paciente.classList.remove("invisivel")
        }
    }
})