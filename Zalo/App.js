import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './screens/home.js';
import login from './screens/login.js';
import information from './screens/information.js';
import Phonebook from './screens/Phonebook.js';
import ListChat from './screens/ListChat.js';
import Diary from './screens/Diary.js';
export default function App() {

  const  Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={home}/>
          <Stack.Screen name='login' component={login}/>
          <Stack.Screen name='ListChat' component={ListChat} options={{headerShown:false}}/>
          <Stack.Screen name='information' component={information}  options={{headerShown:false}} />
          <Stack.Screen name='Phonebook' component={Phonebook} options={{headerShown:false}}/>
          <Stack.Screen name='Diary' component={Diary} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


