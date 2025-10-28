export function createSidebarItem(note, isActive, onSelect) {
  const li = document.createElement('li');
  li.dataset.id = note.id;
  li.className = 'sidebar-item';

  if (isActive) {
    li.classList.add('active');
  }

  li.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.body.slice(0, 60)}${note.body.length > 60 ? '…' : ''}</p>
    <span>Creada el ${new Date(note.createdAt).toLocaleDateString('es-ES')}</span>
  `;

  // Event listener para seleccionar esta nota
  li.addEventListener('click', () => {
    onSelect(note.id);
  });

  return li;
}