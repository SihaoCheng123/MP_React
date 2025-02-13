import React from "react";
import {Image, Text, View} from "react-native";
import stylesLogin from "./StylesLogin";
import {LoginFormInput} from "../../components/AuthFormInput";
import {AuthButton} from "../../components/AuthButtons";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {AppColors} from "../../theme/AppTheme";

function LoginScreen({navigation}:PropsStackNavigation) {

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
                <AuthButton textButton={"Continue"}
                onPressFromInterface={() =>navigation.replace("TabNavigator")}/>
            </View>

            <Text style={stylesLogin.textCreateAccountContainer}>
                <Text style={stylesLogin.normalText}>Don’t have an account?
                    <Text style={{color:AppColors.primary}}
                          onPress={() => navigation.navigate("RegisterScreen")}> Create an account</Text>
                </Text>
            </Text>

        </View>

    )
}

export default LoginScreen