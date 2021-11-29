import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Gastos from "./../Gastos";
import Ingresos from "./../Ingresos";

const HomePage = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Gastos" component={ Gastos }></Tab.Screen>
            <Tab.Screen name="Ingresos" component={ Ingresos }></Tab.Screen>
        </Tab.Navigator>
    );
};

export default HomePage;