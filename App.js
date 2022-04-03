import React from "react"
import {NavigationContainer} from "@react-navigation/native";
import Comp1 from "./pages/Comp1";
import Comp2 from "./pages/Comp2";
import Comp3 from "./pages/Comp3";
import {createDrawerNavigator} from "@react-navigation/drawer";
// import
const Drawer = createDrawerNavigator();

const App = () => {
    return <NavigationContainer
    >
        <Drawer.Navigator
            initialRouteName={"Screen_A"}
            drawerPosition={"left"}
            drawerType={"front"}
            edgeWidth={100}
            hideStatusBar={false}
            overlayColor={"#00000090"}
            drawerStyle={{
                backgroundColor:"#e6e6e6",
                width:250
            }}

            screenOptions={{
                headerShown:true,
                swipeEnabled:true,
                gestureEnabled:true,
                headerTitleAlign:"center",
                headerStyle:{
                    backgroundColor:"#0080ff"
                },
                headerTintColor:"#ffffff",
                headerTitleStyle:{
                    fontSize:25,
                    fontWeight:"bold"
                }
            }}
        >
            <Drawer.Screen
                name={"Screen_A"}
                component={Comp1}
            />
            <Drawer.Screen
                name={"Screen_B"}
                component={Comp2}
            />
            <Drawer.Screen
                name={"Screen_C"}
                component={Comp3}
            />
        </Drawer.Navigator>
    </NavigationContainer>
}

export default App;