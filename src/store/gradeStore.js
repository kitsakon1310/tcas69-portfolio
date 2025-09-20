import create from 'zustand';

export const useGradeStore = create((set) => ({
  grades: [],
  addGrade: (grade) => set((state) => ({ grades: [...state.grades, grade] })),
  calculateGPA: () => {
    const gradePoints = {
      A: 4.0,
      'B+': 3.5,
      B: 3.0,
      'C+': 2.5,
      C: 2.0,
      'D+': 1.5,
      D: 1.0,
      F: 0.0,
    };
    const totalPoints = state.grades.reduce(
      (acc, { grade }) => acc + gradePoints[grade],
      0
    );
    return totalPoints / state.grades.length || 0;
  },
}));
