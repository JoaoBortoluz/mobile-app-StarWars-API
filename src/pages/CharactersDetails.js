import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharactersDetails() {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        getCharacter("Obi Wan Kenobi");
      }, []);

      async function getCharacter(characterName) {
        console.log("teste");
        const response = await axios.get(`https://swapi.dev/api/people?search=${characterName}`);
        const characterResponse = response.data.results[0];
        console.log(characterResponse);
        console.log("teste1");

        setCharacter(characterResponse)
      }

      if (!character) {
        return <Text>CArregando</Text>
      }
    
     
  return (
    <View>
      <Text>Details about {character.name}</Text>
      <Text>Height: {character.height} cm</Text>
      <Text>Weight: {character.mass} kg</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Skin color: {character.skin_color}</Text>



    </View>
  )
}

const styles = StyleSheet.create({})