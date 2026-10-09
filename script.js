
const botao = document.querySelector("#btn");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const enviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

enviar.addEventListener("click", () => {
    if (email.value.includes("@") && email.value.includes(".")) {
        mensagem.textContent = "Obrigado! Entrarei em contato.";
    } else {
        mensagem.textContent = "Digite um e-mail válido.";
    }
});