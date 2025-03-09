import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import stylesUserScreen from "../StylesUserScreen";
import {SimpleRecipeCard} from "../../../components/RecipeCard";
import {AddRecipeScreen} from "../../addRecipe/AddRecipeComponent";
import React, {useEffect} from "react";
import preparedRecipeViewModel from "./ViewModel";
import {AppColors} from "../../../theme/AppTheme";
import stylesPreparedRecipes from "./StylesPreparedRecipes";
import {detailedRecipeInterface} from "../../../interfaces/recipeInterface";

const PreparedRecipes = () => {
    const{user, getAllRecipesByUser, recipes} = preparedRecipeViewModel()

    useEffect(() => {
        if (user?.id){
            getAllRecipesByUser(user.id)
        }
    }, [user?.id]);
    const renderItem = ({ item }: { item: detailedRecipeInterface }) => {

        return (
            <View style={stylesPreparedRecipes.recipesContainer}>
                <SimpleRecipeCard
                    recipe={item}
                    cardColor={AppColors.white}
                    onPressFromInterface={() => {}}
                />
            </View>
        );
    };
    return(
        <View style={stylesPreparedRecipes.mainContainer}>
            <TouchableOpacity style={stylesPreparedRecipes.arrowBack}>
                <Image source={require('../../../../../assets/arrow-back.png')}/>
            </TouchableOpacity>

            <Text style={stylesPreparedRecipes.textTitle}>Prepared Recipes</Text>

            <FlatList data={recipes} renderItem={renderItem}/>
        </View>
    )
}

export default PreparedRecipes