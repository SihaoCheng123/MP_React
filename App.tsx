import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import RegisterScreen from "./app/presentation/views/auth/Register";
import LoginScreen from "./app/presentation/views/auth/Login";
import {TabNavigator} from "./app/presentation/navigation/TabNavigation";
import CalendarScreen from "./app/presentation/views/Calendar/CalendarScreen";
import HomeScreen from "./app/presentation/views/Home/HomeScreen";
import CartScreen from "./app/presentation/views/Cart/CartScreen";
import UserScreen from "./app/presentation/views/User/UserScreen";
import PruebaComponenteScreen from "./app/presentation/components/PruebaComponentes";

export type RootStackParamList ={
  LoginScreen: undefined,
  RegisterScreen: undefined,
    TabNavigator: undefined,
    HomeScreen: undefined,
    CalendarScreen: undefined,
    CartScreen: undefined,
    UserScreen: undefined,
    PruebaComponenteScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(){
  return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
             <Stack.Screen name={"PruebaComponenteScreen"} component={PruebaComponenteScreen}></Stack.Screen>
             <Stack.Screen name={"TabNavigator"} component={TabNavigator}></Stack.Screen>
             <Stack.Screen name={"RegisterScreen"} component={RegisterScreen}></Stack.Screen>
             <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
             <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
             <Stack.Screen name={"CalendarScreen"} component={CalendarScreen} options={{ headerShown: false }}></Stack.Screen>
             <Stack.Screen name={"CartScreen"} component={CartScreen} options={{ headerShown: false }}></Stack.Screen>
             <Stack.Screen name={"UserScreen"} component={UserScreen} options={{ headerShown: false }}></Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
  );
}
