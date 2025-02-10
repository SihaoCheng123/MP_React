import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {simpleRecipeInterface} from "../interfaces/recipeInterface";
import {AppColors} from "../theme/AppTheme";

interface IRecipeCardProps {
    recipe: simpleRecipeInterface;
}

export const SimpleRecipeCard = ({recipe}: IRecipeCardProps) => {
const colors = [
    {id: 0, color: AppColors.white},
    {id: 1, color: AppColors.secondary},
    {id: 2, color: AppColors.primary}
 ]

    if (colors.length > 2){
        return (
            <FlatList data={colors}
                      renderItem={({item}) =>
                          <View style={{...styleSimpleRecipeCardStyle.mainRecipeCardContainer, backgroundColor:item.color}}>
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
                      }></FlatList>
        )
    }else {
        return (
            <View style={noRecipeCardStyle.mainRecipeCardContainer}>
                <Text style={noRecipeCardStyle.text}>Add a meal for today</Text>
            </View>
        )
    }



}

const styleSimpleRecipeCardStyle = StyleSheet.create({
    mainRecipeCardContainer: {
        width: '80%',
        flexDirection: 'column',
        alignSelf: 'center',
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

const noRecipeCardStyle = StyleSheet.create({
    mainRecipeCardContainer: {
        width: '80%',
        flexDirection: 'column',
        alignSelf: 'center',
        elevation: 3,
        borderRadius: 16,
        backgroundColor: AppColors.white
    },
    text:{
        textAlign: 'center',
        marginVertical: 37,
        marginHorizontal: 74,
        fontSize: 16,
        color: AppColors.grey,
    }
})