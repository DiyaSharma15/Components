import React from 'react';
import { useState } from 'react';
import {SafeAreaView, } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm'
 
 
export default function App() {
 
  const [tasks] = useState([
    'Do laundry',
    'Go to park',
    'Walk dog'
  ]);
 
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm />
        </SafeAreaView>
    );
}

