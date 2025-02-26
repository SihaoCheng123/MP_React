import {View, Text, TextInput, Image, TouchableOpacity, FlatList} from "react-native";
import {AppColors} from "../../theme/AppTheme";
import stylesAddRecipe from "./StylesAddRecipe";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import AddRecipeViewModel from "./ViewModel";
import {useState} from "react";
import {useUserLocalStorage} from "../../hooks/UseUserLocalStorage";
export const AddRecipeScreen = ({navigation}:PropsStackNavigation) =>{

    const categories = [
        {name: "Breakfast", color: AppColors.cardCategoryGreyOpacity},
        {name: "Lunch", color: AppColors.cardCategorySecondary},
        {name: "Snack", color: AppColors.cardCategoryPrimary},
        {name: "Dinner", color: AppColors.cardCategoryGreyOpacity},
];

    const ingredientsColors =
        [AppColors.cardCategoryGreyOpacity, AppColors.cardCategorySecondary, AppColors.cardCategoryPrimary];

    const[categoryPressed, setCategoryPressed] = useState<string | undefined>(undefined)

    const pressCategory = (category: string) => {
        if (categoryPressed === category){
            setCategoryPressed(undefined)
            setNewRecipe(prevRecipe => ({
                ...prevRecipe,
                category: ""
            }));
        }else {
            setCategoryPressed(category)
            setNewRecipe(prevRecipe => ({
                ...prevRecipe,
                category
            }));
        }
    }

    const { user} = useUserLocalStorage();
    const {
        newRecipe,
        setNewRecipe,
        ingredientInput,
        setIngredientInput,
        stepInput,
        addStep,
        setStepInput,
        onChangeRecipe,
        addIngredient,
        saveNewRecipe,
        errorMessage,
        successMessage,
    } = AddRecipeViewModel();


    return (

        // -- receta --
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
                               value={newRecipe.name}
                               onChangeText={(text) => onChangeRecipe("name", text)}
                               keyboardType={"default"}/>
                </View>
                <View style={{...stylesAddRecipe.formInputContainer, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <TextInput placeholderTextColor={AppColors.cardCategoryGrey}
                               placeholder={"Date (YYYY-MM-DD)"}
                               value={newRecipe.date}
                               onChangeText={(text) => onChangeRecipe("date", text)}
                               keyboardType={"default"}/>
                    <Image source={require("../../../../assets/calendarAR.png")}
                           style={stylesAddRecipe.iconInput}/>
                </View>

                <View style={{...stylesAddRecipe.formInputContainer, display: "flex", flexDirection: "row", justifyContent: "space-between", width: '45%'}}>
                    <TextInput placeholderTextColor={AppColors.cardCategoryGrey}
                               placeholder={"Time"}
                               value={newRecipe.time}
                               onChangeText={(text) => onChangeRecipe("time", text)}
                               keyboardType={"default"}/>
                    <Image source={require("../../../../assets/clock.png")}
                           style={{...stylesAddRecipe.iconInput, width: 15, height: 15}}/>
                </View>

                <View style={{...stylesAddRecipe.formInputContainer, height: 60, marginBottom: 0}}>
                    <TextInput placeholderTextColor={AppColors.cardCategoryGrey}
                               placeholder={"Add steps..."}
                               value={stepInput}
                               onChangeText={(text) => setStepInput(text)}
                               keyboardType={"default"}/>
                </View>
                <TouchableOpacity onPress={() => addStep()}>
                    <Text  style={stylesAddRecipe.addNew}>+ Add new</Text>
                </TouchableOpacity>

                <View>
                    <Text style={stylesAddRecipe.categoryText}>Select<Text style={stylesAddRecipe.textHighlight}>category</Text></Text>
                    <View>
                        <FlatList
                            horizontal={false}
                            numColumns={3}
                            contentContainerStyle={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}
                                  data={categories} renderItem={(item)=>
                            <TouchableOpacity
                                onPress={() => pressCategory(categories[item.index].name)}
                                style={{...stylesAddRecipe.eachCategoryCard, backgroundColor: categories[item.index].color,
                                opacity: categoryPressed === categories[item.index].name ? 0.3 : 1}}
                            >
                                <Text style={stylesAddRecipe.eachCategoryText}>{categories[item.index].name}</Text>
                            </TouchableOpacity>
                        }></FlatList>
                    </View>
                </View>

                <View>
                <Text style={stylesAddRecipe.categoryText}>Add<Text style={stylesAddRecipe.textHighlight}>ingredients</Text></Text>

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
                              keyExtractor={(index) => index.toString()}
                              renderItem={({item, index})=>
                        <TouchableOpacity style={{...stylesAddRecipe.eachCategoryCard, backgroundColor: ingredientsColors[index % ingredientsColors.length]}}>
                            <Text style={stylesAddRecipe.eachCategoryText}>{item.name}</Text>
                        </TouchableOpacity>
                    }></FlatList>
                    <TouchableOpacity onPress={addIngredient}>
                        <Text  style={stylesAddRecipe.addNew}>+ Add new</Text>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={stylesAddRecipe.btnContainer}>
                    <TouchableOpacity style={stylesAddRecipe.btn}
                                      disabled={false}
                                      onPress={() =>
                                      {saveNewRecipe(user?.id)}}>
                        <Text style={stylesAddRecipe.btnText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null}
            {successMessage ? <Text style={{color: 'green'}}>{successMessage}</Text> : null}
        </View>
    )
}

