const STORAGE_VERSION = 'v1';
const STORAGE_PREFIX = 'notes_app';   // cambiado para no colisionar

function buildKey(key) {
  return `${STORAGE_PREFIX}:${STORAGE_VERSION}:${key}`;
}

export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(buildKey(key));
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Error al leer de localStorage:', e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(buildKey(key), JSON.stringify(value));
    } catch (e) {
      console.error('Error al escribir en localStorage:', e);
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(buildKey(key));
    } catch (e) {
      console.error('Error al eliminar de localStorage:', e);
    }
  },

  clear() {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k.startsWith(`${STORAGE_PREFIX}:`)) keys.push(k);
      }
      keys.forEach(k => localStorage.removeItem(k));
    } catch (e) {
      console.error('Error al limpiar localStorage:', e);
    }
  }
};