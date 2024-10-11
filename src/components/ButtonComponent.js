import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import stylesSheet from "../styles/stylesSheet";

export default function ButtonComponent({ title, onPress }) {
  return (
    <TouchableOpacity style={stylesSheet.containerButton} 
      title={title}
      onPress={onPress}>
      <Text style={stylesSheet.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}