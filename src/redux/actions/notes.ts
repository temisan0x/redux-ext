import * as NotesApi from "../../api";
import { actions as notesActions } from "../slices/notes";
import { AppDispatch, AppThunk } from "../store";

export const fetchNotes = (): AppThunk => async (dispatch: AppDispatch) => {
    try {
        const notes = await NotesApi.fetchNotes();
        //fetchnotes exported from notes resource api
        dispatch(notesActions.setNotes(notes));
    } catch (error) {
        throw error;
    }
};

export const addNotes =
    (note: NotesApi.NoteCreationProps): AppThunk =>
        async (dispatch: AppDispatch) => {
            try {
                const id = await NotesApi.addNote(note);
                const finalNote: NotesApi.Note = {
                    id,
                    completed: false,
                    ...note,
                };
                dispatch(notesActions.addNote(finalNote));
            } catch (error) {
                throw error;
            }
        };

export const removeNotes =
    (id: NotesApi.NoteId): AppThunk =>
        async (dispatch: AppDispatch) => {
            try {
                await NotesApi.deleteNote(id);
                dispatch(notesActions.deleteNote(id));
            } catch (error) {
                throw error;
            }
        };

export const updateNotes = (id: NotesApi.NoteId, changes:NotesApi.NoteEditableProps) => async (dispatch: AppDispatch) => {
    try {
        await NotesApi.editNote(id, changes);
        dispatch(notesActions.updateNote)
    } catch (error) {
        throw error;
    }
};

export const toggleNotes = (id: NotesApi.NoteId) => async (dispatch: AppDispatch) => {
    try {
        await NotesApi.toggleNote(id);
        dispatch(notesActions.toggleNote)

    } catch (error) {
        throw error;
    }
}