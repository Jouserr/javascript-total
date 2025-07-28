async function agregarRegistro(nombre, datosPersonales) {
    try {
        const respuesta = await fetch('https://api.restful-api.dev/objects', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: nombre,
                data: datosPersonales,
            }),
        });
        if (!respuesta.ok) {
            throw new Error("Error en la solicitud: " + respuesta.status + " " + respuesta.statusText);
        }
        const data = await respuesta.json();
        document.getElementById('respuesta').textContent =
            `Registro creado: ${data.name} - Edad: ${data.data.edad}, Email: ${data.data.email}, Contenido: ${data.data.contenido}`;
    } catch (error) {
        document.getElementById('respuesta').textContent = "Error al crear el registro: " + error.message;
    }
}

document.getElementById('formPost').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('titulo').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const contenido = document.getElementById('contenido').value;
    agregarRegistro(nombre, { edad, email, contenido });
});