import React from 'react';
import { FlatList, View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'


export default function HomeStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'lavender' },
            }}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='Edit' component={Edit} />
        </Stack.Navigator>
    )
}

function Home(props) {
    const navigation = props.navigation;

    const data = [
        { id: 1, title: 'Notiz 1' },
        { id: 2, title: 'Notiz 2' },
        { id: 3, title: 'Notiz 3' },
    ]
    return (
        <View style={styles.container}>
            <Text>Meine Notizen</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
            <Button title='View 1' onPress={() => navigation.navigate('Details', { id: 1 })} />
            <Button title='View 2' onPress={() => navigation.navigate('Details', { id: 2 })} />
        </View>
    );
}

function Details({ navigation, route }) {
    const id = route.params.id;
    return (
        <View style={styles.container}>
            <Text>{'Details' + id}</Text>
            <Button title='Edit' onPress={() => navigation.navigate('Edit')} />
        </View>
    );
}

function Edit() {
    return (
        <View style={styles.container}>
            <Text>Edit</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});