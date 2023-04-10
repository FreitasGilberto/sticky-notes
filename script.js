const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const notesContainer = document.querySelector('#notes');

function createNote() {
  // Creamos la nota
  const note = document.createElement('div');
  note.classList.add('note');

  // Creamos el título
  const title = document.createElement('h3');
  title.classList.add('note-title');
  title.textContent = titleInput.value;

  // Creamos la descripción
  const description = document.createElement('p');
  description.classList.add('note-text');
  description.textContent = descriptionInput.value;

  // Creamos el botón de eliminar
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.textContent = 'x';
  
  // Agregamos el título, descripción y botón de eliminar a la nota
  note.appendChild(title);
  note.appendChild(description);
  note.appendChild(deleteButton);

  // Agregamos la nota al contenedor de notas
  notesContainer.appendChild(note);

  // Limpiamos los inputs
  titleInput.value = '';
  descriptionInput.value = '';

  // Añadimos el evento click al botón de eliminar
  deleteButton.addEventListener('click', () => {
    note.remove();
  });
}

document.querySelector('#addButton').addEventListener('click', createNote);
