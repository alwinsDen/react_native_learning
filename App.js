import React,{useState} from "react"
import {StyleSheet, Text, View, Button, Linking} from "react-native"

const App = () => {
    const [sample, setSample] = useState(0)
    return (
        <View style={styles.mainView}>
            <Text style={styles.text}
            >
                This here is a test {sample}
            </Text>
            <Button
                style={styles.button}
                title={"CLick me"}
                onPress={()=> {
                    // Linking.openURL("https://www.instagram.com/");
                    setSample(data=>(data+1));
                }}
            >
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "#000000",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#ffffff",
        fontSize: 30
    },
    button: {
        backgroundColor: "#d2d2d2",
        padding: "1",
        margin:"10"
    }
})

export default App;