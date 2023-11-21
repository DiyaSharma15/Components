import React from 'react';
import { View, } from 'react-native';
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation }){
    return(
        <MainLayout>
            <View>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask}/>
                <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
                />
            </View>
        </MainLayout>
    );
}