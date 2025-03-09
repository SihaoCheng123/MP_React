import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import stylesUserScreen from "../StylesUserScreen";
import useProfileViewModel from "./ViewModel";

const ProfileScreen = ({userId}: {userId:number}) => {
    const {
        email,
        name,
        phone,
        age,
        errorMessage,
        updateUserData,
        onChangeUserUpdate,
    } = useProfileViewModel(userId);
    return (
        <View style={stylesUserScreen.mainContainer}>
            <TouchableOpacity>
                <Image source={require('../../../../../assets/arrow-back.png')}/>
            </TouchableOpacity>

            <View style={stylesUserScreen.profileImageContainer}>
                <Image
                    style={stylesUserScreen.profileImage}
                    source={require('../../../../../assets/image-user.png')}
                />
                <TouchableOpacity style={stylesUserScreen.editButton}>
                    <Text style={stylesUserScreen.editText}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={stylesUserScreen.profileFormContainer}>
                <Text style={stylesUserScreen.label}>Name</Text>
                <TextInput style={stylesUserScreen.input}
                           value={name}
                           onChangeText={(text) => onChangeUserUpdate('name', text)}
                />

                <Text style={stylesUserScreen.label}>Email</Text>
                <TextInput style={stylesUserScreen.input}
                           value={email}
                           onChangeText={(text) => onChangeUserUpdate('email', text)}/>

                <Text style={stylesUserScreen.label}>Age</Text>
                <TextInput style={stylesUserScreen.input}
                           value={age.toString()}
                           onChangeText={(text) => onChangeUserUpdate('age', parseInt(text))}
                           keyboardType="numeric"/>

                <Text style={stylesUserScreen.label}>Phone</Text>
                <TextInput style={stylesUserScreen.input}
                           value={phone}
                           onChangeText={(text) => onChangeUserUpdate('phone', text)}/>

                <TouchableOpacity style={stylesUserScreen.saveButton}>
                    <Text style={stylesUserScreen.saveButtonText}
                          onPress={() =>{
                              if (userId) {
                              updateUserData(userId);
                          }
                          }}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileScreen;
