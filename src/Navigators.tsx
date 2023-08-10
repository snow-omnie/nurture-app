import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { COLORS } from '../utils/theme';
// import { getData } from '../utils/services';
// import { user } from '../utils/constants';
import { Icon } from '@rneui/themed';
import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tintColor = (focused: boolean) => {
    return focused ? COLORS.black : COLORS.earth
}

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Dashboard' component={DashboardScreen} options={{
                headerStyle: {
                    backgroundColor: COLORS.grey,
                },
                headerTitleStyle: {
                    color: COLORS.white
                },
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color={tintColor(focused)}
                        size={30}
                    />
                )
            }} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color={tintColor(focused)}
                        size={30}
                    />
                )
            }} />
            <Tab.Screen name='Settings' component={SettingsScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='sc-gear'
                        type='evilicon'
                        color={tintColor(focused)}
                        size={30}
                    />
                )
            }} />
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

const styles = StyleSheet.create({
    icon: {
        fontSize: 40
    }
})