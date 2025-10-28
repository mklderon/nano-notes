import { $ } from '../core/nano-ui.js';
import { createSidebarItem } from './sidebar-item.js';

export function createSidebar(notes, activeId, onNewNote, onSelectNote) {
  const ul = document.createElement('ul');
  ul.className = 'note-list';

  // Crear cada item del sidebar usando el componente
  notes.forEach(note => {
    const li = createSidebarItem(note, note.id === activeId, onSelectNote);
    ul.appendChild(li);
  });

  // Crear estructura del sidebar
  $('#sidebar').innerHTML = `
    <div class="sidebar-header">
      <h2>Nano Notes</h2>
      <button id="new-note" class="btn"><i class="ri-file-add-line"></i></button>
    </div>
  `;
  $('#sidebar').appendChild(ul);

  // Event listener para botón de nueva nota
  $('#new-note').addEventListener('click', onNewNote);
}
