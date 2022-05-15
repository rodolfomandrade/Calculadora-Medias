var notas = document.querySelectorAll(".materia");

var botaoAdicionar = document.querySelector("#botao-enviar");
// Estamos fazendo o DOM escutar o evento de click no botão no HTML e executar uma ação
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();// Previne o comportamento de Reload na página
    
    // Obter os dados do formulário do HTML
    var form = document.querySelector("#formulario-notas");
    // Obter as notas do form que acabamos de pegar do HTML
    var notasMateria = obterNotas(form);
    console.log(notasMateria);
    var erro = notaExiste(notasMateria);
    if(erro.length > 0){
        exibeErros(erro);
        return;
    }
    erro = validaNota(notasMateria);
    if(erro.length > 0){
        exibeErros(erro);
        return;
    }
    // Adicionando as notas já editadas na tabela do HTML
    adicionarNotasTabela(notasMateria);

    form.reset();
    var mensagemErro = document.querySelector("#lista-erros");
    mensagemErro.innerHTML = ""
})

// Iremos extrair as notas do formulário de forma organizada em forma de Objeto
function obterNotas(formulario){
    var notas = {
        materia: formulario.selectMateria.value,
        primeira: formulario.nota1.value,
        segunda: formulario.nota2.value,
        terceira: formulario.nota3.value,
        quarta: formulario.nota4.value,
        media: calcularMedia(formulario.nota1.value, formulario.nota2.value, formulario.nota3.value, formulario.nota4.value)
    }

    return notas;
}

// Iremos adicionar as notas na tabela de forma automática ao clicar no botão
function adicionarNotasTabela(notasMateria){
    var notaTr = montaTr(notasMateria);
    var tabela = document.querySelector("#tabela-notas");
    tabela.appendChild(notaTr);
}

// Iremos montar a linha tr na tabela com todos os dados necessários(notas)
function montaTr(notasMateria){
    var notaTr = document.createElement("tr");
    notaTr.classList.add("materia");

    notaTr.appendChild(montaTh(notasMateria.materia, "nome-materia"))
    notaTr.appendChild(montaTd(notasMateria.primeira, "notaB1"));
    notaTr.appendChild(montaTd(notasMateria.segunda, "notaB2"));
    notaTr.appendChild(montaTd(notasMateria.terceira, "notaB3"));
    notaTr.appendChild(montaTd(notasMateria.quarta, "notaB4"));
    notaTr.appendChild(montaTd(notasMateria.media, "media-final"));

    return notaTr;
}

// Iremos montar os dados da tabela e coloca-los na linha no montaTr
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

// Iremos montar o nome da matéria como th pois ela não é um simples dado
function montaTh(dado, classe){
    var th = document.createElement("th");
    th.textContent = dado;
    th.classList.add(classe);

    return th;
}