import React from "react";
import {Pressable, Text, View} from "react-native";
import {RegisterFormInput} from "../../components/AuthFormInput";
import {AuthButton} from "../../components/AuthButtons";
import styleRegister from "./StylesRegister";
import {PropsStackNavigation} from "../../interfaces/StackNav";


function RegisterScreen({navigation}: PropsStackNavigation) {

    return(
        <View style={styleRegister.mainContainer}>
            <View style={styleRegister.textCreateAccountContainer}>
                <Text style={styleRegister.textCreateAccount}>Create an account</Text>
            </View>

            <View style={styleRegister.textCreateAccountContainer}>
                <Text style={styleRegister.textDescription}>Plan and enjoy your meals with <Text style={styleRegister.highlightedText}>Weatly</Text></Text>
            </View>

            <View style={styleRegister.mainContent}>
               <RegisterFormInput placeholder={"First name"}
                          keyboardType={"default"}
                          secureTextEntry={false}/>

                <RegisterFormInput placeholder={"Last name"}
                           keyboardType={"default"}
                           secureTextEntry={false}/>

                <RegisterFormInput placeholder={"Age"}
                           keyboardType={"numeric"}
                           secureTextEntry={false}/>

                <RegisterFormInput placeholder={"Email"}
                           keyboardType={"email-address"}
                           secureTextEntry={false}/>

                <RegisterFormInput placeholder={"Password"}
                           keyboardType={"default"}
                           secureTextEntry={true}/>

                <RegisterFormInput placeholder={"Repeat password"}
                           keyboardType={"default"}
                           secureTextEntry={true}/>

                <View style={styleRegister.checkboxAndTextContainer}>
                    <Pressable style={styleRegister.checkbox}/>
                    <Text style={styleRegister.normalText}>I agree to the <Text style={styleRegister.highlightedText}>Terms & Conditions</Text></Text>
                </View>

                <View>
                    <AuthButton textButton={"Create account"}
                    onPressFromInterface={() => navigation.navigate("LoginScreen")}/>
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