import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [syncing, setSyncing] = useState(false);
  const [steps, setSteps] = useState(7850);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setSteps(Math.floor(Math.random() * 4000) + 6000);
      Alert.alert('✅ Sincronización exitosa con el dispositivo BLE');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola, Juan Pérez!</Text>
      <Text style={styles.steps}>{steps} pasos</Text>
      <Button title={syncing ? 'Sincronizando...' : 'Sincronizar dispositivo'} onPress={handleSync} disabled={syncing} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  steps: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
