import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SettingsScreen from './screens/SettingsScreen';


//screen name
const homeName = 'Home';
const detailName = 'Detail';
const settingsName = 'Settings';

//tab bar
const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        
            <NavigationContainer>
            
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let rn = route.name;
                            if (rn === homeName) {
                                iconName = focused ? 'home' : 'home-outline';
                            } else if (rn === detailName) {
                                iconName = focused ? 'list' : 'list-outline';
                            } else if (rn === settingsName) {
                                iconName = focused ? 'settings' : 'settings-outline';
                            } return <Ionicons name={iconName} size={size} color={color} />;

                        },
                        //定義導覽列樣式外觀
                        tabBarActiveTintColor: '#7F4F21',
                        tabBarInactiveTintColor: '#A6695F',
                        tabBarLabelStyle: { paddingBottom: 12, fontSize: 10 },
                        tabBarStyle: { padding: 10, height: 70 },
                    })}
                >
                    <Tab.Screen name={homeName} component={HomeScreen} />
                    <Tab.Screen name={detailName} component={DetailScreen} />
                    <Tab.Screen name={settingsName} component={SettingsScreen} />
                </Tab.Navigator>
            
        </NavigationContainer>
        
    )
}
export default MainContainer;