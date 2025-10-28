import { $, on, signal, computed } from '../../core/nano-ui.js';
import { storage } from '../../core/storage.js';
import { Note } from '../../models/note.js';
import { createSidebar } from '../../components/sidebar.js';
import { setupNoteHeader, updateStatusIndicator } from '../../components/note-header.js';

export const notesPage = {
  html: '/pages/notes/notes.html',

  init() {
    // Estado
    const notes = signal(storage.get('notes', []));
    const activeId = signal(null);

    const activeNote = computed(() =>
      notes.value.find(n => n.id === activeId.value)
    );

    // Render sidebar
    function renderSidebar() {
      createSidebar(
        notes.value,
        activeId.value,
        handleNewNote,
        handleSelectNote
      );
    }

    // Handler: Nueva nota
    function handleNewNote() {
      const note = Note.create({ title: 'Nueva nota', body: '' });
      notes.value = [note, ...notes.value];
      activeId.value = note.id;
      renderSidebar();
      fillEditor();
      updateStatusIndicator('Creada');
    }

    // Handler: Seleccionar nota
    function handleSelectNote(id) {
      activeId.value = id;
      renderSidebar();
      fillEditor();
      updateStatusIndicator('Viendo');
    }

    // Handler: Guardar nota
    function handleSave() {
      const idx = notes.value.findIndex(n => n.id === activeId.value);
      if (idx === -1) return;

      notes.value[idx] = {
        ...notes.value[idx],
        title: $('#note-title').value,
        body: $('#note-body').value
      };

      notes.value = [...notes.value];
      storage.set('notes', notes.value);
      updateStatusIndicator('Guardada');
      renderSidebar();
    }

    // Handler: Eliminar nota
    function handleDelete() {
      if (!confirm('¿Borrar nota?')) return;
      notes.value = notes.value.filter(n => n.id !== activeId.value);
      storage.set('notes', notes.value);
      activeId.value = notes.value[0]?.id || null;
      renderSidebar();
      fillEditor();
    }

    // Rellenar editor
    function fillEditor() {
      const n = activeNote.value;
      $('#note-title').value = n?.title || '';
      $('#note-body').value = n?.body || '';
    }

    // Inicializar
    renderSidebar();
    fillEditor();

    // Setup header events
    setupNoteHeader(handleSave, handleDelete);

    // Mostrar "Editando..." cuando se escribe
    on('#note-title', 'input', () => {
      updateStatusIndicator('Editando...');
    });

    on('#note-body', 'input', () => {
      updateStatusIndicator('Editando...');
    });

    // Cleanup
    let t;
    return () => clearTimeout(t);
  }
};
