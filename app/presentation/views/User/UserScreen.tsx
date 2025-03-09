import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import stylesUserScreen from "./StylesUserScreen";
import {PropsStackNavigation} from "../../interfaces/StackNav";

function UserScreen({navigation}:PropsStackNavigation) {

    return (
        <View style={stylesUserScreen.mainContainer}>

            <View style={stylesUserScreen.imageContainer}>
                <Image style={stylesUserScreen.image} source={require("../../../../assets/image-user.png")}/>
                <Text style={stylesUserScreen.text}>Username</Text>
            </View>

            <View style={stylesUserScreen.boxAccountContainer}>

                <Text style={stylesUserScreen.textAccount}>Account overview</Text>

                <View style={stylesUserScreen.boxContainer}>

                    <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                        <View style={stylesUserScreen.rowContainer}>
                            <Image style={stylesUserScreen.iconsAccountContainer} source={require("../../../../assets/user.png")}/>
                            <Text>My profile</Text>
                            <Image source={require("../../../../assets/chevron-right.png")}
                            style={stylesUserScreen.imageArrow}
                            ></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("FavRecipeScreen")}>
                        <View style={stylesUserScreen.rowContainer}>
                            <Image style={stylesUserScreen.iconsAccountContainer} source={require("../../../../assets/proicons_star.png")}/>
                            <Text>Favourite recipes</Text>
                            <Image source={require("../../../../assets/chevron-right.png")}
                                   style={stylesUserScreen.imageArrow}
                            ></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("PreparedRecipeScreen")}>
                        <View style={stylesUserScreen.rowContainer}>
                            <Image style={stylesUserScreen.iconsAccountContainer} source={require("../../../../assets/material-symbols-light_bookmark-outline-rounded.png")}/>
                            <Text>Prepared recipes</Text>
                            <Image source={require("../../../../assets/chevron-right.png")}
                                   style={stylesUserScreen.imageArrow}
                            ></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("PasswordScreen")}>
                        <View style={stylesUserScreen.rowContainer}>
                            <Image style={stylesUserScreen.iconsAccountContainer} source={require("../../../../assets/circum_lock.png")}/>
                            <Text>Change password</Text>
                            <Image source={require("../../../../assets/chevron-right.png")}
                                   style={stylesUserScreen.imageArrow}
                            ></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
                        <View style={stylesUserScreen.rowContainer}>
                            <Image style={stylesUserScreen.iconsAccountContainer} source={require("../../../../assets/settings-icon.png")}/>
                            <Text>Settings</Text>
                            <Image source={require("../../../../assets/chevron-right.png")}
                                   style={stylesUserScreen.imageArrow}
                            ></Image>
                        </View>
                    </TouchableOpacity>


                </View>

            </View>

        </View>
    )
}

export default UserScreen