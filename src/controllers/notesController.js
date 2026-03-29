import { Note } from '../models/note.js';   
import createHttpError    from 'http-errors';

export const getAllNotes = async (req, res) => {
  const { page = 1, perPage = 10, tag, search } = req.query;

  const currentPage = Number(page);
  const itemsPerPage = Number(perPage);
  const skip = (currentPage - 1) * itemsPerPage;

  const filter = {};

  if (tag) {
    filter.tag = tag;
  }

  if (search) {
    filter.$text = { $search: search };
  }

  const [totalNotes, notes] = await Promise.all([
    Note.countDocuments(filter),
    Note.find(filter).skip(skip).limit(itemsPerPage),
  ]);

  const totalPages = Math.ceil(totalNotes / itemsPerPage);

  res.status(200).json({
    page: currentPage,
    perPage: itemsPerPage,
    totalNotes,
    totalPages,
    notes,
  });
};

export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId);

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
}

//post /notes Body
export const createNote = async (req, res) => {
  console.log(req.body);
  const note = await Note.create(req.body);
  res.status(201).json(note);
};

//delete /notes/:noteId
export const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  
  const note = await Note.findOneAndDelete({
    _id: noteId
  });
  console.log(note);
  
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  
  res.status(200).json(note);
  
}

//patch /notes/:noteId Body
export const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findOneAndUpdate(
    {
      _id: noteId
    }, req.body,
    { returnDocument: 'after' });
  
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
} 