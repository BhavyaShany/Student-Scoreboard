import React, { useState } from 'react';

export default function StudentRecordRow({ student, onSaveScore }) {
  const [editScore, setEditScore] = useState(student.score);
  const isPassed = student.score >= 40;

  const handleSave = () => {
    const scoreNum = parseInt(editScore, 10);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      alert('Please enter a valid score between 0 and 100');
      return;
    }
    onSaveScore(student.id, scoreNum);
  };

  return (
    <tr style={styles.tr}>
      <td style={styles.td}>{student.name}</td>
      <td style={{ ...styles.td, color: isPassed ? '#ffcc00' : '#ff4d4d', fontWeight: 'bold' }}>
        {student.score}
      </td>
      <td style={styles.td}>
        <span style={isPassed ? styles.statusPass : styles.statusFail}>
          ● {isPassed ? 'PASS' : 'FAIL'}
        </span>
      </td>
      <td style={styles.td}>
        <input
          type="number"
          value={editScore}
          onChange={(e) => setEditScore(e.target.value)}
          style={styles.tableInput}
          min="0"
          max="100"
        />
      </td>
      <td style={styles.td}>
        <button onClick={handleSave} style={styles.saveButton}>
          SAVE
        </button>
      </td>
    </tr>
  );
}

const styles = {
  tr: { borderBottom: '1px solid #1f293d' },
  td: { padding: '0.75rem 0.5rem', verticalAlign: 'middle' },
  statusPass: { color: '#00ffcc', border: '1px solid #00ffcc', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', backgroundColor: 'rgba(0, 255, 204, 0.1)' },
  statusFail: { color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 77, 77, 0.1)' },
  tableInput: { backgroundColor: '#0a0f1d', border: '1px solid #2a3b5c', color: '#fff', padding: '0.3rem 0.5rem', width: '60px', borderRadius: '4px' },
  saveButton: { backgroundColor: 'transparent', border: '1px solid #2a3b5c', color: '#8f9cae', padding: '0.3rem 0.8rem', cursor: 'pointer', borderRadius: '4px', fontSize: '0.75rem' },
};
