// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backGroundColor: "red" }}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    );
}

const Stack = createNativeStackNavigator();

function Test() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Test;