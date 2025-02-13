import {View, Text, TextInput, Image, TouchableOpacity, FlatList} from "react-native";
import {AppColors} from "../../theme/AppTheme";
import stylesAddRecipe from "./StylesAddRecipe";

export const AddRecipeScreen = () =>{
    const categories = [
        {name: "Breakfast", color: AppColors.cardCategoryGreyOpacity},
        {name: "Lunch", color: AppColors.cardCategorySecondary},
        {name: "Dinner", color: AppColors.cardCategoryPrimary},
    ]

    const ingredients = [
        {name: "Eggs", color: AppColors.cardCategoryGreyOpacity},
        {name: "Flour", color: AppColors.cardCategorySecondary},
        {name: "Rice", color: AppColors.cardCategoryPrimary},
        {name: "Sugar", color: AppColors.cardCategoryGreyOpacity},
        {name: "Salt", color: AppColors.cardCategorySecondary},
        {name: "Soy sauce", color: AppColors.cardCategoryPrimary},
        {name: "Pasta", color: AppColors.cardCategoryGreyOpacity}
    ]

    return (
        <View style={stylesAddRecipe.mainContainer}>
            <View style={stylesAddRecipe.addTextContainer}>
                <Text style={stylesAddRecipe.addText}>Add new
                    <Text style={stylesAddRecipe.textHighlight}> recipe!</Text></Text>
            </View>
            <View style={stylesAddRecipe.constraintContainer}>
                <View style={stylesAddRecipe.formInputContainer}>
                    <TextInput placeholderTextColor={AppColors.cardCategoryGrey}
                               placeholder={"Recipe name*"}
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
                <View>
                    <FlatList horizontal={false}
                              numColumns={3}
                        contentContainerStyle={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}
                              data={ingredients} renderItem={(item)=>
                        <TouchableOpacity style={{...stylesAddRecipe.eachCategoryCard, backgroundColor: ingredients[item.index].color}}>
                            <Text style={stylesAddRecipe.eachCategoryText}>{ingredients[item.index].name}</Text>
                        </TouchableOpacity>
                    }></FlatList>
                    <TouchableOpacity>
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

