import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {SimpleIngredientCard} from "../../components/IngredientSimpleCard";
import {SimpleStepsCard} from "../../components/StepsCard";
import stylesDetailedRecipe from "./StylesDetailedRecipe";
import DetailedRecipeViewModel from "./ViewModel";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {RecipeLocalStorage} from "../../hooks/RecipeLocalStorage";

// interface IDetailedRecipeProps {
//     detailedRecipe: detailedRecipeInterface
// }

export const DetailedRecipeScreen = ({navigation}: PropsStackNavigation) =>{
    const {getDetailedRecipe, recipe, user, setFavRecipeUseCase} = DetailedRecipeViewModel()
    const {recipeId} = RecipeLocalStorage()
    useEffect(() => {
        if (recipeId){
            console.log("id recibido" + recipeId);
            getDetailedRecipe(recipeId);
        }
    },[])

    const [chosen, setChosen] = useState(true)
    return (
        <View style={stylesDetailedRecipe.mainContainer}>
            <View style={stylesDetailedRecipe.imageContainer}>
                {recipe?.image ?(
                    <View>
                        <Image source={{uri: recipe.image}} style={stylesDetailedRecipe.viewWithImage}/>
                        <View style={stylesDetailedRecipe.iconsContainer}>
                            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                                <Image source={require('../../../../assets/back.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => {if (recipe?.id && user?.id){
                                setFavRecipeUseCase(recipe?.id, user?.id)}}}>
                                <Image source={require('../../../../assets/fav.png')}/>
                            </TouchableOpacity>

                        </View>
                    </View>

                ):(
                    <View style={stylesDetailedRecipe.viewWithoutImage}>
                        <View style={stylesDetailedRecipe.iconsContainer}>
                            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                                <Image source={require('../../../../assets/back.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {if (recipe?.id && user?.id){
                                    setFavRecipeUseCase(recipe?.id, user?.id)}}}>
                                <Image source={require('../../../../assets/fav.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

            </View>

            <View style={stylesDetailedRecipe.recipeDetailsContainer}>
                <View style={stylesDetailedRecipe.recipeDetailsConstraintContainer}>
                    <Text style={stylesDetailedRecipe.recipeName}>{recipe?.name}</Text>
                    <View style={stylesDetailedRecipe.timeContainer}>
                        <Image source={require('../../../../assets/clock.png')} />
                        <Text style={stylesDetailedRecipe.timeText}>{recipe?.time}</Text>
                    </View>
                    <View style={stylesDetailedRecipe.servingsContainer}>
                        <Text style={stylesDetailedRecipe.servingsText}>Servings</Text>
                        <View style={stylesDetailedRecipe.servingsAmountContainer}>
                            <Image source={require("../../../../assets/Minus.png")}/>
                            <Text style={stylesDetailedRecipe.itemServingAmount}>{recipe?.rations}</Text>
                            <Image source={require("../../../../assets/Add.png")}/>
                        </View>
                    </View>

                    <View style={stylesDetailedRecipe.tabContainer}>
                        <TouchableOpacity style={chosen ? stylesDetailedRecipe.tabContainerChosen : stylesDetailedRecipe.eachTab}
                        onPress={()=> setChosen(!chosen)}>
                            <Text style={chosen ? stylesDetailedRecipe.tabTextChosen : stylesDetailedRecipe.tabText}>Ingredients</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={chosen ? stylesDetailedRecipe.eachTab : stylesDetailedRecipe.tabContainerChosen}
                                          onPress={()=> setChosen(!chosen)}>
                            <Text style={chosen ? stylesDetailedRecipe.tabText : stylesDetailedRecipe.tabTextChosen}>Steps</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ position: "relative", height: 200 }}>
                        <View style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: chosen ? 1 : 0 }}>
                            <Text style={stylesDetailedRecipe.addText}>Add all to cart</Text>
                            <SimpleIngredientCard ingredients={recipe?.ingredients} />
                        </View>

                        <View style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: chosen ? 0 : 1 , marginTop: 40}}>
                            <SimpleStepsCard steps={recipe?.steps} />
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

