import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {
    List,
    Detail
} from '../screens'

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName='List'
            headerMode='none'
        >
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
}