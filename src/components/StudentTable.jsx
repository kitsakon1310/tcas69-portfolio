import React, { useState } from 'react';
import { usePortfolioStore } from '../store/portfolioStore';

const StudentTable = () => {
  const students = usePortfolioStore(state => state.students);
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = [...students].sort((a, b) => sortAsc ? a.gpa - b.gpa : b.gpa - a.gpa);

  const viewDetail = (student) => {
    alert(JSON.stringify(student, null, 2));
  };

  return (
    <div>
      <h2>รายชื่อนักเรียน</h2>
      <table border="1" cellPadding="5" style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr>
            <th>ชื่อ</th>
            <th>นามสกุล</th>
            <th onClick={() => setSortAsc(!sortAsc)} style={{cursor:'pointer'}}>
              GPA {sortAsc ? '▲' : '▼'}
            </th>
            <th>รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s, i) => (
            <tr key={i}>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.gpa}</td>
              <td>
                <button onClick={() => viewDetail(s)}>ดูรายละเอียด</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
