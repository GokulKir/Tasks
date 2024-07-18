import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import { useFonts } from "expo-font";
import { SimpleLineIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const DATA = [
  {
    id: "bd7aeiou1",
    title: "Jaylon Bator",
    members: "20k members",
    image: require("../assets/user.png"), // Replace with your profile image
  },
  {
    id: "bd7aeiou2",
    title: "Cristofer Workman",
    members: "20k members",
    image: require("../assets/user1.png"),
  },

  {
    id: "bd7aeiou3",
    title: "Cristofer Workman",
    members: "20k members",
    image: require("../assets/user2.png"),
  },

  {
    id: "bd7aeiou4",
    title: "Cristofer Workman",
    members: "20k members",
    image: require("../assets/user3.png"),
  },
];

const Item = ({ title, members, image }) => (
  <View style={styles.item}>
    <View style={styles.RoundUser}>
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        source={image}
      />
    </View>

    <View style={styles.MidContainer}>
      <Text style={styles.TittleStyle}>{title}</Text>

      <Text style={styles.TittleStyle1}>{members}</Text>
    </View>

    <TouchableOpacity style={styles.ViewEnd}>
      <SimpleLineIcons name="options" size={moderateScale(14)} color="#fff" />
    </TouchableOpacity>

    {/* <Image source={image} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.members}>{members}</Text> */}
  </View>
);

const BottomUserList = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} members={item.members} image={item.image} />
  );

  const [loaded] = useFonts({
    Poppinlight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    Poppinblack: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinReg: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          width: width,
          height: moderateScale(20),
          flexDirection: "row",
          marginLeft: moderateScale(4),
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: moderateScale(12),
            fontWeight: "300",
            marginLeft: moderateScale(10),
            top: moderateScale(10),
          }}
        >
          12.2 M Streams
        </Text>

        <Text
          style={{
            color: "#fff",
            fontSize: moderateScale(14),
            fontWeight: "300",
            marginLeft: moderateScale(10),
            top: moderateScale(10),
          }}
        >
          .
        </Text>

        <Text
          style={{
            color: "#fff",
            fontSize: moderateScale(12),
            fontWeight: "300",
            marginLeft: moderateScale(10),
            top: moderateScale(10),
          }}
        >
          Jan
        </Text>
      </View>

      <View
        style={{
          width: width,
          height: moderateScale(20),
          flexDirection: "row",
          marginTop: moderateScale(25),
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: moderateScale(14),
            fontFamily: "Poppinblack",
            marginLeft: moderateScale(14),
          }}
        >
          Joined Communities
        </Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    alignSelf: "center",
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    width: width - 30,
    height: moderateScale(70),
    backgroundColor: "#000",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  title: {
    fontSize: 16,
  },
  members: {
    fontSize: 12,
    color: "#888",
  },
  RoundUser: {
    width: moderateScale(55),
    height: moderateScale(55),
    borderRadius: moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
  },
  MidContainer: {
    width: " 50%",
    height: "70%",
    marginLeft: moderateScale(10),
    justifyContent: "space-around",
  },
  TittleStyle: {
    color: "#fff",
    fontSize: moderateScale(13),
    fontWeight: "500",
  },
  TittleStyle1: {
    color: "#fff",
    fontSize: moderateScale(12),
    fontWeight: "300",
  },
  ViewEnd: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    marginLeft: moderateScale(65),
    alignItems: "center",
  },
});

export default BottomUserList;
