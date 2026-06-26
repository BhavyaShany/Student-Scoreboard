import React, { useState } from 'react';

export default function RegisterStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || score === '') return;

    const scoreNum = parseInt(score, 10);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      alert('Please enter a valid score between 0 and 100');
      return;
    }

    onAddStudent(name.trim(), scoreNum);
    setName('');
    setScore('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <div style={styles.formTitle}>● REGISTER STUDENT</div>
      <div style={styles.formRow}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="number"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          style={styles.input}
          min="0"
          max="100"
          required
        />
        <button type="submit" style={styles.addButton}>+ ADD</button>
      </div>
    </form>
  );
}

const styles = {
  formContainer: { backgroundColor: '#121824', border: '1px solid #1f293d', padding: '1rem', marginBottom: '1.5rem' },
  formTitle: { color: '#8f9cae', fontSize: '0.8rem', marginBottom: '1rem' },
  formRow: { display: 'flex', gap: '1rem' },
  input: { flex: 1, backgroundColor: '#0a0f1d', border: '1px solid #2a3b5c', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px' },
  addButton: { backgroundColor: 'transparent', border: '1px solid #00ffcc', color: '#00ffcc', padding: '0.5rem 1.5rem', cursor: 'pointer', borderRadius: '4px' },
};
