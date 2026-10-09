// ===== BOTÃO DO MODO ESCURO =====
const botao = document.querySelector("#btn");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


    
function mascara_nome() {
    var nome = document.getElementById("nome").value;
    document.getElementById("nome").value = nome.replace(/[^A-Za-zÀ-ÿ ]/g, "");
}


function mascara_telefone() {
    var tel_formatado = document.getElementById("telefone").value;

    if (tel_formatado[2] != "(") {
        if (tel_formatado[2] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 2) + "(" + tel_formatado[2];
        }
    }

    if (tel_formatado[5] != ")") {
        if (tel_formatado[5] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 5) + ")" + tel_formatado[5];
        }
    }

    if (tel_formatado[11] != "-") {
        if (tel_formatado[11] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 11) + "-" + tel_formatado[11];
        }
    }
}


function msg() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if (nome == "" || telefone == "" || !email.includes("@") || !email.includes(".")) {
        alert("Preencha nome, e-mail válido e telefone.");
    } else {
        alert("Informações salvas com sucesso");
    }
}
