import React, { useState } from 'react';

const GradeList = ({ onAddGrade }) => {
  const [course, setCourse] = useState('');
  const [grade, setGrade] = useState('');

  const handleAdd = () => {
    if (course && grade) {
      onAddGrade({ course, grade });
      setCourse('');
      setGrade('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="ชื่อวิชา"
      />
      <select value={grade} onChange={(e) => setGrade(e.target.value)}>
        <option value="">เลือกเกรด</option>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
      <button onClick={handleAdd}>เพิ่มวิชา</button>
    </div>
  );
};

export default GradeList;
