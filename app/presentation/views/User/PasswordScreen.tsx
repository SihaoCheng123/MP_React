import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import stylesUserScreen from "./StylesUserScreen";
import React from "react";

const PasswordScreen = () => {
    return (
        <View style={stylesUserScreen.mainContainer}>
            <TouchableOpacity>
                <Image source={require('../../../../assets/arrow-back.png')}/>
            </TouchableOpacity>


            <View style={stylesUserScreen.profileImageContainer}>

                <Text style={stylesUserScreen.textTitle}>Enter and confirm your {'\n'} new password</Text>
                <Image

                    source={require('../../../../assets/security.png')}
                />
            </View>

            <View style={stylesUserScreen.profileFormContainer}>
                <Text style={stylesUserScreen.label}>Old password</Text>
                <TextInput style={stylesUserScreen.input}/>

                <Text style={stylesUserScreen.label}>New password</Text>
                <TextInput style={stylesUserScreen.input}/>

                <Text style={stylesUserScreen.label}>Confirm password</Text>
                <TextInput style={stylesUserScreen.input}/>

            </View>
        </View>
    );
}

export default PasswordScreen;
