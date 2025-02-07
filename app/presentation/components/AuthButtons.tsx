import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {AppColors} from "../theme/AppTheme";

interface IFormButtonProps {
    textButton: string,
    onPressFromInterface?: () => void
}

export const AuthButton = ({textButton}:IFormButtonProps) =>{
    return (
        <View style={styleAuthButton.formButton}>
            <TouchableOpacity>
                <Text style={styleAuthButton.formButtonText}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styleAuthButton = StyleSheet.create({
    formButton:{
        backgroundColor:AppColors.primary,
        borderRadius: 38,
        width: '100%',
        alignSelf: 'center',
        marginHorizontal: 28,
        textAlign: 'center',
    },
    formButtonText:{
        color: AppColors.black,
        fontSize: 12,
        paddingVertical: 11,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
