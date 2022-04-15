import { v4 as uuid } from 'uuid'
import { CategoryId, later } from '../index';

type NoteId = string;
type NoteTitle = string;
type NoteContent = string;
type NoteCompleted = boolean;
export enum NotePriorityEnum {
    LOW = 'Low',
    MEDIUM = 'Meduim',
    HIGH = 'High'
}; //enumeration 


interface Note {
    id: NoteId;
    tile: NoteTitle;
    content: NoteContent;
    completed: NoteCompleted;
    priority: NotePriorityEnum;
    CategoryIds?: CategoryId[];
}

//creating note reusable props
interface NoteCreationProps {
    content: NoteContent;
    priority: NotePriorityEnum;
    categoryIds?: CategoryId[]
}

// type for edit notes 
type NoteEditableProps = Partial<NoteCreationProps> & { completed: NoteCompleted };

type NoteWithChildEntities = Note & { categories: CategoryId[] };

//fetch the notes data from the note interface
async function fetchNote(ids?:NoteId[]):Promise<Note[]> {
    await later(200);
    return []; //here we add an empty array
}

//add notes to the new id
async function addNote(ids?:NoteCreationProps):Promise<NoteId> {
    await later(200);
    return uuid();
}

//edit notes from the id
async function editNote(ids?:NoteEditableProps):Promise<void> {
    await later(200);
}
console.log(editNote);


//delete note from the id
async function deleteNote(ids?: NoteId):Promise<void>{
    await later(200);
}

//toggle ~ complete or uncomplete
async function toggleNote(ids?:NoteId):Promise<void> {
    await later(200)
}