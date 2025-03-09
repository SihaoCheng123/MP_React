import React, {memo, useEffect, useRef, useState} from "react";
import {Text, View} from "react-native";
import styleHome from "./StylesHome";
import stylesHome from "./StylesHome";
import {CalendarWeek} from "../../components/WeekCalendar";
import stylesCalendar from "../Calendar/StylesCalendar";
import {SimpleRecipeCard} from "../../components/RecipeCard";
import {AppColors} from "../../theme/AppTheme";
import {useUserLocalStorage} from "../../hooks/UseUserLocalStorage";
import HomeViewModel from "./ViewModel";

function HomeScreen() {

    const colors = [
        { id: 0, color: AppColors.white },
        { id: 1, color: AppColors.secondary },
        { id: 2, color: AppColors.primary },
    ];

    const fechaActual=  new Date (Date.now())
    const [selectedDate, setSelectedDate] = useState<string>(fechaActual.toISOString().split("T")[0])
    const { recipes, getRecipeByDateAndUserId, user, setRecipes} = HomeViewModel();

    useEffect(() => {
        if (!selectedDate || !user?.id) return;
        // Realiza la llamada solo si selectedDate y user están disponibles
        getRecipeByDateAndUserId(selectedDate, user.id);
    }, [selectedDate]);

    return (
        <View style={stylesHome.mainContainer}>
            <Text style={styleHome.textTitleUsername}>HELLO,
                <Text style={styleHome.textUsername}> {user?.user_data?.name}!</Text></Text>

            {/* -- calendario de la semana */}
            <View style={stylesCalendar.calendarContainerHome}>
                <CalendarWeek onDateSelected={setSelectedDate}/>
            </View>


            <Text style={styleHome.textTodaysMenu}>
                Today's <Text style={{ color: AppColors.primary }}>menu!</Text>
            </Text>

            {/* -- tarjetas de recetas home -- cuando no tienen nada */}
            <View style={styleHome.simpleCard}>
                <Text style={styleHome.textSubtitle}>Breakfast</Text>
                <SimpleRecipeCard recipe={recipes?.filter(r => r.category === "breakfast") || []} />
            </View>

            <View style={styleHome.simpleCard}>
                <Text style={styleHome.textSubtitle}>Lunch</Text>
                <SimpleRecipeCard recipe={[]}  />
            </View>

            <View style={styleHome.simpleCard}>
                <Text style={styleHome.textSubtitle}>Dinner</Text>
                <SimpleRecipeCard recipe={[]} />
            </View>
        </View>
    );
}
export default memo(HomeScreen)