import React from 'react';

export default function ScoreboardMetrics({ total, passed, avg }) {
  return (
    <div style={styles.metricsContainer}>
      <div style={styles.metricCard}>
        <div style={styles.metricLabel}>TOTAL</div>
        <div style={styles.metricValue}>{total}</div>
      </div>
      <div style={styles.metricCard}>
        <div style={styles.metricLabel}>PASSED</div>
        <div style={{ ...styles.metricValue, color: '#00ffcc' }}>{passed}</div>
      </div>
      <div style={styles.metricCard}>
        <div style={styles.metricLabel}>AVG SCORE</div>
        <div style={{ ...styles.metricValue, color: '#00ffcc' }}>{avg}</div>
      </div>
    </div>
  );
}

const styles = {
  metricsContainer: { display: 'flex', gap: '1rem', marginBottom: '1.5rem' },
  metricCard: { flex: 1, backgroundColor: '#121824', border: '1px solid #1f293d', padding: '1rem', borderRadius: '4px' },
  metricLabel: { color: '#8f9cae', fontSize: '0.75rem', marginBottom: '0.5rem' },
  metricValue: { fontSize: '1.8rem', fontWeight: 'bold' },
};
