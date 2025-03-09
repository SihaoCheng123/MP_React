import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {detailedRecipeInterface, simpleRecipeInterface} from "../interfaces/recipeInterface";
import {AppColors} from "../theme/AppTheme";

interface IRecipeCardProps {
    recipe: detailedRecipeInterface | undefined;
    cardColor: string,
    onPressFromInterface?: () => void;
}

export const SimpleRecipeCard = ({recipe, cardColor, onPressFromInterface}: IRecipeCardProps) => {


    return (
        <TouchableOpacity
            style={{
                ...styleSimpleRecipeCardStyle.mainRecipeCardContainer,
                backgroundColor: cardColor // ✅ Usamos el color directamente
            }}
            onPress={onPressFromInterface}
        >
            {recipe ? (
                <>
                    <Text style={styleSimpleRecipeCardStyle.recipeNameText}>{recipe.name}</Text>
                    <View style={styleSimpleRecipeCardStyle.imgAndIngredientsContainer}>
                        <Image
                            style={styleSimpleRecipeCardStyle.ingredientImg}
                            source={{ uri: String(recipe.image) }}
                        />
                        <View style={styleSimpleRecipeCardStyle.ingredientsContainer}>
                            <FlatList
                                data={recipe.ingredients.slice(0,3)}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <Text style={styleSimpleRecipeCardStyle.ingredientsText}>{item.name}</Text>
                                )}
                            />
                        </View>
                    </View>
                </>
            ) : (
                <View style={noRecipeCardStyle.mainRecipeCardContainer}>
                    <Text style={noRecipeCardStyle.text}>Add a meal for today</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};


const styleSimpleRecipeCardStyle = StyleSheet.create({
    mainRecipeCardContainer: {
        width: '75%',
        flexDirection: 'column',
        alignSelf: 'center',
        elevation: 2,
        borderRadius: 16,
        marginVertical: 30,
    },
    recipeNameText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 13,
        marginBottom: 5,
    },
    imgAndIngredientsContainer: {
        flexDirection: 'row',
        marginEnd: 40,
        marginBottom: 20,
        justifyContent: 'space-around',
        marginTop: 10
    },
    ingredientImg: {
        width: 60,
        height: 60,
    },
    ingredientsContainer:{
      display: 'flex',
      flexDirection: 'column',
        alignItems: 'center',
    },
    ingredientsText: {
        fontSize: 16,
    }
})

const noRecipeCardStyle = StyleSheet.create({
    mainRecipeCardContainer: {
        width: '80%',
        flexDirection: 'column',
        alignSelf: 'center',
        borderRadius: 16,
    },
    text:{
        textAlign: 'center',
        marginVertical: 37,
        marginHorizontal: 44,
        fontSize: 16,
        color: AppColors.grey,
    }
})