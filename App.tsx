
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {home} from './src/screen/Home';

const Stack=createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="home">
        <Stack.Screen name ="home" component={home}/>  
        
         </Stack.Navigator>
         
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  
})
export default App

