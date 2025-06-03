import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';

const TipsScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/images/tech-background.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Consejos de Salud</Text>

        <Text style={styles.tip}>🧘‍♂️ Mantén una rutina diaria de actividad física.</Text>
        <Text style={styles.tip}>💧 Hidrátate adecuadamente durante todo el día.</Text>
        <Text style={styles.tip}>🥗 Consume alimentos ricos en fibra y bajos en grasas.</Text>
        <Text style={styles.tip}>🛌 Dormir entre 7 y 9 horas mejora tu recuperación.</Text>
        <Text style={styles.tip}>🧠 Cuida tu salud mental con pausas y respiración consciente.</Text>
        <Text style={styles.tip}>🚶‍♀️ Camina al menos 10.000 pasos diarios para mantenerte activo.</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default TipsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    paddingTop: 60, 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  tip: {
    fontSize: 18,
    marginBottom: 16,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 10,
  },
});
