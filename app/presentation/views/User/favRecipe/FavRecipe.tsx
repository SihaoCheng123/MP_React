import {Image, Text, TouchableOpacity, View} from "react-native";
import stylesUserScreen from "../StylesUserScreen";
import React from "react";

const FavRecipe = () => {
    return(
        <View style={stylesUserScreen.mainContainer}>
            <View>
                <TouchableOpacity>
                    <Image source={require('../../../../../assets/arrow-back.png')}/>
                </TouchableOpacity>

            </View>
            <View>
                <Text style={stylesUserScreen.textTitle}>Favourite Recipes</Text>
            </View>

        </View>
    )
}

export default FavRecipe;