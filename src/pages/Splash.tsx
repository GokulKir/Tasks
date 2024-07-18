import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import useStyle from "../hooks/useStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import SplashHead from "../component/SplashHead";
import BottomSlide from "../component/BottomSlide";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SignupModal from "../component/Modal/SignupModal";

export default function Splash() {
  const { SplashStyle } = useStyle();
  const ImageBack = require("../assets/bg.png");
  return (
    <SafeAreaView style={SplashStyle.container}>
      <StatusBar backgroundColor="#000" />

      <View style={SplashStyle.FirstSection}>
        <SplashHead />
      </View>

      <View style={SplashStyle.SecondSection}>
        <ImageBackground
          resizeMode="cover"
          style={SplashStyle.ImageContainer}
          source={ImageBack}
        >
          <View style={SplashStyle.BottomSlideContainer}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <BottomSlide />
            </GestureHandlerRootView>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
