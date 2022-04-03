import React from "react"
import {Button, Text} from "react-native";

const Comp2 = ({navigation, route}) => {
    const {message, itemId} = route.params;
    return (
        <>
            <Button title={"To back"}
                    onPress={() => {
                        navigation.goBack(); //to go back
                    }}
            >
            </Button>

            <Text>
                {message}
            </Text>

            <Text>
                Item ID: {itemId}
            </Text>

            <Button title={"Click here to change paramets"}
            onPress={()=> {
                navigation.setParams({
                    message:"Haha you clicked the button"
                })
            }}
            >
            </Button>
        </>
    )
}
export default Comp2;