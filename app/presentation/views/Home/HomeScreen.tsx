import React from "react";
import {Text, View} from "react-native";
import styleHome from "./StylesHome";
import stylesHome from "./StylesHome";


function HomeScreen() {

    // -- texto de user (bienvenida) --
    return(
        <View style={stylesHome.mainContainer}>
            <Text style={styleHome.textTitleUsername}>HELLO user!</Text>
        </View>
    )
}

export default HomeScreen