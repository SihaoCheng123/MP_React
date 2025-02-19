import React, {useEffect} from "react";
import {Pressable, Text, ToastAndroid, View} from "react-native";
import {RegisterFormInput} from "../../components/AuthFormInput";
import {AuthButton} from "../../components/AuthButtons";
import styleRegister from "./StylesRegister";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import viewModel from "./ViewModel";


function RegisterScreen({navigation}: PropsStackNavigation) {

    const {name, age, password, repeatPassword, phone, email, onChangeRegister, register, errorMessage} = viewModel.RegisterViewModel()
    useEffect(()=>{
        if (errorMessage != ""){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage])

    return(
        <View style={styleRegister.mainContainer}>
            <View style={styleRegister.textCreateAccountContainer}>
                <Text style={styleRegister.textCreateAccount}>Create an account</Text>
            </View>

            <View style={styleRegister.textCreateAccountContainer}>
                <Text style={styleRegister.textDescription}>Plan and enjoy your meals with <Text style={styleRegister.highlightedText}>Weatly</Text></Text>
            </View>

            <View style={styleRegister.mainContent}>
               <RegisterFormInput placeholder={"Name"}
                          keyboardType={"default"}
                          secureTextEntry={false}
               onPressFromInterface={(text) => onChangeRegister("name", text)}/>

                <RegisterFormInput placeholder={"Age"}
                           keyboardType={"numeric"}
                           secureTextEntry={false}
                onPressFromInterface={(text) => onChangeRegister("age", text)}/>

                <RegisterFormInput placeholder={"Phone"}
                                   keyboardType={"phone-pad"}
                                   secureTextEntry={false}
                                   onPressFromInterface={(text) => onChangeRegister("phone", text)}/>

                <RegisterFormInput placeholder={"Email"}
                           keyboardType={"email-address"}
                           secureTextEntry={false}
                onPressFromInterface={(text) => onChangeRegister("email", text)}/>

                <RegisterFormInput placeholder={"Password"}
                           keyboardType={"default"}
                           secureTextEntry={true}
                onPressFromInterface={(text) => onChangeRegister("password", text)}/>

                <RegisterFormInput placeholder={"Repeat password"}
                           keyboardType={"default"}
                           secureTextEntry={true}
                onPressFromInterface={(text) => onChangeRegister("repeatPassword", text)}/>

                <View style={styleRegister.checkboxAndTextContainer}>
                    <Pressable style={styleRegister.checkbox}/>
                    <Text style={styleRegister.normalText}>I agree to the <Text style={styleRegister.highlightedText}>Terms & Conditions</Text></Text>
                </View>

                <View>
                    <AuthButton textButton={"Create account"}
                    onPressFromInterface={() => {register()
                    navigation.navigate("LoginScreen")}}/>
                </View>

                <View style={styleRegister.signInText}>
                    <Text style={styleRegister.normalText}>Already have an account?
                        <Text style={styleRegister.highlightedText}
                        onPress={() => navigation.navigate("LoginScreen")}> Sign in</Text></Text>
                </View>

            </View>
        </View>
    )
}

export default RegisterScreen