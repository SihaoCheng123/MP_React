import {Image, Text, TouchableOpacity, View} from "react-native";
import stylesUserScreen from "./StylesUserScreen";
import {SimpleRecipeCard} from "../../components/RecipeCard";
import {AddRecipeScreen} from "../addRecipe/AddRecipeComponent";
import React from "react";

const PreparedRecipes = () => {
    return(
        <View style={stylesUserScreen.mainContainer}>
            <View>
                <Image source={require('../../../../assets/arrow-back.png')}/>
                <TouchableOpacity>

                </TouchableOpacity>

            </View>

            <View>
                <Text style={stylesUserScreen.textTitle}>Prepared Recipes</Text>
            </View>
        </View>
    )
}

export default PreparedRecipes