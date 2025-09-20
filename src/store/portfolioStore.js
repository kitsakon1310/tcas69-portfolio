import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({
  students: [], // เก็บ Portfolio ทั้งหมด
  addStudent: (student) => set((state) => ({
    students: [...state.students, student]
  })),
}));
