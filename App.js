import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen"; // Import màn hình đăng nhập
import HomeScreen from "./screens/HomeScreen"; // Import màn hình trang chủ

const Stack = createStackNavigator(); // Tạo stack navigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Đăng nhập" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
