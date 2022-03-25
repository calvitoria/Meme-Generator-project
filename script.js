// variáveis-constantes
const input = document.getElementById('text-input');
const imageInput = document.querySelector('#meme-insert');
const text = document.querySelector('#meme-text');
const img = document.querySelector('#meme-image');
const limparBtn = document.querySelector('#limpar-btn');
const container = document.querySelector('#meme-image-container');

// requisito 1 - Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.
// o que quero mostrar - input

let inputContainer = document.getElementById('meme-text');
input.addEventListener('input', function () {
    inputContainer.innerText = input.value;
});

// limparBtn.addEventListener('click', function () {
//     const input = document.getElementById('text-input');
//     input.value = '';
// });

//para fazer o upload da imagem
function geraImagem(event) {
    // container.style.border = '1px solid black';
    let novoCarregamento = event.target.files[0];
    img.src = URL.createObjectURL(novoCarregamento);
}

imageInput.addEventListener('change', geraImagem);

