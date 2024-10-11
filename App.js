import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
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
        <AppStack.Screen 
          name="Characters" component={Characters}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button title="About" onPress={() => navigation.navigate('About')}/>
            ),
          })}
        />
        <AppStack.Screen name="CharactersDetails" component={CharactersDetails} />
        <AppStack.Screen name="Vehicles" component={Vehicles} />
        <AppStack.Screen name="Films" component={Films} />
        <AppStack.Screen name="About" component={About} />
			</AppStack.Navigator>
    </NavigationContainer>
    
  );
}