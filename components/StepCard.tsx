import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  steps: number;
}

const StepCard: React.FC<Props> = ({ steps }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.steps}>{steps} pasos</Text>
    </View>
  );
};

export default StepCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0f7fa',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 20
  },
  steps: {
    fontSize: 28,
    fontWeight: '600'
  }
});
