import React from 'react';
import { View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }){
    return(
        <MainLayout>
            <View>
                <Text>Incredible To Do List</Text>
                <Text>Diya Sharma</Text>
                <Text>19/11/2023</Text>
                <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    );
}