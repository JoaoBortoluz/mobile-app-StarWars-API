import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';

export default function CharactersDetails({ route }) {
  const { character } = route.params;
  const [vehicles, setVehicles] = useState([]);
  const [films, setFilms] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getVehicles(), getFilms()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (!character) {
    return <Text style={styles.loadingText}>Loading</Text>;
  }

  async function getVehicles() {
    try {
      const vehiclePromises = character.vehicles.map(async (vehicleUrl) => {
        const response = await axios.get(vehicleUrl);
        return response.data;
      });
      const vehicleData = await Promise.all(vehiclePromises);
      setVehicles(vehicleData);
    } catch (error) {
      console.error('Error when searching for vehicles:', error);
    }
  }

  async function getFilms() {
    try {
      const filmPromises = character.films.map(async (filmUrl) => {
        const response = await axios.get(filmUrl);
        return response.data;
      });
      const filmData = await Promise.all(filmPromises);
      setFilms(filmData);
    } catch (error) {
      console.error('Error when searching for films:', error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Details about {character.name}</Text>
      <Text style={styles.detail}>Height: {character.height} cm</Text>
      <Text style={styles.detail}>Weight: {character.mass} kg</Text>
      <Text style={styles.detail}>Gender: {character.gender}</Text>
      <Text style={styles.detail}>Skin color: {character.skin_color}</Text>

      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <ButtonComponent
              title={"Vehicles"}
              onPress={() => navigation.navigate('Vehicles', { vehicles, character })}
            />
            <ButtonComponent
              title={"Films"}
              onPress={() => navigation.navigate('Films', { films, character })}
            />
          </>
        )}
      </View>
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
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 18,
    color: '#000',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',  
    justifyContent: 'space-between', 
  },
});
