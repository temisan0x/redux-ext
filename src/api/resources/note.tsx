import { v4 as uuid } from 'uuid'
import { CategoryId, later } from '../index';
import { Category } from './categories';

export type NoteId = string;
export type NoteTitle = string;
export type NoteContent = string;
export type NoteCompleted = boolean;
export enum NotePriorityEnum {
    LOW = 'Low',
    MEDIUM = 'Meduim',
    HIGH = 'High'
}; //enumeration 

//passed note types to the note interface
export interface Note {
    id: NoteId;
    title: NoteTitle;
    content: NoteContent;
    completed: NoteCompleted;
    priority: NotePriorityEnum;
    CategoryIds?: CategoryId[];
}

//creating note reusable props
export interface NoteCreationProps {
    title: NoteTitle;
    content: NoteContent;
    priority: NotePriorityEnum;
    categoryIds?: CategoryId[]
}

// type for edit notes 
export type NoteEditableProps = Partial<NoteCreationProps> & { completed: NoteCompleted };

//created a child entitiies ~ importing category[]: comprising of the id & content
export type NoteWithChildEntities = Note & { categories: Category[] };

//fetch the notes data from the note interface
export async function fetchNote(ids?:NoteId[]):Promise<Note[]> {
    await later(200);
    return []; //here we add an empty array
}

//add notes to the new id
export async function addNote(id:NoteCreationProps):Promise<NoteId> {
    await later(200);
    return uuid();
}

//edit has two parameters, id  & changes
async function editNote(id: NoteId, changes:NoteEditableProps):Promise<void> {
    await later(200);
}

//delete note from the id
async function deleteNote(id: NoteId):Promise<void>{
    await later(200);
}

//toggle ~ complete or uncomplete
async function toggleNote(id?:NoteId):Promise<void> {
    await later(200)
}