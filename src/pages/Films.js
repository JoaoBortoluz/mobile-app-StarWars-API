import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function Films({ route }) {
  const { films, character } = route.params;

  function vehiclesHandle() {
    if (films.length > 0) {
      return films.map((film, index) => (
        <View key={index} style={styles.filmContainer}>
          <Text>Title: {film.title}</Text>
          <Text>Director: {film.director}</Text>
          <Text>Producer: {film.producer}</Text>
          <Text>Release Date: {film.release_date}</Text>
          <Text></Text>
        </View>
      ));
    } else {
      return <Text>{character.name} do not apear in any film.</Text>;
    }
  }

  return (
    <ScrollView>
      <Text>{character.name} Films:</Text>
      {vehiclesHandle()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})