import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        // saving error
        console.log(e);

    }
};

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log("value", value);

        if (value) {
            // value previously stored
            return value
        }
        return null
    } catch (e) {
        // error reading value
        console.log(e);

    }
};