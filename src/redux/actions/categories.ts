import * as NotesApi from '../../api';
import { actions as CategoriesActions } from '../slices/categories';
import { AppDispatch, AppThunk } from '../store';

export const fetchCategories = (): AppThunk => async (dispatch: AppDispatch) => {
    try {
        const categories = await NotesApi.fetchCategories();
        dispatch(CategoriesActions.setCategory(categories));
    } catch (error) {
        throw (error)
    }
}

export const addCategory = (category: NotesApi.NoteCreationProps): AppThunk => async (dispatch: AppDispatch) => {
    try {
        const id = await NotesApi.addCategory(category);
        const finalCategory: NotesApi.Category = {
            id, ...category,
        };
        dispatch(CategoriesActions.addCategory(finalCategory))
    } catch (error) {
        throw (error)
    }
}

export const removeCategory = (id: NotesApi.CategoryId): AppThunk => async (dispatch: AppDispatch) => {
    try {
        await NotesApi.deleteCategory(id);
        dispatch(CategoriesActions.removeCategory(id))
    } catch (error) {
        throw (error);
    }
}

export const updateCategory = (id: NotesApi.CategoryId, changes: NotesApi.CategoryEditableProps) => async (dispatch: AppDispatch) => {
    try {
        await NotesApi.updateCategory(id, changes);
        dispatch(CategoriesActions.updateCategory({ id, changes }));
    } catch (error) {
        throw (error);
    }
}