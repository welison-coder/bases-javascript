var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener("click", function(){
    //https://api-pacientes.herokuapp.com/pacientes

    var xhr = new XMLHttpRequest()

    xhr.open("get", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener('load', function(){

        if (xhr.status == 200){
           var resposta = xhr.responseText

        var paciente = JSON.parse(resposta)
        
        paciente.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente)
        }); 
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
        }
        
    })

    xhr.send()
})