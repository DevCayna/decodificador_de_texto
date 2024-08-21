const textArea = document.querySelector(".apresentacao__conteudo__textarea");
const mensagem = document.querySelector(".container__mensagem__textarea");


/*As "chaves" de criptografia que utilizaremos A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/


//Criptografar

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
    return stringEncriptada;
}


// Descriptografar

function btnDescriptar() {
    const textoDescriptado = descriptar(textArea.value);
    mensagem.value = textoDescriptado;
    textArea.value = "";
}

function descriptar(stringDescriptada) {

    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }
    return stringDescriptada;
}


// Copiar

function copiar(){
    navigator.clipboard
    .readText()
    .then(
        (clipText) => (document.querySelector(".container__mensagem__textarea").innerText += clipText),
    );
}