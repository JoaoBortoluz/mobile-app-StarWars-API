import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function Films({ route }) {
  const { films, character } = route.params;

  function vehiclesHandle() {
    if (films.length > 0) {
      return films.map((film, index) => (
        <View key={index} style={styles.filmContainer}>
          <Text style={styles.filmTitle}>Title: {film.title}</Text>
          <Text style={styles.filmDetail}>Director: {film.director}</Text>
          <Text style={styles.filmDetail}>Producer: {film.producer}</Text>
          <Text style={styles.filmDetail}>Release Date: {film.release_date}</Text>
        </View>
      ));
    } else {
      return <Text style={styles.noFilmsText}>{character.name} does not appear in any film.</Text>;
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{character.name} Films:</Text>
      {vehiclesHandle()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filmContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filmTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filmDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
  noFilmsText: {
    fontSize: 18,
    color: '#ff0000',
  },
});
