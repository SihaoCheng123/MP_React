import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import stylesUserScreen from "./StylesUserScreen";

const ProfileScreen = () => {

    return (
        <View style={stylesUserScreen.mainContainer}>
            <TouchableOpacity>
                <Image source={require('../../../../assets/arrow-back.png')}/>
            </TouchableOpacity>

            <View style={stylesUserScreen.profileImageContainer}>
                <Image
                    style={stylesUserScreen.profileImage}
                    source={require('../../../../assets/image-user.png')}
                />
                <TouchableOpacity style={stylesUserScreen.editButton}>
                    <Text style={stylesUserScreen.editText}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={stylesUserScreen.profileFormContainer}>
                <Text style={stylesUserScreen.label}>Name</Text>
                <TextInput style={stylesUserScreen.input}/>

                <Text style={stylesUserScreen.label}>Email</Text>
                <TextInput style={stylesUserScreen.input}/>

                <Text style={stylesUserScreen.label}>Age</Text>
                <TextInput style={stylesUserScreen.input}/>

                <Text style={stylesUserScreen.label}>Phone</Text>
                <TextInput style={stylesUserScreen.input}/>

                <TouchableOpacity style={stylesUserScreen.saveButton}>
                    <Text style={stylesUserScreen.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileScreen;
