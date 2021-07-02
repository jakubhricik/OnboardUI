import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Onboard from "./components/Onboard";

export default function App() {
  let [fontsLoaded] = useFonts({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Onboard />;
}
