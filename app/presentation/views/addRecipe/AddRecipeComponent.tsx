import {View, Text, TextInput, Image, TouchableOpacity, FlatList, Alert} from "react-native";
import {AppColors} from "../../theme/AppTheme";
import stylesAddRecipe from "./StylesAddRecipe";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {useState} from "react";
import {detailedRecipeInterface, ingredientsInterface, stepsInterface} from "../../interfaces/recipeInterface";

export const AddRecipeScreen = ({navigation}:PropsStackNavigation) =>{
    const categories = [
        {name: "Breakfast", color: AppColors.cardCategoryGreyOpacity},
        {name: "Lunch", color: AppColors.cardCategorySecondary},
        {name: "Dinner", color: AppColors.cardCategoryPrimary},
    ]

    // información de la receta en un solo estado, para actualizar el codigo
    const [newRecipe, setNewRecipe] = useState<detailedRecipeInterface>({
        recipeName:"",
        image:"",
        time:"",
        serving:1,
        ingredients: [],
        steps: [],
    });


    // para que no se creen muchas setStae el handleChange actualizaria cualquier propiedad de newRecipe
    const handleChange = (key: keyof detailedRecipeInterface, value: string | number) =>{
        setNewRecipe({ ...newRecipe, [key]: value});
    }
    /* key = campo a actualizar
    value = nuevo valor de campo
    { ...newRecipe, [key]: value} = mantiene los demas valores sin cambios
     */

    const [ingredientInput, setIngredientInput] = useState("");

    const ingredientsColors = [
        AppColors.cardCategoryGreyOpacity,
        AppColors.cardCategorySecondary,
        AppColors.cardCategoryPrimary
    ];

    const addIngredient = () => {
        if (ingredientInput.trim() !== ""){
            const newIngredient: ingredientsInterface = {
                ingredientName: ingredientInput.trim(),
                color: ingredientsColors[newRecipe.ingredients.length % ingredientsColors.length]
            };
            setNewRecipe({
                ...newRecipe,
                ingredients: [...newRecipe.ingredients, newIngredient]
            });

            setIngredientInput("");
        } else {
            Alert.alert("Error", "The ingredient name cannot be empty.")
        }
    }

    /** const ingredients = [
        {name: "Eggs", color: AppColors.cardCategoryGreyOpacity},
        {name: "Flour", color: AppColors.cardCategorySecondary},
        {name: "Rice", color: AppColors.cardCategoryPrimary},
        {name: "Sugar", color: AppColors.cardCategoryGreyOpacity},
        {name: "Salt", color: AppColors.cardCategorySecondary},
        {name: "Soy sauce", color: AppColors.cardCategoryPrimary},
        {name: "Pasta", color: AppColors.cardCategoryGreyOpacity}
    ] **/


    return (
        <View style={stylesAddRecipe.mainContainer}>
            <TouchableOpacity style={stylesAddRecipe.btnBackContainer}
            onPress={() => navigation.goBack()}>
                <Image source={require("../../../../assets/back.png")}/>
            </TouchableOpacity>
            <View style={stylesAddRecipe.addTextContainer}>
                <Text style={stylesAddRecipe.addText}>Add new
                    <Text style={stylesAddRecipe.textHighlight}> recipe!</Text></Text>
            </View>
            <View style={stylesAddRecipe.constraintContainer}>
                <View style={stylesAddRecipe.formInputContainer}>
                    <TextInput placeholderTextColor={AppColors.cardCategoryGrey}
                               placeholder={"Recipe name*"}
                               value={newRecipe.recipeName}
                               onChangeText={(text) => handleChange("recipeName", text)}
                               keyboardType={"default"}/>

                </View>
                <View style={{...stylesAddRecipe.formInputContainer, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <TextInput placeholderTextColor={AppColors.cardCategoryGrey}
                               placeholder={"Date"}
                               keyboardType={"default"}/>
                    <Image source={require("../../../../assets/calendarAR.png")}
                           style={stylesAddRecipe.iconInput}/>
                </View>
                <View style={{...stylesAddRecipe.formInputContainer, display: "flex", flexDirection: "row", justifyContent: "space-between", width: '45%'}}>
                    <TextInput placeholderTextColor={AppColors.cardCategoryGrey}
                               placeholder={"Time"}
                               value={newRecipe.time}
                               onChangeText={(text) => handleChange("time", text)}
                               keyboardType={"default"}/>
                    <Image source={require("../../../../assets/clock.png")}
                           style={{...stylesAddRecipe.iconInput, width: 15, height: 15}}/>
                </View>
                <View style={{...stylesAddRecipe.formInputContainer, height: 60, marginBottom: 0}}>
                    <TextInput placeholderTextColor={AppColors.cardCategoryGrey}
                               placeholder={"Add steps..."}
                               keyboardType={"default"}/>
                </View>
                <TouchableOpacity>
                    <Text  style={stylesAddRecipe.addNew}>+ Add new</Text>
                </TouchableOpacity>
                <View>
                    <Text style={stylesAddRecipe.categoryText}>Select <Text style={stylesAddRecipe.textHighlight}>category</Text></Text>
                    <View>
                        <FlatList contentContainerStyle={{display:"flex", flexDirection:"row"}}
                            data={categories} renderItem={(item)=>
                            <TouchableOpacity style={{...stylesAddRecipe.eachCategoryCard, backgroundColor: categories[item.index].color}}>
                                <Text style={stylesAddRecipe.eachCategoryText}>{categories[item.index].name}</Text>
                            </TouchableOpacity>
                        }></FlatList>
                        <TouchableOpacity>
                            <Text  style={stylesAddRecipe.addNew}>+ Add new</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                <Text style={stylesAddRecipe.categoryText}>Add <Text style={stylesAddRecipe.textHighlight}>ingredients</Text></Text>

                    <View style={stylesAddRecipe.formInputContainer}>
                        <TextInput placeholderTextColor={AppColors.cardCategoryGrey}
                                   placeholder={"Ingredient name*"}
                                   value={ingredientInput}
                                   onChangeText={setIngredientInput}
                                   keyboardType={"default"}/>
                    </View>
                <View>
                    <FlatList horizontal={false}
                              numColumns={3}
                        contentContainerStyle={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}
                              data={newRecipe.ingredients}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={({item})=>
                        <TouchableOpacity style={{...stylesAddRecipe.eachCategoryCard, backgroundColor: item.color}}>
                            <Text style={stylesAddRecipe.eachCategoryText}>{item.ingredientName}</Text>
                        </TouchableOpacity>
                    }></FlatList>
                    <TouchableOpacity onPress={addIngredient}>
                        <Text  style={stylesAddRecipe.addNew}>+ Add new</Text>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={stylesAddRecipe.btnContainer}>
                    <TouchableOpacity style={stylesAddRecipe.btn}>
                        <Text style={stylesAddRecipe.btnText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

