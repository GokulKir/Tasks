import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useStyle from "../hooks/useStyle";

export default function SplashHead() {
  const { SplashStyle } = useStyle();
  const LogoImage = require("../assets/Logo.png");

  return (
    <View style={SplashStyle.Container}>
      <View style={SplashStyle.LogoContainer}>
        <Image style={SplashStyle.LogoImageStyle} source={LogoImage} />
      </View>

      <View style={SplashStyle.DesContainer}>
        <Text style={SplashStyle.TextDes}>
          An exclusive community of musicians
        </Text>

        <Text style={SplashStyle.TextDes}>
          and the people who love and support{" "}
        </Text>

        <Text style={SplashStyle.TextDes}>them. </Text>
      </View>
    </View>
  );
}
