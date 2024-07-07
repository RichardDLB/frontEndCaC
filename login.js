document.getElementById('formularioLogin').addEventListener('submit', function (event) {
  event.preventDefault();


  var formData = new FormData(this);

  fetch('http://localhost:8080/trenAlSur/login', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json(); // Parsea la respuesta como JSON
    })
    .then(data => {
      console.log('Respuesta:', data); // Maneja la respuesta aquí
    })
    .catch(error => {
      console.error('Error:', error); // Maneja errores aquí
    });


});