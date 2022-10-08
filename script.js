const textQuote = document.querySelector('#textQuote');
const authQuote = document.querySelector('#authQuote');
const button = document.querySelector('#newQuote');
const clipBoard = document.querySelector('#clipboard');

const colocaNaTela = (text, author) => {
    textQuote.innerText = text;

    if(!author) {
        authQuote.innerText = 'unknown author';
        return;
    }
    authQuote.innerText = author;
}

const randomizaNumero = (tamanhoArray) => {
   return Math.floor(Math.random() * tamanhoArray - 1);
}

const fazRequisicao = async () => {
    colocaNaTela('Loading...', 'Loading...')
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const numeroRandomico = randomizaNumero(data.length);
    colocaNaTela(data[numeroRandomico].text, data[numeroRandomico].author);
}

const copiaParaOClipBoard = () => {
    const text = textQuote.innerText;
    const author = authQuote.innerText;
    const message = `"${text}" - ${author}`;
    
    console.log(message);
    navigator.clipboard.writeText(message)
}

button.addEventListener('click', fazRequisicao);
clipBoard.addEventListener('click', copiaParaOClipBoard)
fazRequisicao();
