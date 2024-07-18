import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Text, Animated, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import SignupModal from "./Modal/SignupModal";
import { useNavigation } from "@react-navigation/native";

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 100;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

export default function BottomSlide({ onToggle }) {
    const navigation = useNavigation();
    const [show , setShow] = useState(false);
  const ImageCenter = require('../assets/ch.png');

  const translateX = useRef(new Animated.Value(0)).current;
  const shineAnim = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shineAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(shineAnim, {
          toValue: -1,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === 5) { // Gesture state END
      const isActive = nativeEvent.translationX >= H_SWIPE_RANGE / 2;
      Animated.spring(translateX, {
        toValue: isActive ? H_SWIPE_RANGE : 0,
        useNativeDriver: true,
      }).start(() => {
        if (isActive) {
          onToggle && onToggle();
          console.log(isActive);
          setShow(isActive)
        }
      });
    }
  };

  return (
    <View style={styles.SwipeContainer}>
      <View style={styles.TextContainer}>
        <Text style={styles.SwipeText}>Swipe to get inside >></Text>
        <Animated.View
          style={[
            styles.ShineOverlay,
            {
              transform: [{
                translateX: shineAnim.interpolate({
                  inputRange: [-1, 1],
                  outputRange: [-BUTTON_WIDTH, BUTTON_WIDTH],
                })
              }]
            }
          ]}
        >
          <LinearGradient
            colors={['transparent', 'rgba(255, 255, 255, 0.8)', 'transparent']}
            style={styles.LinearGradient}
            start={[0, 0.5]}
            end={[1, 0.5]}
          />
        </Animated.View>
      </View>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View
          style={[
            styles.SwipeStyle,
            {
              transform: [{
                translateX: translateX.interpolate({
                  inputRange: [0, H_SWIPE_RANGE],
                  outputRange: [0, H_SWIPE_RANGE],
                  extrapolate: 'clamp',
                })
              }]
            }
          ]}
        >
          <Image style={styles.ImageCenterStyle} source={ImageCenter} />
        </Animated.View>
      </PanGestureHandler>

      <SignupModal  setShow={setShow} show={show}/>

    </View>
  );
}

const styles = StyleSheet.create({
  SwipeContainer: {
    height: BUTTON_HEIGHT , // Increase height to accommodate text
    width: BUTTON_WIDTH + 20,
    padding: BUTTON_PADDING,
    backgroundColor: "#000",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BUTTON_HEIGHT,
    opacity: 0.8,
    elevation: moderateScale(2),
    
  },
  TextContainer: {
    position: 'relative',
  },
  SwipeText: {
    color: '#fff',
    fontSize: moderateScale(16),
    left:moderateScale(10)
  },
  ShineOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  LinearGradient: {
    flex: 1,
  },
  SwipeStyle: {
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    backgroundColor: "#fff",
    position: "absolute",
    left: BUTTON_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageCenterStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
});
