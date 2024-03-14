// Función para crear un nuevo libro
function crearLibro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const editorial = document.getElementById('editorial').value;
    const genero = document.getElementById('genero').value;
    const año = document.getElementById('añoPubli').value;
    const disponible = document.getElementById('disponible').checked;

    const nuevoLibro = {
        titulo: titulo,
        autor: autor,
        editorial: editorial,
        genero: genero,
        añoPubli: año,
        disponible: disponible
    };

    fetch(`http://localhost:8081/biblioteca/nuevo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoLibro)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Libro creado:', data);
        cargarLibros(); // Recargar lista de libros después de la creación
  
    // Limpiar los campos del formulario después de agregar el libro
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('editorial').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('añoPubli').value = '';
    document.getElementById('disponible').checked = false;
    
    })
    .catch(error => console.error('Error al crear libro:', error));
}

// Función para actualizar un libro existente
function cargarLibros() {
    const options = {
        method: "GET",
    };

    fetch(`http://localhost:8081/biblioteca/todos`, options)
        .then(response => response.json()) // Parsea la respuesta como JSON
        .then(data => llenarTabla(data))
        .catch(error => console.error('Error al cargar libros:', error)); // Maneja errores
}

function actualizarLibro(id) {
    let nuevaTitulo = prompt("Nuevo titulo:");
    let nuevoAutor = prompt("Nuevo autor:");
    let nuevoEditorial = prompt("Nueva editorial:");
    let nuevoGenero = prompt("Nuevo genero:");
    let nuevoAño = prompt("Nuevo año de publicación:");

    let libro = {
        "id": id, 
        "titulo": nuevaTitulo,
        "autor": nuevoAutor,
        "editorial": nuevoEditorial,
        "genero": nuevoGenero,
        "añoPubli":  parseInt(nuevoAño)
    };

    const options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(libro)
    };

    fetch(`http://localhost:8081/biblioteca/modificar/${id}`, options) 
        .then(response => {
            if (response.ok) {
                cargarLibros();
                mostrarLibros();
            } else {
                throw new Error('Error al actualizar libro');
            }
        })
        .catch(error => console.error('Error al actualizar libro:', error)); // Maneja errores
}

function eliminarLibro(id) {
     // Realizar una solicitud GET para obtener los detalles del libro
     fetch(`http://localhost:8081/biblioteca/${id}`)
     .then(response => response.json())
     .then(libro => {
         // Mostrar los detalles del libro al usuario
         const confirmacion = confirm(`¿Seguro que deseas eliminar el libro "${libro.titulo}" de "${libro.autor}"?`);

         if (confirmacion) {
             // Se crea la solicitud DELETE con el ID del libro a eliminar
             const options = {
                 method: "DELETE"
             };

             // Se realiza la solicitud DELETE al servidor
             fetch(`http://localhost:8081/biblioteca/eliminar/${id}`, options)
                 .then(response => {
                     // Se verifica si la solicitud se completó correctamente
                     if (response.ok) {
                        mostrarLibros();
                        // Si la eliminación fue exitosa, recargar la lista de libros
                         cargarLibros();
                     } else {
                         // Si hubo un error en la eliminación, mostrar un mensaje de error
                         throw new Error('Error al eliminar libro');
                     }
                 })
                 .catch(error => console.error('Error al eliminar libro:', error)); // Manejar errores
         }
     })
     .catch(error => console.error('Error al obtener detalles del libro:', error)); // Manejar errores
}

function mostrarLibros() {
    fetch('http://localhost:8081/biblioteca/todos')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(libros => {
        // Obtener el elemento HTML donde se mostrarán los libros (por ejemplo, una tabla)
        const tablaLibros = document.getElementById('tablaLibros');

        // Limpiar la tabla de libros antes de agregar nuevos
        tablaLibros.innerHTML = '';

        // Iterar sobre la lista de libros y agregar cada uno a la tabla
        libros.forEach(libro => {
            // Crear una nueva fila para el libro
            const fila = document.createElement('tr');

            // Llenar la fila con los detalles del libro
            fila.innerHTML = `
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.editorial}</td>
                <td>${libro.genero}</td>
                <td>${libro.añoPubli}</td>
                <td>${libro.disponible ? 'Sí' : 'No'}</td>
                <td>
                    <button onclick="actualizarLibro(${libro.id})">Modificar</button>
                    <button onclick="eliminarLibro(${libro.id})">Eliminar</button>
                </td>
            `;

            // Agregar la fila a la tabla
            tablaLibros.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al mostrar libros:', error)); // Manejar errores
}
