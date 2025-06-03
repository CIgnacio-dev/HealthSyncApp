import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TipsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consejos de salud</Text>
      <Text style={styles.tip}>✅ Mantente hidratado</Text>
      <Text style={styles.tip}>✅ Camina al menos 30 minutos al día</Text>
      <Text style={styles.tip}>✅ Duerme 7-8 horas por noche</Text>
      <Text style={styles.tip}>✅ Evita el estrés prolongado</Text>
      <Text style={styles.tip}>✅ Come frutas y verduras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tip: {
    fontSize: 16,
    marginBottom: 12,
  },
});
