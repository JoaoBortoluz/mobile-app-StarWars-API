import { ScrollView } from 'react-native';
import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import stylesSheet from "../styles/stylesSheet";
import CharacterImageComponent from '../components/characterImageComponent';

import LukeSkywalkerImage from "../assets/images/LukeSkywalker.jpg";
import DarthVaderImage from "../assets/images/DarthVader.jpg";
import HanSoloImage from "../assets/images/HanSolo.jpg";
import YodaImage from "../assets/images/Yoda.jpg";
import ChewbaccaImage from "../assets/images/Chewbacca.jpg";

export default function Characters() {
  const navigation = useNavigation();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter();
  },[]);

  async function getCharacter(characterName) {
    try {
      const response = await axios.get(`https://swapi.dev/api/people?search=${characterName}`);
      const characterResponse = response.data.results[0];
      setCharacter(characterResponse);
      if (characterResponse) {
        navigation.navigate('CharactersDetails', { character: characterResponse });
      } else {
        console.log('Character not found');
      }
    } catch (error) {
      console.error('Error when searching for character:', error);
    }
  };
  
  return (
    <ScrollView style={stylesSheet.container}>
      <CharacterImageComponent
      characterName = "Luke Skywalker"
      imageSource = {(LukeSkywalkerImage)}
      onPress={() => getCharacter("Luke Skywalker")}
      />

      <CharacterImageComponent
      characterName = "Darth Vader"
      imageSource = {(DarthVaderImage)}
      onPress={() => getCharacter("Darth Vader")}
      />

      <CharacterImageComponent
      characterName = "Han Solo"
      imageSource = {(HanSoloImage)}
      onPress={() => getCharacter("Han Solo")}
      />

      <CharacterImageComponent
      characterName = "Yoda"
      imageSource = {(YodaImage)}
      onPress={() => getCharacter("Yoda")}
      />

      <CharacterImageComponent
      characterName = "Chewbacca"
      imageSource = {(ChewbaccaImage)}
      onPress={() => getCharacter("Chewbacca")}
      />
      
    </ScrollView>
  );
}