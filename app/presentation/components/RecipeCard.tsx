import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {simpleRecipeInterface} from "../interfaces/recipeInterface";
import {AppColors} from "../theme/AppTheme";

interface IRecipeCardProps {
    recipe: simpleRecipeInterface;
}

export const SimpleRecipeCard = ({recipe}: IRecipeCardProps) => {

    return (
        <View style={styleSimpleRecipeCardStyle.mainRecipeCardContainer}>
            <Text style={styleSimpleRecipeCardStyle.recipeNameText}>{recipe.recipeName}</Text>
            <View style={styleSimpleRecipeCardStyle.imgAndIngredientsContainer}>
                <Image style={styleSimpleRecipeCardStyle.ingredientImg} source={recipe.image}/>
                <View style={styleSimpleRecipeCardStyle.ingredientsContainer}>
                    <FlatList
                        data={recipe.ingredients}
                        renderItem={
                            ({item}) =>
                                <Text style={styleSimpleRecipeCardStyle.ingredientsText}>{item.ingredientName}</Text>
                        }
                    >
                    </FlatList>
                </View>
            </View>
        </View>
    )
}

const styleSimpleRecipeCardStyle = StyleSheet.create({
    mainRecipeCardContainer: {
        width: '80%',
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: AppColors.white,
        elevation: 2,
        borderRadius: 16,
    },
    recipeNameText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 13,
        marginBottom: 5,
    },
    imgAndIngredientsContainer: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginBottom: 20,
        justifyContent: 'space-evenly',
    },
    ingredientImg: {
        width: 60,
        height: 60,
    },
    ingredientsContainer: {
        flexDirection: 'column',
    },
    ingredientsText: {
        fontSize: 16,
    }


})