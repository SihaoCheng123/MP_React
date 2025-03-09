import React, {memo, useEffect,useState} from "react";
import {FlatList, ScrollView, Text, View} from "react-native";
import styleHome from "./StylesHome";
import stylesHome from "./StylesHome";
import {CalendarWeek} from "../../components/WeekCalendar";
import stylesCalendar from "../Calendar/StylesCalendar";
import {SimpleRecipeCard} from "../../components/RecipeCard";
import {AppColors} from "../../theme/AppTheme";
import HomeViewModel from "./ViewModel";

function HomeScreen() {

    const colors = [
        {category: "Breakfast", color: AppColors.white},
        {category: "Lunch", color: AppColors.secondary},
        {category: "Snack", color: AppColors.primary},
        {category: "Dinner", color: AppColors.white}
]

    const fechaActual=  new Date (Date.now())
    const [selectedDate, setSelectedDate] = useState<string>(fechaActual.toISOString().split("T")[0])
    const { recipes, getRecipeByDateAndUserId, user} = HomeViewModel();

    useEffect(() => {
        if (!selectedDate || !user?.id) return;
        getRecipeByDateAndUserId(selectedDate, user.id);
    }, [selectedDate]);
    const renderItem = ({ item}:any) => {
        const { category, color } = item;

        const recipeForCategory = recipes.find(recipe => recipe.category === category);

        return (
            <View key={category} style={[styleHome.simpleCard]}>
                <Text style={styleHome.textSubtitle}>{category}</Text>

                <SimpleRecipeCard
                    recipe={recipeForCategory || undefined}
                    cardColor={color}
                    onPressFromInterface={() => {}}
                />
            </View>
        );
    };

    return (
        <View style={stylesHome.mainContainer}>
            <Text style={styleHome.textTitleUsername}>
                HELLO, <Text style={styleHome.textUsername}> {user?.user_data?.name}!</Text>
            </Text>

            <View style={stylesCalendar.calendarContainerHome}>
                <CalendarWeek onDateSelected={setSelectedDate} />
            </View>

            <Text style={styleHome.textTodaysMenu}>
                Today's <Text style={{ color: AppColors.primary }}>menu!</Text>
            </Text>

            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 20 }}
                data={colors}
                renderItem={renderItem}
                keyExtractor={(item) => item.category}
            />
        </View>
    );
};

export default memo(HomeScreen)