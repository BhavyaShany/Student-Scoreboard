import React, { useState, useMemo } from 'react';
import ScoreboardMetrics from './components/ScoreboardMetrics';
import RegisterStudentForm from './components/RegisterStudentForm';
import StudentRecordTable from './components/StudentRecordTable';


const INITIAL_STUDENTS = [
  { id: 1, name: 'Aman', score: 78 },
  { id: 2, name: 'Riya', score: 45 },
  { id: 3, name: 'Karan', score: 90 },
  { id: 4, name: 'Neha', score: 32 },
];

export default function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  // Computed Properties via hook memoization
  const metrics = useMemo(() => {
    const total = students.length;
    if (total === 0) return { total: 0, passed: 0, avg: 0 };
    const passed = students.filter(s => s.score >= 40).length;
    const sum = students.reduce((acc, s) => acc + s.score, 0);
    return { total, passed, avg: Math.round(sum / total) };
  }, [students]);

  // Action methods
  const addStudent = (name, score) => {
    setStudents([...students, { id: Date.now(), name, score }]);
  };

  const saveScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, score: newScore } : s))
    );
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <span style={styles.subHeader}>ACADEMIC TERMINAL V2.0</span>
        <h1 style={styles.title}>STUDENT SCOREBOARD</h1>
      </header>

      <RegisterStudentForm onAddStudent={addStudent} />
      <ScoreboardMetrics {...metrics} />
      <StudentRecordTable students={students} onSaveScore={saveScore} />
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#0a0f1d', color: '#ffffff', fontFamily: 'monospace, sans-serif', padding: '2rem', minHeight: '100vh' },
  header: { textAlign: 'center', marginBottom: '2rem' },
  subHeader: { color: '#00ffcc', fontSize: '0.8rem', letterSpacing: '2px' },
  title: { color: '#00ffcc', fontSize: '2.5rem', margin: '0.5rem 0 0 0', textShadow: '0 0 10px rgba(0, 255, 204, 0.5)' },
};


