import React from "react";
import {Image, Text, View} from "react-native";
import stylesUserScreen from "./StylesUserScreen";

function UserScreen() {

    return (
        <View style={stylesUserScreen.mainContainer}>

            <View style={stylesUserScreen.imageContainer}>
                <Image style={stylesUserScreen.image} source={require("../../../../assets/image-user.png")}/>
                <Text style={stylesUserScreen.text}>Username</Text>
            </View>

            <View style={stylesUserScreen.boxAccountContainer}>
                <Text style={stylesUserScreen.textAccount}>Account overview</Text>

                <View style={stylesUserScreen.boxContainer}>
                    <Image source={require("../../../../assets/user.png")}/>
                    <Text>My profile</Text>
                    <Image source={require("../../../../assets/chevron-right.png")}></Image>
                </View>

                <View style={stylesUserScreen.boxContainer}>
                    <Image source={require("../../../../assets/user.png")}/>
                    <Text>Favourite recipes</Text>
                    <Image source={require("../../../../assets/chevron-right.png")}></Image>
                </View>

                <View style={stylesUserScreen.boxContainer}>
                    <Image source={require("../../../../assets/user.png")}/>
                    <Text>Prepared recipes</Text>
                    <Image source={require("../../../../assets/chevron-right.png")}></Image>
                </View>

                <View style={stylesUserScreen.boxContainer}>
                    <Image source={require("../../../../assets/circum_lock.png")}/>
                    <Text>Change password</Text>
                    <Image source={require("../../../../assets/chevron-right.png")}></Image>
                </View>

                <View style={stylesUserScreen.boxContainer}>
                    <Image source={require("../../../../assets/settings-icon.png")}/>
                    <Text>Settings</Text>
                    <Image source={require("../../../../assets/chevron-right.png")}></Image>
                </View>

            </View>

        </View>
    )
}

export default UserScreen