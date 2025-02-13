import React from "react";
import {Image, Text, View} from "react-native";
import stylesLogin from "./StylesLogin";
import {LoginFormInput} from "../../components/AuthFormInput";
import {AuthButton} from "../../components/AuthButtons";

function LoginScreen() {

    return (
        <View style={stylesLogin.mainContainer}>

            <View style={stylesLogin.imageContainer}>
                <Image source={require("../../../../assets/logo-weatly.png")} style={stylesLogin.logo}></Image>
            </View>


            <View style={stylesLogin.textCreateAccountContainer}>
                <LoginFormInput placeholder={"Email"}
                                   keyboardType={"email-address"}
                                   secureTextEntry={false}/>

                <LoginFormInput placeholder={"Password"}
                                   keyboardType={"default"}
                                   secureTextEntry={true}/>
                <AuthButton textButton={"Continue"}></AuthButton>
            </View>

            <View style={stylesLogin.textCreateAccountContainer}>
                <Text style={stylesLogin.normalText}>Don’t have an account? Create an account</Text>
            </View>

        </View>

    )
}

export default LoginScreen