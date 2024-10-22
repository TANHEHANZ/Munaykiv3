import { View, Text, Button, Pressable } from "react-native";
import React, { useState } from "react";
import Animated, { Easing, Keyframe } from "react-native-reanimated";

const PreView = () => {
  const [visible, setVisible] = useState(true);

  const enteringAnimation = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        { translateY: 50 },
        { rotate: "820deg" },
        { skewX: "0deg" },
        { scale: 0 },
      ],
      width: 0,
      height: 0,
    },
    50: {
      opacity: 0.5,
      transform: [
        { translateY: 25 },
        { rotate: "-180deg" },
        { skewX: "30deg" },
        { scale: 0.5 },
      ],
      easing: Easing.out(Easing.quad),
      width: 50,
      height: 50,
    },
    100: {
      opacity: 1,
      transform: [
        { translateY: 0 },
        { rotate: "0deg" },
        { skewX: "0deg" },
        { scale: 1 },
      ],
      width: 100,
      height: 100,
    },
  }).duration(1000);

  const exitingAnimation = new Keyframe({
    0: {
      opacity: 1,
      transform: [{ translateY: 0 }, { rotateZ: "0deg" }],
    },
    10: {
      opacity: 1,
      transform: [{ translateY: 25 }, { rotateZ: "0deg" }],
      easing: Easing.exp,
    },
    50: {
      opacity: 0.5,
      transform: [{ translateY: -100 }, { rotateZ: "60deg" }],
    },
    100: {
      opacity: 0,
      transform: [{ translateY: -300 }, { rotateZ: "120deg" }],
    },
  }).duration(1000);

  return (
    <View className="w-full h-full items-center justify-center flex-col">
      {visible && (
        <Animated.View
          entering={enteringAnimation}
          exiting={exitingAnimation}
          className="bg-blue-800 w-0 h-0 "
        >
          <Text>Munayki</Text>
        </Animated.View>
      )}
      <View className="absolute bg-transparent">
        <Pressable onPress={() => !visible}>
          <Text>Preciona</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PreView;
