import React from 'react';
import StudentRecordRow from './StudentRecordRow'; // Relative to the same folder

export default function StudentRecordTable({ students, onSaveScore }) {
  return (
    <div style={styles.tableContainer}>
      <div style={styles.tableHeaderSection}>
        <span>STUDENT RECORDS</span>
        <span style={{ color: '#00ffcc' }}>{students.length} entries</span>
      </div>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>NAME</th>
            <th style={styles.th}>SCORE</th>
            <th style={styles.th}>STATUS</th>
            <th style={styles.th}>UPDATE</th>
            <th style={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRecordRow 
              key={student.id} 
              student={student} 
              onSaveScore={onSaveScore} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  tableContainer: { backgroundColor: '#121824', border: '1px solid #1f293d', padding: '1rem', borderRadius: '4px' },
  tableHeaderSection: { display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#8f9cae', marginBottom: '1rem' },
  table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left' },
  th: { color: '#8f9cae', fontSize: '0.75rem', padding: '0.75rem 0.5rem', borderBottom: '1px solid #1f293d' },
};
