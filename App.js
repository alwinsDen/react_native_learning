import React from "react"
import {Image, ImageBackground, View} from "react-native";
import gta from "./assets/gta.jpg"

const App = () => {
    return <ImageBackground
        source={{uri:"https://images.pexels.com/photos/11426821/pexels-photo-11426821.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}}
        style={{
        width: "100%",
        height:"100%",

    }}>
        <Image source={gta}
               style={{
                   height: 300,
                   aspectRatio:1,
               }}
               resizeMode="stretch"
        />
    </ImageBackground>
}

export default App;