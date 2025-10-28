# Nano Notes

**Aplicación simple de notas con almacenamiento local y edición en tiempo real.**

---

## 📌 Descripción

Nano Notes es una aplicación web minimalista para crear, editar y gestionar notas. Utiliza almacenamiento local del navegador para guardar las notas, permitiendo al usuario crear, editar, guardar y eliminar notas de forma sencilla e intuitiva.

---

## 🛠 Tecnologías Utilizadas

- **JavaScript Vanilla** (ES6+)
- **HTML5** y **CSS3**
- **Almacenamiento local** (`localStorage`)
- **Remix Icons** para los iconos
- **Google Fonts** (Inter)

---

## 📂 Estructura del Proyecto

| Carpeta/Archivo         | Descripción                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| `index.html`            | Página principal de la aplicación.                                          |
| `app.js`                | Configuración del router y navegación.                                      |
| `pages/notes/`          | Lógica y vista de la página de notas.                                       |
| `models/note.js`        | Modelo de datos para las notas.                                             |
| `components/`           | Componentes reutilizables (sidebar, note-header, sidebar-item).            |
| `core/`                 | Utilidades y librerías personalizadas (nano-ui, nano-router, storage).     |
| `styles.css`            | Estilos principales de la aplicación.                                       |

---

## 🔧 Funcionalidades

- **Crear notas:** Añadir nuevas notas con título y contenido.
- **Editar notas:** Modificar título y contenido de las notas existentes.
- **Guardar notas:** Las notas se guardan automáticamente en el almacenamiento local.
- **Eliminar notas:** Borrar notas no deseadas.
- **Selección de notas:** Navegar entre las notas existentes.
- **Indicador de estado:** Muestra el estado actual de la nota (guardada, editando, etc.).

---

## 📱 Vista Previa

- **Barra lateral:** Lista todas las notas creadas.
- **Editor:** Permite editar el título y contenido de la nota seleccionada.
- **Botones de acción:** Guardar, eliminar y crear nuevas notas.

---

## 🚀 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/nano-notes.git
   ```

2. **Abrir el proyecto:**
   - Abre el archivo `index.html` en tu navegador favorito.

3. **Usar la aplicación:**
   - Crea una nueva nota con el botón **+**.
   - Selecciona una nota para editarla.
   - Guarda los cambios con el botón de guardar o elimínala si ya no la necesitas.

---

## 📝 Ejemplo de Uso

1. Haz clic en el botón **+** para crear una nueva nota.
2. Escribe un título y contenido.
3. Guarda la nota con el botón de guardar.
4. Selecciona otra nota para editarla o elimínala si es necesario.

---

## 📸 Capturas de Pantalla

*(Puedes agregar capturas de pantalla aquí si las tienes)*

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un **commit** (`git commit -m "Añade nueva funcionalidad"`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un **Pull Request**.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

---

## 💬 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **GitHub:** [@mklderon](https://github.com/mklderon)
- **Correo:** mario.alvarezcalderon82@gmail.com

---
Hecho con ❤️ por [Mario Alvarez](https://github.com/mklderon/nano-todo).
