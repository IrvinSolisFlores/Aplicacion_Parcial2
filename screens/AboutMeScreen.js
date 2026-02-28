import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function AboutMeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>👤</Text>
        <Text style={styles.title}>Sobre mí</Text>
        <Text style={styles.description}>
          Soy estudiante de Ingeniería en Tecnologías de la Información en la Universidad Tecnológica de Durango.
          Me apasiona el desarrollo de aplicaciones móviles y la tecnología en general.
          En este portafolio encontrarás evidencias de mis prácticas y proyectos realizados durante el cuatrimestre.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Mis favoritos</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#E74C3C' }]}
        onPress={() => navigation.navigate('FoodFav')}
      >
        <Text style={styles.buttonText}>🍕  Comidas favoritas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#2980B9' }]}
        onPress={() => navigation.navigate('MoviesFav')}
      >
        <Text style={styles.buttonText}>🎬  Películas favoritas</Text>
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
    marginBottom: 24,
    elevation: 5,
  },
  emoji: { fontSize: 52, marginBottom: 8 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#8E44AD', marginBottom: 12 },
  description: { fontSize: 15, color: '#555', textAlign: 'center', lineHeight: 22 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#8E44AD',
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
    elevation: 3,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
