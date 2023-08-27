const texto = document.getElementById('text');
const formContainer = document.querySelector('.form-container');
const text = 'Bienvenido a JhonChat';
let index = 0;

function typeText() {
    if (index < text.length) {
        texto.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    } else {
        formContainer.style.display = 'block';
    }
}

typeText();