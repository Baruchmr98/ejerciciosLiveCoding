//     .catch( error => console.error("error en la solicitud", error));
document.addEventListener('DOMContentLoaded', () => {
    // Paso 1: Crear la función fetchAnswer
    const fetchAnswer = async () => {
      try {
        // Realizar la petición al API
        const response = await fetch(API_ENDPOINT);
        
        // Verificar si la petición fue exitosa (código 200)
        if (response.ok) {
          // Convertir la respuesta a formato JSON
          const data = await response.json();
          
          // Paso 2: Mostrar la respuesta en el HTML
          const answerDiv = document.getElementById('answer');
          answerDiv.textContent = data.answer;
  
          // Paso 4: Limpiar la pregunta y la respuesta después de 5 segundos
          setTimeout(() => {
            document.getElementById('input').value = '';
            answerDiv.textContent = '';
          }, 5000);
        } else {
          throw new Error('Error en la petición al API');
        }
      } catch (error) {
        console.error(error);
        // Manejar el error, podrías mostrar un mensaje al usuario
      }
    };
  
    // Paso 3: Agregar fetchAnswer a un eventListener
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      // Validar que el input no esté vacío (Bonus)
      const input = document.getElementById('input');
      if (input.value.trim() !== '') {
        fetchAnswer();
      } else {
        document.getElementById('error').textContent = 'Por favor, ingresa una pregunta.';
      }
    });
  
    // Bonus: Limpiar el mensaje de error cuando se comienza a escribir en el input
    const input = document.getElementById('input');
    input.addEventListener('input', () => {
      document.getElementById('error').textContent = '';
    });
  
    // Bonus: Validar que no se pueda dar click al botón si el input está vacío
    input.addEventListener('keyup', () => {
      const buttonDisabled = input.value.trim() === '';
      button.disabled = buttonDisabled;
    });
  });
  


