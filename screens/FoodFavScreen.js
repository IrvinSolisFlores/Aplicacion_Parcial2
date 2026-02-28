import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const foods = [
  {
    name: 'Pizza',
    desc: 'Mi favorita: masa delgada con queso derretido y pepperoni.',
    uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
  },
  {
    name: 'Tacos',
    desc: 'Tacos de carne asada con guacamole, nada los supera.',
    uri: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400',
  },
  {
    name: 'Ramen',
    desc: 'Caldo caliente con noodles, huevo y chashu de cerdo.',
    uri: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400',
  },
];

export default function FoodFavScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🍕 Comidas Favoritas</Text>
      <Text style={styles.subtitle}>Estas son las comidas que más disfruto</Text>

      {foods.map((food, i) => (
        <View key={i} style={styles.card}>
          <Image source={{ uri: food.uri }} style={styles.image} />
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodDesc}>{food.desc}</Text>
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
    backgroundColor: '#fff8f0',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#E74C3C', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#888', marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 4,
  },
  image: { width: '100%', height: 180 },
  foodName: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A', margin: 12, marginBottom: 4 },
  foodDesc: { fontSize: 14, color: '#666', marginHorizontal: 12, marginBottom: 12 },
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
