import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Onboard from "./components/Onboard";
import Home from "./components/Home";

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  //setting custom fonts
  let [fontsLoaded] = useFonts({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleFinishOnboard = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard && <Onboard handleDone={handleFinishOnboard} />}
      {!showOnboard && <Home />}
    </>
  );
};

export default App;
