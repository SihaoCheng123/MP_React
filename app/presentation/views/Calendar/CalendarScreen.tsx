import React, {memo, useEffect, useState} from "react";
import {FlatList, Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {CalendarWeek} from "../../components/WeekCalendar";
import {SimpleRecipeCard} from "../../components/RecipeCard";
import stylesCalendar from "./StylesCalendar";
import {CalendarComponent} from "../../components/Calendar";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {AppColors} from "../../theme/AppTheme";
import HomeViewModel from "../Home/ViewModel";

function CalendarScreen({navigation}: PropsStackNavigation) {
    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const actualMonth = months[now.getMonth()];
    const actualYear = now.getFullYear();
    const [modalVisible, setModalVisible] = useState(false);
    const fechaActual=  new Date (Date.now())
    const [selectedDate, setSelectedDate] = useState<string>(fechaActual.toISOString().split("T")[0]);
    const {user, getRecipeByDateAndUserId, recipes} = HomeViewModel()
    const colors = [
        {category: "Breakfast", color: AppColors.white},
        {category: "Lunch", color: AppColors.secondary},
        {category: "Snack", color: AppColors.primary},
        {category: "Dinner", color: AppColors.white}
    ]
    useEffect(() => {
        if (!selectedDate || !user?.id) return;
        // Realiza la llamada solo si selectedDate y user están disponibles
        getRecipeByDateAndUserId(selectedDate, user.id);
    }, [selectedDate]);
    const renderItem = ({ item}:any) => {
        const { category, color } = item;

        // Verificamos si hay recetas para esta categoría
        const recipeForCategory = recipes.find(recipe => recipe.category === category);

        return (
            <View key={category} style={stylesCalendar.mealsAndRecipes}>
                <View style={stylesCalendar.meals}>
                    <View >
                        <Text>{category}</Text>
                    </View>
                </View>
                {/* Pasamos la receta o undefined si no hay receta para la categoría */}
                <View style={stylesCalendar.recipes}>
                    <SimpleRecipeCard
                        recipe={recipeForCategory || undefined}
                        cardColor={color}
                        onPressFromInterface={() => {}}
                    />
                </View>

            </View>
        );
    };
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

                <CalendarWeek onDateSelected={setSelectedDate}/>
            </View>
                <FlatList
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    data={colors} // Usamos colors como fuente de datos
                    renderItem={renderItem} // Usamos la función renderItem
                    keyExtractor={(item) => item.category}
                    showsVerticalScrollIndicator={false}// Usamos category como key única
                />

            <TouchableOpacity style={stylesCalendar.addBtnContainer}
            onPress={() => navigation.navigate("AddRecipeScreen")}>

                <Image source={require('../../../../assets/addBtn.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default memo(CalendarScreen)