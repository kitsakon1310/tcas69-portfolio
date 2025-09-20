import React from 'react';
import { useGradeStore } from '../store/gradeStore';
import GradeList from './GradeList';

const StudentDetail = () => {
  const { grades, addGrade, calculateGPA } = useGradeStore();

  return (
    <div>
      <h2>รายวิชาและเกรด</h2>
      <GradeList onAddGrade={addGrade} />
      <ul>
        {grades.map((g, index) => (
          <li key={index} style={{ color: g.grade === 'F' ? 'red' : 'black' }}>
            {g.course}: {g.grade}
          </li>
        ))}
      </ul>
      <h3>GPA: {calculateGPA().toFixed(2)}</h3>
    </div>
  );
};

export default StudentDetail;
