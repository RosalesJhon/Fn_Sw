const texto = document.getElementById('text');
const formContainer = document.querySelector('.inicios-resientes');
const text = 'JhonChat';
let index = 0;

function typeText() {
    if (index < text.length) {
        texto.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 200);
    } else {
        formContainer.style.display = 'block';
    }
}

typeText();