import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const nombre = 'Irvin';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🎓</Text>
        <Text style={styles.title}>Portafolio</Text>
        <Text style={styles.name}>{nombre}</Text>
        <Text style={styles.info}>Ingeniería en Tecnologías de la Información</Text>
        <Text style={styles.info}>5° Cuatrimestre — Grupo A TI</Text>
      </View>

      <Text style={styles.sectionTitle}>Navegación</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#1E4D8C' }]}
        onPress={() => navigation.navigate('ExampleEvent', { nombre })}
      >
        <Text style={styles.buttonText}>📅  Ir a Eventos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#27AE60' }]}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.buttonText}>🔢  Ir a Contador</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#8E44AD' }]}
        onPress={() => navigation.navigate('AboutMe')}
      >
        <Text style={styles.buttonText}>👤  Sobre mí</Text>
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
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  emoji: { fontSize: 50, marginBottom: 8 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1E4D8C', marginBottom: 6 },
  name: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 4 },
  info: { fontSize: 15, color: '#555', textAlign: 'center', marginTop: 2 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E4D8C',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
