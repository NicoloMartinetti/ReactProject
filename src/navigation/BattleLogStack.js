import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BattleLog from '../screens/BattleLog';
import Detail from './DetailStack';

const Stack = createNativeStackNavigator();

export const BattleLogStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="BattleLog" component={BattleLog} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
};

export default BattleLogStack;