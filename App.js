import React from 'react';
import { useState } from 'react';
import {SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
 
 
export default function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to park',
    'Walk dog'
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task])
  };
  const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

