import React from "react"
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Comp1 from "./pages/Comp1";
import Comp2 from "./pages/Comp2";
import Comp3 from "./pages/Comp3";

const Stack = createStackNavigator();

const App = () => {
    return <NavigationContainer>
        <Stack.Navigator
            // TO remove header globally and other options

            // screenOptions={{
            //     header: () => null
            // }}
        >
            <Stack.Screen
                name={"Screen_A"}
                component={Comp1}
                options={{
                    // title:"herro there" there are many options,
                    header: () => null //removes header for Screen_A
                }}
            />
            <Stack.Screen
                name={"Screen_B"}
                component={Comp2}
            />
            <Stack.Screen
                name={"Screen_C"}
                component={Comp3}
            >
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}

export default App;