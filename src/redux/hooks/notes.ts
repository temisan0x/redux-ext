import { useSelector } from "react-redux";
import { selectors as notesSelector } from '../slices/notes';
import { RootState } from '../store';
import { NoteId, Note } from '../../api';

export function useNotes(): Note[]{
    return useSelector(
        (state:RootState) => notesSelector.selectAll(state.notes)
    )
}

export function useNote(id:NoteId):Note | undefined {
    return useSelector(
        (state:RootState) => notesSelector.selectById(state.notes,id)
    )
}