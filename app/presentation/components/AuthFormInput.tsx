import React from "react";
import {KeyboardType, StyleSheet, TextInput, View} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface IFormInputProps {
    placeholder: string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
}

export const RegisterFormInput = ({placeholder, keyboardType, secureTextEntry}: IFormInputProps) => {
    return (
        <View style={styleFormRegister.formInputContainer}>
            <TextInput style={styleFormRegister.formInput}
                       placeholder={placeholder}
                       keyboardType={keyboardType}
                       secureTextEntry={secureTextEntry}/>
        </View>
    )
}

//Aquí debes crear los form inputs del Login con su estilo (debajo) y los instancias en la view principal de Login

export const LoginFormInput = ({placeholder, keyboardType, secureTextEntry}: IFormInputProps) => {
    return (
        <View style={styleLoginForm.formInputContainer}>
            <TextInput style={styleLoginForm.formInput}
                       placeholder={placeholder}
                       keyboardType={keyboardType}
                       secureTextEntry={secureTextEntry}/>
        </View>
    )
}

const styleFormRegister = StyleSheet.create({
    formInputContainer: {
        marginBottom: 25,
        flexDirection: "row",
        alignSelf: 'center',
    },
    formInput: {
        backgroundColor: AppColors.cardsGreyBackgroundRegisterAndRecipes,
        paddingHorizontal: 25,
        borderRadius: 38,
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        fontWeight: 'bold',
        fontSize: 12
    },
})

const styleLoginForm = StyleSheet.create({
    formInputContainer: {
        marginBottom: 25,
        flexDirection: "row",
        alignSelf: 'center',
        textAlign: "center",
    },
    formInput: {
        borderColor: AppColors.primary,
        borderWidth: 1,
        padding: 11,
        borderRadius: 38,
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: "center",
    },
})


