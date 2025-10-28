import { Router } from './core/nano-router.js';
import { notesPage } from './pages/notes/notes.js';

const router = new Router('#main-content');

router.register('/', notesPage);
router.register('/notes', notesPage);

router.init();
window.router = router;