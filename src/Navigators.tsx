import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
// import { getData } from '../utils/services';
// import { user } from '../utils/constants';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Profile' component={ProfileScreen} />
            <Tab.Screen name='Dashboard' component={DashboardScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
    )
}

const LoginStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    );
}