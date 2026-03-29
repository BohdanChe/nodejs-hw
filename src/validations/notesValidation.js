import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';
import { tags } from '../contacts/tags.js';

const noteIdField = Joi.string()
  .custom((value, helpers) => (isValidObjectId(value) ? value : helpers.message('Invalid note ID')))
  .required();

export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
    tag: Joi.string().valid(...tags).optional(),
    search: Joi.string().allow('').optional(),
  }),
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: noteIdField,
  }),
};

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).required(),
    content: Joi.string().allow('').optional(),
    tag: Joi.string().valid(...tags).optional(),
  }),
};

export const updateNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: noteIdField,
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).optional(),
    content: Joi.string().allow('').optional(),
    tag: Joi.string().valid(...tags).optional(),
  }).min(1),
};
