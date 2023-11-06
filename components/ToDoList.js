import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ToDoList({ tasks }) {
    return (
        <View style={styles.task}>
          <Text>Task List</Text>
          <View style={styles.taskText}>
            {tasks.map((task, index) => (
              <Text key={index}>{task}</Text>
            ))}
          </View>
        </View>
    );
}


const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});