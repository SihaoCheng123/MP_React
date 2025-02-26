import React, {useEffect} from "react";
import {Image, Text, ToastAndroid, View} from "react-native";
import stylesLogin from "./StylesLogin";
import {LoginFormInput} from "../../components/AuthFormInput";
import {AuthButton} from "../../components/AuthButtons";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {AppColors} from "../../theme/AppTheme";
import viewModel from "./ViewModel";

function LoginScreen({navigation}:PropsStackNavigation) {

    const {email, password, onChangeLogin, login, errorMessage, user} = viewModel.LoginViewModel()
    useEffect(() => {
        if (errorMessage != ""){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage])

    useEffect(() => {
        if (user && user?.token){
            navigation.replace("TabNavigator")
        }
    }, [user]);

    return (
        <View style={stylesLogin.mainContainer}>

            <View style={stylesLogin.imageContainer}>
                <Image source={require("../../../../assets/logo-weatly.png")} style={stylesLogin.logo}></Image>
            </View>


            <View style={stylesLogin.textCreateAccountContainer}>
                <LoginFormInput placeholder={"Email"}
                                   keyboardType={"default"}
                                   secureTextEntry={false}
                onPressFromInterface={(text) => onChangeLogin('email', text)}/>

                <LoginFormInput placeholder={"Password"}
                                   keyboardType={"default"}
                                   secureTextEntry={true}
                                onPressFromInterface={(text) => onChangeLogin('password', text)}/>

                <AuthButton textButton={"Continue"}
                onPressFromInterface={() => {login()}}/>
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