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
                <Image source={require('../../../../assets/security.png')} />
            </View>

            <View style={stylesUserScreen.profileFormContainer}>
                <Text style={stylesUserScreen.label}>Old password</Text>
                <TextInput
                    style={stylesUserScreen.input}
                    secureTextEntry
                    // value={oldPassword}
                    // onChangeText={setOldPassword}
                />

                <Text style={stylesUserScreen.label}>New password</Text>
                <TextInput
                    style={stylesUserScreen.input}
                    secureTextEntry
                    // value={newPassword}
                    // onChangeText={setNewPassword}
                />

                <Text style={stylesUserScreen.label}>Confirm password</Text>
                <TextInput
                    style={stylesUserScreen.input}
                    secureTextEntry
                    // value={confirmPassword}
                    // onChangeText={setConfirmPassword}
                />

                {/*{errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}*/}
                {/*{successMessage ? <Text style={{ color: 'green' }}>{successMessage}</Text> : null}*/}

                <TouchableOpacity style={stylesUserScreen.saveButton}>
                    <Text style={stylesUserScreen.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PasswordScreen;
