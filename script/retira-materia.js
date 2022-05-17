var opcao = document.querySelectorAll(".opcao")
console.log(opcao)

function tiraMateria(opcao){
    var selecionado = document.querySelector("#selectMateria").value;
    if(selecionado == "Física"){
        opcao[0].remove();
    }
    if(selecionado == "Matemática"){
        opcao[1].remove();
    }
    if(selecionado == "Química"){
        opcao[2].remove();
    }
    if(selecionado == "Português"){
        opcao[3].remove();
    }
    if(selecionado == "Inglês"){
        opcao[4].remove();
    }
    if(selecionado == "Biologia"){
        opcao[5].remove();
    }
    if(selecionado == "Geografia"){
        opcao[6].remove();
    }
    if(selecionado == "Filosofia"){
        opcao[7].remove();
    }
    if(selecionado == "Sociologia"){
        opcao[8].remove();
    }
    if(selecionado == "História"){
        opcao[9].remove();
    }
    
}