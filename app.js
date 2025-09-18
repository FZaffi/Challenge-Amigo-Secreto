// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos=[];

/**
 * Agrega un nombre al array de amigos después de validar el campo de entrada.
 */
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    const inputNombre = document.getElementById('nombreAmigo');
    const nombre = inputNombre.value.trim();
    const errorMsg = document.getElementById('error-msg');

    // Limpiar mensaje de error previo
    errorMsg.textContent = '';

    // 2. Implementar la validación
    if (nombre === '') {
        errorMsg.textContent = 'Ingresar un nombre';
        return;
    }

    // 3. Validar que solo contenga letras (y espacios)
    const soloLetras = /^[a-zA-Z\s]+$/;
    if (!soloLetras.test(nombre)) {
        errorMsg.textContent = 'Por favor, ingresa solo letras.';
        return;
    }

    // 4. Actualizar el array y añadir el nombre
    amigos.push(nombre);
    
    // 5. Mostrar el nombre ingresado en la lista
    const lista = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    lista.appendChild(nuevoAmigo);

    console.log(`Amigo "${nombre}" agregado. Amigos:`, amigos);

    // 6. Restablecer el campo de texto a una cadena vacía
    inputNombre.value = '';
}

/**
 * Selecciona de manera aleatoria uno de los nombres del array de amigos.
 */
function sortearAmigo() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = ''; // Limpiar el resultado anterior
    const errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = ''; // Limpiar el mensaje de error

    // 1. Comprobar si el array está vacío
    if (amigos.length === 0) {
        errorMsg.textContent = 'No hay amigos para sortear. Agrega algunos nombres.';
        return;
    }

    // 2. Obtener el nombre de manera aleatoria
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // 3. Mostrar el resultado del amigo sorteado
    resultadoDiv.textContent = `¡El amigo sorteado es: ${amigoSorteado}! 🎉`;
}