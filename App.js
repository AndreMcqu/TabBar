import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './component/FirstScreen';
import SecondScreen from './component/SecondScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="The Picture" component={FirstScreen} options={{ tabBarLabel: 'Image',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="image-frame" color={color} size={size} />
          ), }} />
        <Tab.Screen name="Not what you expected" component={SecondScreen} options={{ tabBarLabel: 'More interseting ?',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text" color={color} size={size} />
          ), }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;