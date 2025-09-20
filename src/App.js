import React from 'react';
import PortfolioForm from './components/PortfolioForm';
import StudentTable from './components/StudentTable';
import GradeList from './components/GradeList';

function App() {
  return (
    <div style={{padding:'20px'}}>
      <h1>Portfolio TCAS69</h1>
      <PortfolioForm />
      <hr />
      <StudentTable />
      <hr />
      <GradeList />
    </div>
  );
}

export default App;
