import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScoreDetail from '../screen/ScoreDetail';
import AddScore from '../screen/AddScore';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AddScore">
                <Stack.Screen name="AddScore" component={AddScore} />
                <Stack.Screen name="ScoreDetail" component={ScoreDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}