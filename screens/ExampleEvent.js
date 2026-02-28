import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function ExampleEvent({ navigation, route }) {
  const nombre = route.params?.nombre ?? 'Desconocido';
  const total = route.params?.total;

  const handleShowData = () => {
    const msg = total !== undefined
      ? `Nombre: ${nombre}\nContador recibido: ${total}`
      : `Nombre: ${nombre}\n(Sin contador)`;
    Alert.alert('📋 Datos recibidos', msg);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>📅</Text>
        <Text style={styles.title}>Pantalla de Eventos</Text>
        <Text style={styles.description}>
          Esta pantalla recibe parámetros desde otras pantallas usando la navegación Stack de React Native.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>👤 Nombre recibido:</Text>
        <Text style={styles.infoValue}>{nombre}</Text>
      </View>

      {total !== undefined && (
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>🔢 Contador recibido:</Text>
          <Text style={styles.infoValue}>{total}</Text>
        </View>
      )}

      <TouchableOpacity style={[styles.button, { backgroundColor: '#E67E22' }]} onPress={handleShowData}>
        <Text style={styles.buttonText}>🔔  Mostrar datos en Alert</Text>
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
  description: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 20 },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginVertical: 6,
    elevation: 3,
  },
  infoLabel: { fontSize: 13, color: '#888', marginBottom: 4 },
  infoValue: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A' },
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
