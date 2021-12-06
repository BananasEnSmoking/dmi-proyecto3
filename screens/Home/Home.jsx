import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Profile from "./../Profile";
import Gastos from "./../Gastos";
import Ingresos from "./../Ingresos";
import  i18n  from "../../Localization/i18n";

const HomePage = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Gastos" component={ Gastos } options={{ headerShow: true, headerTitle: i18n.t('Titles').gastos  }} ></Tab.Screen>
            <Tab.Screen name="Ingresos" component={ Ingresos } options={{ headerShow: false, headerTitle: i18n.t('Titles').ingresos }} ></Tab.Screen>
            <Tab.Screen name="Profile" component={ Profile } options={{ headerShow: true, headerTitle: i18n.t('Titles').profile  }} ></Tab.Screen>
        </Tab.Navigator>
    );
};

export default HomePage;