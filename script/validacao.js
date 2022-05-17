function validaNota(notasMateria){
    var erros = [];

    if(notasMateria.primeira <= 0 || notasMateria.primeira > 10){
        erros.push("A Primeira nota é inválida")
    }

    if(notasMateria.segunda <= 0 || notasMateria.segunda > 10){
        erros.push("A Segunda nota é inválida")
    }

    if(notasMateria.terceira <= 0 || notasMateria.terceira > 10){
        erros.push("A Terceira nota é inválida")
    }

    if(notasMateria.quarta <= 0 || notasMateria.quarta > 10){
        erros.push("A Quarta nota é inválida")
    }

    return erros;
}

function notaExiste(notasMateria){
    var existe = [];
    
    if(notasMateria.primeira.length == 0){
        existe.push("A Primeira nota não pode ser em branco")
    }

    if(notasMateria.segunda.length == 0){
        existe.push("A Segunda nota não pode ser em branco")
    }

    if(notasMateria.terceira.length == 0){
        existe.push("A Terceira nota não pode ser em branco")
    }

    if(notasMateria.quarta.length == 0){
        existe.push("A Quarta nota não pode ser em branco")
    }

    return existe;
}

function exibeErros(erro){
    var ul = document.querySelector("#lista-erros");
    ul.innerHTML = "";

    erro.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
