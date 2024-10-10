import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Characters from './src/pages/Characters';
import CharactersDetails from './src/pages/CharactersDetails';
import Films from './src/pages/Films';
import Vehicles from './src/pages/Vehicles';
import About from './src/pages/About';

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Star Wars API">
        <AppStack.Screen name="Characters" component={Characters} />
				<AppStack.Screen name="CharacterDetail" component={CharactersDetails} />
			</AppStack.Navigator>
    
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
