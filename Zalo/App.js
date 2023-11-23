import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import information from './screens/information.js';
import Phonebook from './screens/Phonebook.js';
import ListChat from './screens/ListChat.js';
import Diary from './screens/Diary.js';
import { Chat } from './screens/Chat.js';
import Login from './screens/login.js';
import Home from './screens/home.js';
import { CreateAccount } from './screens/CreateAccount.js';
import Register from './screens/Register.js';
import Settings from './screens/Settings.js';
export default function App() {

  const  Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Home' component={Home}  options={{headerShown:false}}/>
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='Register' component={Register}  options={{headerShown:false}}/>
          <Stack.Screen name='CreateAccount' component={CreateAccount} options={{headerShown:false}}/>
          <Stack.Screen name='ListChat' component={ListChat} options={{headerShown:false}}/>
          <Stack.Screen name='information' component={information}  options={{headerShown:false}} />
          <Stack.Screen name='Phonebook' component={Phonebook} options={{headerShown:false}}/>
          <Stack.Screen name='Diary' component={Diary} options={{headerShown:false}}/>
          <Stack.Screen name='Chat' component={Chat} options={{headerShown:false}}/> */}
          <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


