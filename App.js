import React from "react"
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Comp1 from "./pages/Comp1";
import Comp2 from "./pages/Comp2";
import Comp3 from "./pages/Comp3";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const App = () => {
    return <NavigationContainer
    >
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName;
                    if (route.name === "Screen_A") {
                        iconName = "book-medical"
                        color = focused ? "red" : "lightgreen"
                        size = focused ? 25 : 20
                    } else if (route.name === "Screen_B") {
                        iconName = "file-medical-alt"
                        color = focused ? "red" : "lightgreen"
                        size = focused ? 25 : 20
                    } else if (route.name === "Screen_C") {
                        iconName = "pump-medical"
                        color = focused ? "red" : "lightgreen"
                        size = focused ? 25 : 20
                    }

                    return <FontAwesome5
                        name={iconName}
                        color={color}
                        size={size}
                    />
                },
            })}
            tabBarOptions={{
                activeTintColor: "#f0f", //changes color on being active
                inactiveTintColor:"#000",
                activeBackgroundColor:"#e8e8e8",
                inactiveBackgroundColor:"#ffdcdc",
                showLabel:true,
                labelStyle: {
                    fontFamily:"courier",
                    fontSize:14
                }
            }}
        >
            <Tab.Screen
                name={"Screen_A"}
                component={Comp1}
            />
            <Tab.Screen
                name={"Screen_B"}
                component={Comp2}
            />
            <Tab.Screen
                name={"Screen_C"}
                component={Comp3}
            >
            </Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
}

export default App;