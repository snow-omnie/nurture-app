import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ProfileScreen = () => {
    return (
        <SafeAreaProvider style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ProfileScreen</Text>
        </SafeAreaProvider>
    )
}

export default ProfileScreen