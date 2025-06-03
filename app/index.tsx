import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Animated,
    Easing,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import StepCard from '../components/StepCard';
import { simulateBLESync } from '../services/bleService';

const backgroundImage = require('../assets/images/tech-background.jpg');

// Función que simula el consumo de datos (como si fuera una API)
const fetchSimulatedStepData = () => {
  return new Promise<{ steps: number }>((resolve) => {
    setTimeout(() => {
      const simulatedSteps = Math.floor(Math.random() * (9000 - 5000) + 5000);
      resolve({ steps: simulatedSteps });
    }, 1500); // delay
  });
};

export default function Home() {
  const [steps, setSteps] = useState<number>(0);
  const [loading, setLoading] = useState(true); // inicia en true para esperar datos
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Simula llamada a datos
    const getSimulatedData = async () => {
      try {
        const data = await fetchSimulatedStepData();
        setSteps(data.steps);
      } catch (error) {
        Alert.alert('Error', 'No se pudieron obtener los pasos simulados.');
      } finally {
        setLoading(false);
      }
    };

    getSimulatedData();

    // Animación de pulso
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.3,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ])
    ).start();
  }, []);

  const handleSync = async () => {
    setLoading(true);
    try {
      await simulateBLESync();
      Alert.alert('✅ Sincronización exitosa con el dispositivo BLE');
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Error', 'Ocurrió un error desconocido.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container} resizeMode="cover">
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.content}>
          <Text style={styles.title}>Hola, Juan Pérez</Text>

          {loading ? (
            <Text style={styles.loadingText}>Cargando pasos...</Text>
          ) : (
            <>
              <StepCard steps={steps} />
              <Animated.View
                style={[styles.pulseCircle, { transform: [{ scale: scaleAnim }] }]}
              />
            </>
          )}
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/tips')}
          >
            <Text style={styles.buttonText}>Consejos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.syncButton]}
            onPress={handleSync}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Sincronizando...' : 'Sincronizar'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  syncButton: {
    backgroundColor: '#50c878',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  pulseCircle: {
    marginTop: 40,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#4a90e2',
  },
});
