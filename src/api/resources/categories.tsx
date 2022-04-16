import { v4 as uuid } from 'uuid';

import { later } from '..';

export type CategoryId = string;
export type CategoryContent = string;

export interface Category {
    id: CategoryId;
    content: CategoryContent;
}

export interface CategoryContentProps {
    content: CategoryContent;
}   //pass content to create new category

export type CategoryEditableProps = Partial<CategoryContentProps>; //pass content to editable

export async function fetchCategories(ids?: CategoryId[]):
    Promise<Category[]> {
    await later(200);
    const DEFAULT_CATEGORIES: Category[] = [
        { content: 'study', id: '1' },
        { content: 'meditation', id: '2' },
        { content: 'todos', id: '3' },
    ];
    return [...DEFAULT_CATEGORIES]
}

export async function addCategory(category: CategoryContentProps): Promise<CategoryId> {
    await later(200);
    return uuid()
}

export async function deleteCategory(id: CategoryId): Promise<void> {
    await later(200);
}

export async function updateCategory(id: CategoryId, changes: CategoryEditableProps): Promise<void> {
    await later(200);
}