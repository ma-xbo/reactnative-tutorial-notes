import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function NoteListItem({ title, onPress, onDelete }) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text>{title}</Text>
            <Pressable onPress={onDelete}>
                <Text>Delete</Text>
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: 'cyan',
        padding: 10
    },

});