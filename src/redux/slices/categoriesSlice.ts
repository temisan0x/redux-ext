import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { Category } from "../../api";

const categoriesAdapter = createEntityAdapter<Category>()

const slice = createSlice({
    name: "category",
    initialState: categoriesAdapter.getInitialState(),
    reducers: {
        addCategory: categoriesAdapter.addOne,
        removeCategory: categoriesAdapter.removeOne,
        updateCategory: categoriesAdapter.updateOne,
        setCategory: categoriesAdapter.setAll
    }
})

export const { actions } = slice;
export const selectors = categoriesAdapter.getSelectors();
export default slice.reducer;