import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import stylesSheet from "../styles/stylesSheet";
import { Audio } from 'expo-av';

export default function CharacterImageComponent({characterName, imageSource, onPress}) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/lightsaber.mp3')
    );
    setSound(sound);
    await sound.playAsync(); 
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity style={stylesSheet.containerImage} onPress={async () => {
        await playSound();
        onPress();
      }}>
      <View style={stylesSheet.containerViewImage}>
        <Image style={stylesSheet.imageStyle}
            source={imageSource}/>

        <Text style={stylesSheet.textStyle}>{characterName}</Text>
      </View>
    </TouchableOpacity>
  );
}