export const later = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export * from './resources/categories';
export * from './resources/note'