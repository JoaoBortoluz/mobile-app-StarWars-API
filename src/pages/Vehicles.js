import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Vehicles({ route }) {
  const { vehicles, character } = route.params;

  function vehiclesHandle() {
    if (vehicles.length > 0) {
      return vehicles.map((vehicle, index) => (
        <View key={index} style={styles.vehicleContainer}>
          <Text>Name: {vehicle.name}</Text>
          <Text>Model: {vehicle.model}</Text>
          <Text>Manufacturer: {vehicle.manufacturer}</Text>
          <Text>Cost: {vehicle.cost_in_credits} credits</Text>
          <Text></Text>
        </View>
      ));
    } else {
      return <Text>{character.name} has no vehicles.</Text>;
    }
  }

  return (
    <ScrollView>
      <Text>{character.name} Vehicles:</Text>
      {vehiclesHandle()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({})