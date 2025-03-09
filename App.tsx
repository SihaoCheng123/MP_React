import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import RegisterScreen from "./app/presentation/views/auth/Register";
import LoginScreen from "./app/presentation/views/auth/Login";
import {TabNavigator} from "./app/presentation/navigation/TabNavigation";
import CalendarScreen from "./app/presentation/views/Calendar/CalendarScreen";
import HomeScreen from "./app/presentation/views/Home/HomeScreen";
import CartScreen from "./app/presentation/views/Cart/CartScreen";
import UserScreen from "./app/presentation/views/User/UserScreen";
import {useFonts} from "expo-font";
import {AppColors} from "./app/presentation/theme/AppTheme";
import {ActivityIndicator} from "react-native";
import {DetailedRecipeScreen} from "./app/presentation/views/detailedRecipe/DetailedRecipe";
import {AddRecipeScreen} from "./app/presentation/views/addRecipe/AddRecipeComponent";
import PasswordScreen from "./app/presentation/views/User/passwordScreen/PasswordScreen";
import FavRecipe from "./app/presentation/views/User/favRecipe/FavRecipe";
import PreparedRecipes from "./app/presentation/views/User/preparedRecipes/PreparedRecipes";
import ProfileScreen from "./app/presentation/views/User/profileScreen/ProfileScreen";
import SettingsScreen from "./app/presentation/views/User/SettingsScreen/SettingsScreen";

export type RootStackParamList ={
  LoginScreen: undefined,
  RegisterScreen: undefined,
    TabNavigator: undefined,
    HomeScreen: undefined,
    CalendarScreen: undefined,
    CartScreen: undefined,
    UserScreen: undefined,
    DetailedRecipe: undefined,
    AddRecipeScreen: undefined,
    ProfileScreen: undefined,
    FavRecipeScreen: undefined,
    PreparedRecipeScreen: undefined,
    SettingsScreen: undefined,
    PasswordScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(){

    const [fontsLoaded] = useFonts({
        "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
        "Poppins-Medium": require('./assets/fonts/Poppins-Medium.ttf'),
        "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
        "Montserrat-Regular": require('./assets/fonts/Montserrat-Regular.ttf'),
    });


    if(!fontsLoaded){
        return <ActivityIndicator size={"large"} color={AppColors.primary}></ActivityIndicator>
    }else{
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>

                    <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
                    <Stack.Screen name={"TabNavigator"} component={TabNavigator}></Stack.Screen>
                    <Stack.Screen name={"DetailedRecipe"} component={DetailedRecipeScreen} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name={"RegisterScreen"} component={RegisterScreen}></Stack.Screen>
                    <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name={"CalendarScreen"} component={CalendarScreen} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name={"CartScreen"} component={CartScreen} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name={"UserScreen"} component={UserScreen} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name={"AddRecipeScreen"} component={AddRecipeScreen} options={{ headerShown: false }}></Stack.Screen>
                     <Stack.Screen name={"FavRecipeScreen"} component={FavRecipe}></Stack.Screen>
                    <Stack.Screen name={"PreparedRecipeScreen"} component={PreparedRecipes}></Stack.Screen>
                    <Stack.Screen name={"SettingsScreen"} component={SettingsScreen}></Stack.Screen>
                    <Stack.Screen name={"ProfileScreen"} component={ProfileScreen}></Stack.Screen>
                    <Stack.Screen name={"PasswordScreen"} component={PasswordScreen}></Stack.Screen>

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
