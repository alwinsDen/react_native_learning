import React from "react"
import {Button, Text, View} from "react-native";

const Comp1 = ({navigation}) => {
    return <View>
        <Text>Tetse</Text>
        <Button title={"GO to B"}
                onPress={() => {
                    navigation.navigate("Screen_B")
                }
                }
        >
        </Button>

        {/*REPLACES meaning next component has no back button*/}
        <Button
            style={{
                marginTop: 10
            }}
            title={"Replace with C"}
            onPress={() => {
                navigation.replace("Screen_C")
            }}
        >
        </Button>
    </View>
}

export default Comp1;