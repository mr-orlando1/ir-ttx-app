import React from 'react';
import {
  Document, Page, Text, View, StyleSheet, Font
} from '@react-pdf/renderer';

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/montserrat/v15/JTUQjIg1_i6t8kCHKm459Wlhzg.ttf' }
  ]
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Montserrat',
    padding: 30,
    fontSize: 10,
    lineHeight: 1.4
  },
  header: {
    fontSize: 18,
    color: '#2296DD',
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  section: {
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: '1px solid #ddd'
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4
  },
  label: {
    fontWeight: 'bold',
    color: '#2B3C48'
  },
  row: {
    marginBottom: 4
  }
});

export default function AfterActionReport({ injects = [], feedback = {} }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>After Action Report</Text>

        {injects.map((inj, i) => (
          <View key={i} style={styles.section}>
            <Text style={styles.title}>{inj.title}</Text>
            <Text style={styles.row}><Text style={styles.label}>Timing:</Text> {inj.time || "T+?"}</Text>
            <Text style={styles.row}><Text style={styles.label}>Role:</Text> {inj.role || "Unassigned"}</Text>
            <Text style={styles.row}><Text style={styles.label}>Objective:</Text> {inj.objective || "N/A"}</Text>
            <Text style={styles.row}><Text style={styles.label}>Mappings:</Text> {(inj.mappings || []).join(", ")}</Text>
            <Text style={styles.row}><Text style={styles.label}>Tags:</Text> {(inj.tags || []).join(", ")}</Text>
            {feedback[inj.id] && (
              <>
                <Text style={styles.row}><Text style={styles.label}>Rating:</Text> {feedback[inj.id].rating} / 5</Text>
                <Text style={styles.row}><Text style={styles.label}>Comment:</Text> {feedback[inj.id].comment || "None"}</Text>
              </>
            )}
          </View>
        ))}

        <View style={{ marginTop: 16 }}>
          <Text style={styles.title}>Corrective Action Plan (CAP)</Text>
          <Text style={styles.row}>[Insert notes, recommendations, and follow-up actions here.]</Text>
        </View>
      </Page>
    </Document>
  );
}