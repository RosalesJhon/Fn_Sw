const continueButton = document.getElementById('continue-btn');
let currentFieldIndex = 0;
const fields = [
    'nombres',
    'apellidos',
    'telefono',
    'correo',
    'contrasena',
    'contrasena2'
];

continueButton.addEventListener('click', showNextField);

function showNextField() {
    if (currentFieldIndex < fields.length) {
        const currentFieldId = fields[currentFieldIndex];
        const currentInput = document.getElementById(currentFieldId);

        // Oculta el campo y la etiqueta actual
        currentInput.style.display = 'none';
        document.querySelector(`label[for="${currentFieldId}"]`).style.display = 'none';

        currentFieldIndex++;

        if (currentFieldIndex < fields.length) {
            const nextFieldId = fields[currentFieldIndex];
            const nextInput = document.getElementById(nextFieldId);
            nextInput.style.display = 'block';
            document.querySelector(`label[for="${nextFieldId}"]`).style.display = 'block';
        } else {
            alert('Formulario enviado');
            const form = document.getElementById('step-form');
            form.submit();
        }
    }
}