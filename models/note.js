export const Note = {
  create({ title = '', body = '' }) {
    return {
      id: Date.now(),
      title: title.trim() || 'Sin título',
      body: body.trim(),
      createdAt: new Date().toISOString()
    };
  }
};  
