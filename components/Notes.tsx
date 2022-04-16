import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNotes } from '../src/redux/hooks/notes';
import {
    addNotes as addNoteAction,
    fetchNotes as fetchNotesAction,
    toggleNotes as toggleNoteAction,
    removeNotes as removeNotesAction
} from '../src/redux/actions/notes'

const Todos: React.FC = () => {
    const dispatch = useDispatch();

    //notes
    const notes = useNotes();
    const [isNotesLoading, setIsNotesLoading] = useState<boolean>(true)
    const [isNotesFetchFailed, setIsNotesFetchFailed] = useState<boolean>(false)

    //note fetching
    const fetchNotes = async (): Promise<void> => {
        try {
            setIsNotesLoading(true);
            await dispatch(fetchNotesAction());
            setIsNotesLoading(false);
            setIsNotesFetchFailed(false)
        } catch (error) {
            setIsNotesFetchFailed(true);
            setIsNotesLoading(false);
        }
    }


    return (
        <div>Todos:</div>
    );
};

export default Todos;