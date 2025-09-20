import React, { useState } from 'react';

const GradeList = () => {
  const [grades, setGrades] = useState([]);
  const [course, setCourse] = useState('');
  const [grade, setGrade] = useState('');

  const handleAdd = () => {
    if (course && grade) {
      setGrades([...grades, { course, grade }]);
      setCourse('');
      setGrade('');
    }
  };

  const handleDelete = (index) => {
    const newGrades = [...grades];
    newGrades.splice(index, 1);
    setGrades(newGrades);
  };

  const gradePoints = {
    A: 4.0,
    'B+': 3.5,
    B: 3.0,
    'C+': 2.5,
    C: 2.0,
    'D+': 1.5,
    D: 1.0,
    F: 0.0,
    W: 0.0
  };

  const calculateGPA = () => {
    if (grades.length === 0) return 0;
    const total = grades.reduce((sum, g) => sum + (gradePoints[g.grade] || 0), 0);
    return (total / grades.length).toFixed(2);
  };

  return (
    <div>
      <h2>รายวิชาและเกรด</h2>
      <input
        type="text"
        placeholder="ชื่อวิชา"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
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
        <option value="W">W</option>
      </select>
      <button onClick={handleAdd}>เพิ่มรายวิชา</button>

      <ul>
        {grades.map((g, index) => (
          <li key={index} style={{ color: g.grade === 'F' ? 'red' : 'black' }}>
            {g.course}: {g.grade}{' '}
            <button onClick={() => handleDelete(index)}>ลบ</button>
          </li>
        ))}
      </ul>

      <button>คำนวณ GPA</button>
      <p>GPA: {calculateGPA()}</p>
    </div>
  );
};

export default GradeList;
