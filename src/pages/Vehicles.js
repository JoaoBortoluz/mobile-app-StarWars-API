import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Vehicles({ route }) {
  const { vehicles, character } = route.params;

  function vehiclesHandle() {
    if (vehicles.length > 0) {
      return vehicles.map((vehicle, index) => (
        <View key={index} style={styles.vehicleContainer}>
          <Text style={styles.vehicleTitle}>Name: {vehicle.name}</Text>
          <Text style={styles.vehicleDetail}>Model: {vehicle.model}</Text>
          <Text style={styles.vehicleDetail}>Manufacturer: {vehicle.manufacturer}</Text>
          <Text style={styles.vehicleDetail}>Cost: {vehicle.cost_in_credits} credits</Text>
        </View>
      ));
    } else {
      return <Text style={styles.noVehiclesText}>{character.name} has no vehicles.</Text>;
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Text style={styles.title}>{character.name} Vehicles:</Text>
        {vehiclesHandle()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#333',
    height: '100%',
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  vehicleContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  vehicleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vehicleDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
  noVehiclesText: {
    fontSize: 18,
    color: '#ff0000',
  },
});
