import {createSlice, createEntityAdapter, PayloadAction} from '@reduxjs/toolkit'
import { CategoryId, Note } from '../../api';

//Passed createEntityAdapter to the notesAdapter
const notesAdapter = createEntityAdapter<Note>();

const {reducer, actions, name} = createSlice({
    name: 'notes',
    initialState: notesAdapter.getInitialState(),
    reducers: {
        addNote: notesAdapter.addOne,
        deleteNote: notesAdapter.removeOne,
        updateNote: notesAdapter.updateOne,
        //payloadAction will combine the type and associated payload which is the categoryid
        //here, we will recreate a reducer that checks if our note is completed or not.
        toggleNote: (state, action: PayloadAction<CategoryId>): void => {
            const id = action.payload;
            const note = state.entities[id];//pasered Id to the state entity

            if (note) {
                notesAdapter.updateOne(
                    state,{id, changes: { completed: !note.completed }})
            }
        },
        setNotes: notesAdapter.setAll,
    }
})

export const slice = { reducer, actions, name } ;
//selector will grab the entire notes-state & pick out the values
//selectors basically improves the performance by 
export const selectors = notesAdapter.getSelectors();
export default slice.reducer;