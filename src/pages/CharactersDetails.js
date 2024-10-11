import { StyleSheet, Text, View, ScrollView, ActivityIndicator  } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';


export default function CharactersDetails({route}) {
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
    return <Text>Loading</Text>
  };

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
  // const vehicleUri = character.vehicles[0];
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
    <ScrollView>
      <Text>Details about {character.name}</Text>
      <Text>Height: {character.height} cm</Text>
      <Text>Weight: {character.mass} kg</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Skin color: {character.skin_color}</Text>

      <View>
        {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
          <>
          <ButtonComponent
          title={"Vehicles"}
          onPress={() => navigation.navigate('Vehicles', { vehicles, character})}>
          </ButtonComponent>

          <ButtonComponent
          title={"Films"}
          onPress={() => navigation.navigate('Films', { films, character })}>
          </ButtonComponent>
          </>
        )}  
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({});