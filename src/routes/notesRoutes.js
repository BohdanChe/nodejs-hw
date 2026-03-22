import { Router } from 'express';

import { createNote, getAllNotes,getNoteById ,deleteNote} from '../controllers/notesControllers.js';

const router = Router();


router.get('/notes', getAllNotes);

router.get('/notes/:noteId', getNoteById);

router.post('/notes', createNote);

router.delete('/notes/:noteId', deleteNote);

export default router; 