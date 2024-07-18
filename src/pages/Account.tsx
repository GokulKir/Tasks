import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { moderateScale } from "react-native-size-matters";
import { useFonts } from "expo-font";
import BottomUserList from "../component/BottomUserList";
import profileData from "../data/profileData";
import useProfileData from "../hooks/useProfileData";

const { height, width } = Dimensions.get("window");

export default function Account() {
  const { profile, loading } = useProfileData();
  const [loaded] = useFonts({
    Poppinlight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    Poppinblack: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinReg: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const ImageCard = require("../assets/ProfileCard.png");
  const AccountSettings = require("../assets/setting.png");
  const Edit = require("../assets/edit.png");

  //   const DATA = [
  //     {
  //       id: 'bd7aeiou1',
  //       title: 'Jaylon Bator',
  //       members: '20k members',
  //       image: require('../assets/profile_pic.png'), // Replace with your profile image
  //     },
  //     {
  //       id: 'bd7aeiou2',
  //       title: 'Cristofer Workman',
  //       members: '20k members',
  //       image: require('../assets/profile_pic.png'), // Replace with your profile image
  //     },
  //     // Add more items here
  //   ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" />

      <View
        style={{
          width: width,
          height: moderateScale(320),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageBackground
          source={profileData?.avatar}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            opacity: 0.9,
          }}
        >
          <View
            style={{
              width: "100%",
              height: moderateScale(100),
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: moderateScale(80),
                height: "100%",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                style={{
                  width: moderateScale(40),
                  height: moderateScale(40),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#000",
                  borderRadius: moderateScale(100),
                  opacity: 0.8,
                }}
              >
                <Image
                  style={{
                    width: moderateScale(25),
                    height: moderateScale(25),
                  }}
                  source={AccountSettings}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: moderateScale(40),
                  height: moderateScale(40),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#000",
                  borderRadius: moderateScale(100),
                  opacity: 0.8,
                }}
              >
                <Image
                  style={{
                    width: moderateScale(25),
                    height: moderateScale(25),
                  }}
                  source={Edit}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: "90%",
              height: moderateScale(50),
              marginTop: moderateScale(160),
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: moderateScale(22),
                fontWeight: "heavy",
                fontFamily: "Poppinblack",
              }}
            >
              {profileData?.name}
            </Text>
          </View>
        </ImageBackground>
      </View>

      <BottomUserList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
