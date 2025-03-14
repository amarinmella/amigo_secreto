// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual de amigos
    actualizarListaAmigos();
    
    // Enfocar el campo de entrada para facilitar la adición de más nombres
    inputAmigo.focus();
}

/**
 * Función para actualizar la lista visual de amigos
 */
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';
    
    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento de lista para cada amigo
        const itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        
        // Agregar el elemento a la lista
        listaAmigos.appendChild(itemLista);
    }
}

/**
 * Función para sortear un amigo aleatorio
 */
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('Necesitas agregar al menos un nombre antes de sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

/**
 * Función para limpiar el formulario y reiniciar la aplicación
 */
function limpiarFormulario() {
    // Vaciar el array de amigos
    amigos = [];
    
    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
    
    // Actualizar la lista visual (quedará vacía)
    actualizarListaAmigos();
    
    // Limpiar el resultado del sorteo
    document.getElementById('resultado').innerHTML = '';
}

// Añadir evento para permitir que el usuario presione Enter en el campo de texto
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});