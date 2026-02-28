import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Counter({ navigation }) {
  const [count, setCount] = useState(0);
  const nombre = 'Irvin';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🔢</Text>
        <Text style={styles.title}>Contador</Text>
        <Text style={styles.count}>{count}</Text>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#1E4D8C' }]} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>➕  Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#C0392B' }]} onPress={() => setCount(count - 1)}>
        <Text style={styles.buttonText}>➖  Disminuir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#7F8C8D' }]} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>🔄  Reiniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#E67E22' }]}
        onPress={() => navigation.navigate('ExampleEvent', { total: count, nombre })}
      >
        <Text style={styles.buttonText}>📤  Enviar a Eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#27AE60' }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>🏠  Volver a Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
    padding: 24,
    paddingTop: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
  },
  emoji: { fontSize: 48, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1E4D8C', marginBottom: 10 },
  count: { fontSize: 80, fontWeight: 'bold', color: '#1A1A1A' },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
