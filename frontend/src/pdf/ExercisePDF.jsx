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
    lineHeight: 1.5
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2296DD',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  section: {
    marginVertical: 10,
    padding: 10,
    borderBottom: '1px solid #ccc'
  },
  title: {
    fontSize: 12,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    color: '#2B3C48'
  },
  row: {
    marginBottom: 4
  }
});

export default function ExercisePDF({ injects }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Incident Response Tabletop Exercise Plan</Text>
        {injects.map((inj, i) => (
          <View key={i} style={styles.section}>
            <Text style={styles.title}>{inj.title}</Text>
            <Text style={styles.row}><Text style={styles.label}>Timing:</Text> {inj.time}</Text>
            <Text style={styles.row}><Text style={styles.label}>Role:</Text> {inj.role}</Text>
            <Text style={styles.row}><Text style={styles.label}>Objective:</Text> {inj.objective}</Text>
            <Text style={styles.row}><Text style={styles.label}>Mappings:</Text> {(inj.mappings || []).join(", ")}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}