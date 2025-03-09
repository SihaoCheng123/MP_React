import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import usePasswordViewModel from "./ViewModel";
import StylesPasswordScreen from "./StylesPasswordScreen";

const PasswordScreen = () => {
    const {
        oldPassword,
        newPassword,
        confirmPassword,
        errorMessage,
        successMessage,
        onChangePassword,
        handleChangePassword,
        user,
    } = usePasswordViewModel();

    return (
        <View style={StylesPasswordScreen.mainContainer}>
            <TouchableOpacity>
                <Image source={require('../../../../../assets/arrow-back.png')} />
            </TouchableOpacity>

            <View style={StylesPasswordScreen.profileImageContainer}>
                <Text style={StylesPasswordScreen.textTitle}>
                    Enter and confirm your {'\n'} new password

                </Text>
                <Image source={require('../../../../../assets/security.png')} />
            </View>

            <View style={StylesPasswordScreen.profileFormContainer}>
                <Text style={StylesPasswordScreen.label}>Old password</Text>
                <TextInput
                    style={StylesPasswordScreen.input}
                    secureTextEntry
                    value={oldPassword}
                    onChangeText={(text) => onChangePassword("oldPassword", text)}
                />

                <Text style={StylesPasswordScreen.label}>New password</Text>
                <TextInput
                    style={StylesPasswordScreen.input}
                    secureTextEntry
                    value={newPassword}
                    onChangeText={(text) => onChangePassword("newPassword", text)}
                />

                <Text style={StylesPasswordScreen.label}>Confirm password</Text>
                <TextInput
                    style={StylesPasswordScreen.input}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={(text) => onChangePassword("confirmPassword", text)}
                />

                {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
                {successMessage ? <Text style={{ color: 'green' }}>{successMessage}</Text> : null}

                <TouchableOpacity
                    style={StylesPasswordScreen.saveButton}
                    onPress={() => {
                        if (user?.id) {
                            handleChangePassword(user.id);
                        }
                    }}
                >
                    <Text style={StylesPasswordScreen.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PasswordScreen;
