import { $ } from '../core/nano-ui.js';

export function setupNoteHeader(onSave, onDelete) {
  // Event listener para guardar
  $('#save-btn').addEventListener('click', onSave);

  // Event listener para eliminar
  $('#delete-btn').addEventListener('click', onDelete);
}

export function updateStatusIndicator(message) {
  $('#saved-indicator').textContent = message;
}