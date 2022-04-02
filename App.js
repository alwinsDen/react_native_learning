import React, {useState} from "react"
import {Pressable, Text, TextInput, ToastAndroid, TouchableHighlight, TouchableOpacity, View} from "react-native";
import styles from "./styles/styles";

const App = () => {

    const [inputText, setInputText] = useState("test data")
    return <View>
        <Text>
            This is test
        </Text>
        <TextInput
            multiline
            style={styles.inputbar}
            placeholder={"enter your email here"}
            autoCapitalize={"characters"}
            defaultValue={inputText}
            onTextInput={(text) => {
                setInputText(text)
            }
            }
            // editable={false}
            secureTextEntry={true}
        />

        {/*opacity reduces when clicked*/}
        <TouchableOpacity
            style={styles.touchableOpac}
            onPress={() => console.log("This was clicked")}
            activeOpacity={0.5} //opcatity on clicking
        >
            <Text style={styles.textStyle}>
                Herro there
            </Text>
        </TouchableOpacity>

        {/*    highlight does the same thing as opacity but can have custom color*/}
        <TouchableHighlight
            style={{
                ...styles.touchableOpac,
            }
            }
            onPress={() => console.log("This was clicked maybe")}
            underlayColor={"#dddddd"} //set custom color to opacity
        >
            <Text style={styles.textStyle}>
                Herro there
            </Text>
        </TouchableHighlight>


        {/*pressed component amazing*/}
        <Pressable
            onLongPress={() => {
                ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
            }
            }
            delayLongPress={2000}
            // additional pressable padding around button
            hitSlop={{
                top: 10, bottom: 10, right: 10, left: 10
            }
            }
            android_ripple={{color:"#b9b9b9"}}
            style={({pressed}) => [
                {backgroundColor: pressed ? "#ffffff" : "#000000"},
                styles.touchableOpac
            ]}
        >
            <Text style={styles.textStyle}>
                Here is the test text
            </Text>
        </Pressable>


    </View>
}


export default App;