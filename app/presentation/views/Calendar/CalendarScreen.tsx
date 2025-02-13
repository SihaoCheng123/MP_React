import React, {useState} from "react";
import {Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {CalendarWeek} from "../../components/WeekCalendar";
import {SimpleRecipeCard} from "../../components/RecipeCard";
import {simpleRecipeInterface} from "../../interfaces/recipeInterface";
import stylesCalendar from "./StylesCalendar";
import {CalendarComponent} from "../../components/Calendar";
import {AddRecipeScreen} from "../addRecipe/AddRecipeComponent";
import {PropsStackNavigation} from "../../interfaces/StackNav";

function CalendarScreen({navigation}: PropsStackNavigation) {
    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const actualMonth = months[now.getMonth()];
    const actualYear = now.getFullYear();
    const recipes: simpleRecipeInterface[] = [{recipeName: "Arroz con huevo", image: require("../../../../assets/mealImg.png"), ingredients:[{ingredientName: "Arroz"},{ingredientName:"Huevo"},{ingredientName: "Ketchup"}]},
        {recipeName: "Arroz con huevo", image: require("../../../../assets/mealImg.png"), ingredients:[{ingredientName: "Arroz"},{ingredientName:"Huevo"},{ingredientName: "Ketchup"}]},
        {recipeName: "Arroz con huevo", image: require("../../../../assets/mealImg.png"), ingredients:[{ingredientName: "Arroz"},{ingredientName:"Huevo"},{ingredientName: "Ketchup"}]}]

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={stylesCalendar.mainContainer}>
            <View style={stylesCalendar.calendarContainer}>
                <View style={stylesCalendar.calendarChange}>
                    <Image source={require('../../../../assets/arrowBack.png')}
                    style={stylesCalendar.arrow}/>
                    <TouchableOpacity style={stylesCalendar.calendarTexts}
                    onPress={() => setModalVisible(true)}>
                        <Modal
                            transparent={true}
                            visible={modalVisible}>
                            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                                <View style={stylesCalendar.modalContainer}>
                                    <View style={stylesCalendar.modal}>
                                        {/*<TouchableOpacity onPress={() => setModalVisible(false)}>*/}
                                        {/*    <Image source={require('../../../../assets/back.png')}/>*/}
                                        {/*</TouchableOpacity> source={require('../../../../assets/arrowBack.png')}*/}
                                        <CalendarComponent/>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>


                        </Modal>
                        <Text style={stylesCalendar.monthText}>{actualMonth}</Text>
                        <Text style={stylesCalendar.yearText}>{actualYear}</Text>
                    </TouchableOpacity>
                    <Image source={require('../../../../assets/arrowForward.png')}
                           style={stylesCalendar.arrow}/>
                </View>

                <CalendarWeek />
            </View>
            <View style={stylesCalendar.mealsAndRecipes}>
                <View style={stylesCalendar.meals}>
                    <Text>Breakfast</Text>
                    <Text>Lunch</Text>
                    <Text>Dinner</Text>
                </View>
                <View style={stylesCalendar.recipes}>
                    <SimpleRecipeCard recipe={recipes}/>
                </View>

            </View>
            <TouchableOpacity style={stylesCalendar.addBtnContainer}
            onPress={() => navigation.navigate("AddRecipeScreen")}>

                <Image source={require('../../../../assets/addBtn.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default CalendarScreen