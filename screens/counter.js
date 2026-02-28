import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Counter({ navigation }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity style={styles.button} onPress={handleIncrement}>
        <Text style={styles.buttonText}>+ Sumar 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRed} onPress={handleDecrement}>
        <Text style={styles.buttonText}>- Restar 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGray} onPress={handleReset}>
        <Text style={styles.buttonText}>Reiniciar a 0</Text>
      </TouchableOpacity>

      {/* CLASE 5 — botón para enviar el contador a ExampleEvent */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ExampleEvent', { total: count })}
      >
        <Text style={styles.buttonText}>Enviar contador a Eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Volver a Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E4D8C',
    marginBottom: 10,
  },
  count: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1E4D8C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 6,
    width: '80%',
    alignItems: 'center',
  },
  buttonRed: {
    backgroundColor: '#C0392B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 6,
    width: '80%',
    alignItems: 'center',
  },
  buttonGray: {
    backgroundColor: '#7F8C8D',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 6,
    width: '80%',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#27AE60',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 6,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});