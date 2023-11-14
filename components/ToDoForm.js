import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default function ToDoForm({ addTask }) {

    const [task, setTask] = React.useState('');
    return(
        <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Add as new task..."
            onChangeText={(text) => setTask(text)}
            value={task}
        />
        <Button title="Add" onPress={() => addTask(task)} />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
})