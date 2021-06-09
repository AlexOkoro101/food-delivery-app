import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import {Home} from "../screens";
import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons'; 
import Svg, {Circle, Path} from "react-native-svg";
import { isIphoneX } from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
    var isSelected = accessibilityState.selected

    if(isSelected) {
        return (
            <View style={{flex: 1, alignItems: "center"}}>
                <View style={{flexDirection: 'row', position: "absolute", top: 0}}>
                    <View style={{flex: 1, backgroundColor: "white"}}></View>
                    <Svg  width={75} height={61} viewBox="0 0 75 61">
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill="white"
                        ></Path>
                    </Svg>
                    <View style={{flex: 1, backgroundColor: "white"}}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: "center",
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: "white"
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: "white"
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if(isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        left: 0,
                        height: 30,
                        backgroundColor: "white"
                    }}
                ></View>
                <BottomTabBar {...props.props}></BottomTabBar>
            </View>
        )

    } else {
        return (
            <BottomTabBar {...props.props}></BottomTabBar>

        )
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                ></CustomTabBar>
            )}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons resizeMode="contain" name="silverware-fork-knife" size={25} color={focused ? '#EF724B' : '#CACACA'} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        ></TabBarCustomButton>
                    )
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="Search" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons resizeMode="contain" name="search-outline" size={25} color={focused ? '#EF724B' : '#CACACA'} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        ></TabBarCustomButton>
                    )
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="Like" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons resizeMode="contain" name="heart-sharp" size={25} color={focused ? '#EF724B' : '#CACACA'} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        ></TabBarCustomButton>
                    )
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name="User" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo resizeMode="contain" name="user" size={25} color={focused ? '#EF724B' : '#CACACA'} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        ></TabBarCustomButton>
                    )
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})
