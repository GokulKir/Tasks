import { Dimensions, Image, StyleSheet, Text, View , TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { moderateScale } from "react-native-size-matters";
// import PoppinsExtraLight from '/Poppins-ExtraLight.ttf';/
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

export default function SignupModal({ show, setShow }) {
    const navigation = useNavigation();
  const googleImage = require("../../assets/google.png");
  const AppleImage = require("../../assets/Vector.png");
  const [loaded] = useFonts({
    Poppinlight: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    Poppinblack: require("../../assets/fonts/Poppins-Black.ttf"),
    PoppinReg: require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Modal
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
      isVisible={show}
    >
      <View style={styles.container}>
        <View style={styles.HeaderContainer}>
          <Text style={styles.TestStyle}>Signup.</Text>
        </View>

        <View style={styles.DesContainer}>
          <Text style={styles.DesStyle}>
            Sign up to get access to your favorite
          </Text>

          <Text style={styles.DesStyle}>
            artist's content or create an account for
          </Text>

          <Text style={styles.DesStyle}>fans.</Text>
        </View>

        <View style={styles.SocialSignIn}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tabs")}
            style={styles.SocialContainer}
          >
            <Image style={styles.ImageGoogle} source={googleImage} />

            <Text style={styles.SocialText}>Sing in with Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Tabs")}
            style={styles.SocialContainer}
          >
            <Image style={styles.ImageApple} source={AppleImage} />
            <Text style={styles.SocialText}>Sing in with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Tabs")}
            style={styles.SocialContainer}
          >
            <Image style={styles.ImageGoogle} source={googleImage} />
            <Text style={styles.SocialText}>Sing in with Google</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.FontLastStyle}>
          By continuing, you agree to our Terms & conditions and
        </Text>

        <Text style={styles.FontLastStyle}>Privacy policy.</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    height: moderateScale(520),
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: moderateScale(10),
    alignItems: "center",
  },
  HeaderContainer: {
    width: "90%",
    height: moderateScale(50),
    marginTop: moderateScale(5),
    justifyContent: "center",
  },
  TestStyle: {
    color: "#000",
    fontSize: moderateScale(20),
    fontFamily: "Poppinblack",
    fontWeight: "bold",
  },
  DesContainer: {
    width: "90%",
    height: moderateScale(70),
  },
  DesStyle: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    fontFamily: "Poppinlight",
  },
  SocialSignIn: {
    width: "90%",
    height: moderateScale(260),
    alignSelf: "center",
    marginTop: moderateScale(50),
    alignItems: "center",
    justifyContent: "center",
  },
  SocialContainer: {
    width: moderateScale(295),
    height: moderateScale(50),
    backgroundColor: "#F7F7F8",
    borderRadius: moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: moderateScale(20),
  },
  ImageGoogle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  ImageApple: {
    width: moderateScale(19),
    height: moderateScale(23),
  },
  SocialText: {
    fontSize: moderateScale(14),
    color: "#1A1A1A",
    fontWeight: "bold",
    marginLeft: moderateScale(10),
  },
  FontLastStyle: {
    fontSize: moderateScale(11),
    fontWeight: "300",
    fontFamily: "Poppinlight",
    color: "#000",
    marginTop: moderateScale(10),
  },
});
