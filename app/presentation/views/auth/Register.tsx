import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {AppColors} from "../../theme/AppTheme";
import {RegisterFormInput} from "../../components/AuthFormInput";
import {AuthButton} from "../../components/AuthButtons";


function RegisterScreen() {

    return(
        <View style={styleRegister.mainContainer}>
            <View style={styleRegister.textCreateAccountContainer}>
                <Text style={styleRegister.textCreateAccount}>Create an account</Text>
            </View>

            <View style={styleRegister.textCreateAccountContainer}>
                <Text style={styleRegister.textDescription}>Plan and enjoy your meals with Weatly</Text>
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
                    <AuthButton textButton={"Create account"}/>
                </View>

                <View style={styleRegister.signInText}>
                    <Text style={styleRegister.normalText}>Already have an account? <Text style={styleRegister.highlightedText}>Sign in</Text></Text>
                </View>

            </View>
        </View>
    )
}

const styleRegister = StyleSheet.create({
    mainContainer:{
        backgroundColor:  AppColors.background,
        width: '100%',
        height: '100%',
    },
    textCreateAccountContainer:{
        alignSelf: 'center',
        width:'100%',
    },
    textCreateAccount:{
        marginTop: 100,
        fontSize: 36,
        color: AppColors.black,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
    },
    textDescription:{
        fontSize: 12,
        fontFamily: 'Poppins',
        color: AppColors.black,
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
        marginTop: 15,
        marginBottom: 25,
    },
    mainContent:{
        width:'80%',
        alignSelf: 'center',
    },
    checkboxAndTextContainer:{
        display: 'flex',
        flexDirection:'row',
        width:'100%',
        marginBottom: 22
    },
    checkbox: {
        backgroundColor: AppColors.cardsGreyBackgroundRegisterAndRecipes,
        width: 19,
        height: 19,
        borderRadius: 3,
        marginEnd: 15 ,
    },
    normalText:{
        color: AppColors.grey,
        fontSize: 12,
        fontFamily: 'Poppins',
    },
    highlightedText:{
        color: AppColors.primary,
        fontSize: 12,
        fontFamily: 'Poppins',
    },
    signInText:{
        marginTop: 40,
        alignSelf: 'center',
    }
})

export default RegisterScreen