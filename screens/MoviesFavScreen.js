import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const movies = [
  {
    name: 'Interstellar',
    desc: 'Una épica de ciencia ficción sobre viajes espaciales y el amor. Christopher Nolan en su máximo nivel.',
    uri: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400',
  },
  {
    name: 'Spider-Man: No Way Home',
    desc: 'El mejor fan service del UCM. Emocionante de principio a fin.',
    uri: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400',
  },
  {
    name: 'Your Name (Kimi no Na wa)',
    desc: 'Una historia de amor y destino japonesa que te dejará llorando.',
    uri: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400',
  },
];

export default function MoviesFavScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎬 Películas Favoritas</Text>
      <Text style={styles.subtitle}>Las películas que más me han impactado</Text>

      {movies.map((movie, i) => (
        <View key={i} style={styles.card}>
          <Image source={{ uri: movie.uri }} style={styles.image} />
          <View style={styles.badge}><Text style={styles.badgeText}>#{i + 1}</Text></View>
          <Text style={styles.movieName}>{movie.name}</Text>
          <Text style={styles.movieDesc}>{movie.desc}</Text>
        </View>
      ))}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#8E44AD' }]}
        onPress={() => navigation.navigate('AboutMe')}
      >
        <Text style={styles.buttonText}>← Volver a Sobre mí</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0d0d1a',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#F1C40F', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#aaa', marginBottom: 20 },
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 6,
  },
  image: { width: '100%', height: 180 },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: { fontSize: 13, fontWeight: 'bold', color: '#000' },
  movieName: { fontSize: 20, fontWeight: 'bold', color: '#fff', margin: 12, marginBottom: 4 },
  movieDesc: { fontSize: 14, color: '#bbb', marginHorizontal: 12, marginBottom: 12 },
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
