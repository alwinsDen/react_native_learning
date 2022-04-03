import React from "react"
import {Button, Text, View} from "react-native";

const Comp1 = ({navigation}) => {
    return <View>
        <Text>Tetse</Text>
        <Button title={"Open Drawer"}
                onPress={() => {
                    navigation.toggleDrawer(); //to open drawer
                }
                }
        >
        </Button>
    </View>
}

export default Comp1;