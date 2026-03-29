import {Schema,model} from "mongoose";
import { tags } from '../contacts/tags.js';


const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
        default: '',
    },
    tag: {
        type: String,
        enum: tags,
        default: 'Todo',
    },
},
    {
        timestamps: true,
    },
 
);

export const Note = model("Note", noteSchema);

 
