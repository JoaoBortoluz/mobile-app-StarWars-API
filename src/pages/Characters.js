import { ScrollView } from 'react-native';
import stylesSheet from "../styles/stylesSheet";
import CharacterImageComponent from '../components/characterImageComponent';

import LukeSkywalkerImage from "../assets/images/LukeSkywalker.jpg";
import DarthVaderImage from "../assets/images/DarthVader.jpg";
import HanSoloImage from "../assets/images/HanSolo.jpg";
import YodaImage from "../assets/images/Yoda.jpg";
import ChewbaccaImage from "../assets/images/Chewbacca.jpg";

export default function Characters() {
    
  return (
    <ScrollView style={stylesSheet.container}>
      <CharacterImageComponent
      characterName = "Luke Skywalker"
      imageSource = {(LukeSkywalkerImage)}
      />

      <CharacterImageComponent
      characterName = "Darth Vader"
      imageSource = {(DarthVaderImage)}
      />

      <CharacterImageComponent
      characterName = "Han Solo"
      imageSource = {(HanSoloImage)}
      />

      <CharacterImageComponent
      characterName = "Yoda"
      imageSource = {(YodaImage)}
      />

      <CharacterImageComponent
      characterName = "Chewbacca"
      imageSource = {(ChewbaccaImage)}
      />
      
    </ScrollView>
  );
}