import React from "react"
import {Button, Text} from "react-native";

const Comp2 = ({navigation}) => {
    return (
        <><Text>
            Padlenge
        </Text>
            <Button title={"To back"}
                    onPress={() => {
                        navigation.goBack(); //to go back
                    }}
            >
            </Button>
        </>
    )
}
export default Comp2;