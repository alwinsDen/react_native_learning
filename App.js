import React, {useState} from "react"
import {Alert, Modal, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./styles/styles";

const App = () => {

    const [modal1State, setModal1State] = useState(false)

    return <View
    >
        <TouchableOpacity
            style={styles.alertButton}

            onPress={() => {
                Alert.alert("Clicked", "You clicked on this worst button", [
                        {
                            text: "I didnt", onPress: () => {
                                ToastAndroid.show("U pressed option1", ToastAndroid.SHORT)
                            },
                            style: "destructive" //works only on IOS
                        },
                        {
                            text: "Yes, I did", onPress: () => {
                                ToastAndroid.show("You clicked option 2", ToastAndroid.SHORT)
                            }
                        },
                        {
                            text: "OK", onPress: () => {
                                ToastAndroid.show("U clicked option 3", ToastAndroid.SHORT)
                            }
                        }
                    ],
                    {
                        cancelable: true, //closes when clicked outside
                        onDismiss: () => {
                            console.warn("This is a necessary step");
                        }
                    })
            }
            }
        >
            <Text>ALERT</Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={{
                ...styles.alertButton,
                margin: 10
            }}
            onPress={() => {
                ToastAndroid.show("This is a basic alert", ToastAndroid.SHORT)
            }
            }
        >
            <Text>
                Normal Toast
            </Text>
        </TouchableOpacity>


        {/*    toast with gravity*/}
        {/*    positon can be changed*/}
        <TouchableOpacity
            style={{
                ...styles.alertButton,
                margin: 10
            }}
            onPress={() => {
                ToastAndroid.showWithGravity("This is a gravity toast", ToastAndroid.SHORT, ToastAndroid.TOP)
            }
            }
        >
            <Text>
                Gravity toast
            </Text>
        </TouchableOpacity>


        {/*    position can be changed with left and top para*/}
        <TouchableOpacity
            style={{
                ...styles.alertButton,
                margin: 10
            }}
            onPress={() => {
                ToastAndroid.showWithGravityAndOffset("This is an offset alert", ToastAndroid.SHORT, ToastAndroid.TOP, 0, 200)
            }
            }
        >
            <Text>
                Gravity toast with offset
            </Text>
        </TouchableOpacity>

        {/*    modal and custom alerts*/}
        <TouchableOpacity
            style={
                {
                    ...styles.alertButton,
                    margin: 10
                }
            }
            onPress={() => setModal1State(true)}
        >
            <Text>
                Click here to open Modal / Popup
            </Text>
        </TouchableOpacity>

        {/*    Here is the modal for above*/}
        <Modal
            visible={modal1State}
            transparent
            //for adding animation
            animated={"slide"}
            onRequestClose={() => { //function is called when backbutton is press
                setModal1State(!modal1State)
            }
            }
            hardwareAccelerated //for better performance (ONLY for Android)
        >
            <View
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"rgba(241,241,241,0.62)"
                }}
            >
                <View style={{
                    backgroundColor:"#e3e3e3",
                    width: "80%",
                    height:"40%",
                    borderRadius:10,
                    padding:10
                }}>
                    <Text>
                        Charge level very low
                    </Text>
                </View>
            </View>
        </Modal>
    </View>
}

export default App;