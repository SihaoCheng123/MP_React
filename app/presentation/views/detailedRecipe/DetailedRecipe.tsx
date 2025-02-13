import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {SimpleIngredientCard} from "../../components/IngredientSimpleCard";
import {SimpleStepsCard} from "../../components/StepsCard";
import stylesDetailedRecipe from "./StylesDetailedRecipe";

// interface IDetailedRecipeProps {
//     detailedRecipe: detailedRecipeInterface
// }

export const DetailedRecipeScreen = () =>{

    const recipe = {recipeName: "Waffles with dulce de leche",
        time: "20 mins",
        serving: 2,
        image:require("../../../../assets/pancakes.png"),
        ingredients:[{ingredientName: "Huevo", image: require("../../../../assets/defaultImage.png")},
            {ingredientName:"Azucar", image: require("../../../../assets/defaultImage.png")},
            {ingredientName: "Harina", image: require("../../../../assets/defaultImage.png")},
            {ingredientName: "Mantequilla", image: require("../../../../assets/defaultImage.png")},],
        steps: [{stepNumber: 1, stepDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"},
            {stepNumber: 2, stepDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "},
            {stepNumber: 3, stepDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"},
            {stepNumber: 4, stepDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"},
            {stepNumber: 5, stepDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"},
            {stepNumber: 6, stepDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"},
            {stepNumber: 7, stepDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}],
    }

    const [chosen, setChosen] = useState(true)

    return (
        <View style={stylesDetailedRecipe.mainContainer}>
            <View style={stylesDetailedRecipe.imageContainer}>
                {recipe.image ?(
                    <View>
                        <Image source={recipe.image} style={stylesDetailedRecipe.viewWithImage}/>
                        <View style={stylesDetailedRecipe.iconsContainer}>
                            <Image source={require('../../../../assets/back.png')} />
                            <Image source={require('../../../../assets/fav.png')}/>
                        </View>
                    </View>

                ):(
                    <View style={stylesDetailedRecipe.viewWithoutImage}>
                        <View style={stylesDetailedRecipe.iconsContainer}>
                            <Image source={require('../../../../assets/back.png')} />
                            <Image source={require('../../../../assets/fav.png')}/>
                        </View>
                    </View>
                )}

            </View>

            <View style={stylesDetailedRecipe.recipeDetailsContainer}>
                <View style={stylesDetailedRecipe.recipeDetailsConstraintContainer}>
                    <Text style={stylesDetailedRecipe.recipeName}>{recipe.recipeName}</Text>
                    <View style={stylesDetailedRecipe.timeContainer}>
                        <Image source={require('../../../../assets/clock.png')} />
                        <Text style={stylesDetailedRecipe.timeText}>{recipe.time}</Text>
                    </View>
                    <View style={stylesDetailedRecipe.servingsContainer}>
                        <Text style={stylesDetailedRecipe.servingsText}>Servings</Text>
                        <View style={stylesDetailedRecipe.servingsAmountContainer}>
                            <Image source={require("../../../../assets/Minus.png")}/>
                            <Text style={stylesDetailedRecipe.itemServingAmount}>{recipe.serving}</Text>
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

                    <View style={{display: chosen? "flex" : "none"}}>
                        <Text style={stylesDetailedRecipe.addText}>Add all to cart</Text>
                        <SimpleIngredientCard ingredients={recipe.ingredients}/>
                    </View>
                    <View style={{display: chosen? "none" : "flex", marginTop: 40}}>
                        <SimpleStepsCard steps={recipe.steps}/>
                    </View>
                </View>
            </View>

        </View>
    )
}

