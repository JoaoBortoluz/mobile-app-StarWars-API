import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the Developers</Text>
      <Text style={styles.description}>
        João Vítor Bortoluz da Rosa - RA: 1134776
      </Text>
      <Text style={styles.email}>
        E-mail: 1134776@atitus.edu.br
      </Text>
      <Text style={styles.description}>
        Ana Flávia Florencio - RA: 1134228
      </Text>
      <Text style={styles.email}>
        E-mail: 1134228@atitus.edu.br
      </Text>
      <Text style={styles.description}>
        Luiz Henrique Albuquerque - RA: 1134362
      </Text>
      <Text style={styles.email}>
        E-mail: 1134362@atitus.edu.br
      </Text>
    </View>
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
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 25,
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});
