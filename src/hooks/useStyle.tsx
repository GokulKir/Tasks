import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useFonts, Poppins_200ExtraLight } from "@expo-google-fonts/poppins";

const useStyle = () => {
  const SplashStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
    },
    ImageContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    FirstSection: {
      width: "100%",
      height: "35%",
      alignItems: "center",
    },
    SecondSection: {
      width: "100%",
      height: "65%",
      alignItems: "center",
      justifyContent: "center",
    },
    LogoContainer: {
      width: "50%",
      height: moderateScale(120),
      marginTop: moderateScale(30),
      alignItems: "center",
      justifyContent: "center",
    },
    LogoImageStyle: {
      width: moderateScale(105),
      height: moderateScale(90),
    },
    TextDes: {
      color: "#BFBFBF",
      alignSelf: "center",
      fontSize: moderateScale(17),
      fontFamily: "Poppins_200ExtraLight",
      lineHeight: moderateScale(32),
    },
    Container: {
      alignItems: "center",
    },
    DesContainer: {
      width: "85%",
      height: moderateScale(70),
      alignItems: "center",
      justifyContent: "center",
      top: moderateScale(10),
      marginTop: moderateScale(12),
    },
    BottomSlideContainer: {
      width: "90%",
      height: moderateScale(80),
      alignSelf: "center",
      top: moderateScale(-40),
    },
    RoundCheck : {
      width:moderateScale(30) ,
      height:moderateScale(30)
    } 
  });

  return {
    SplashStyle,
  };
};

export default useStyle;
