import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import stylesSheet from "../styles/stylesSheet";

export default function CharacterImageComponent({characterName, imageSource, onPress}) {
  return (
    <TouchableOpacity style={stylesSheet.containerImage}>
      <View style={stylesSheet.containerViewImage}>
        <Image style={stylesSheet.imageStyle}
            source={imageSource}/>

        <Text style={stylesSheet.textStyle}>{characterName}</Text>
      </View>
    </TouchableOpacity>
  );
}