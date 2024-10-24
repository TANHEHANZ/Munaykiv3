import React from "react";
import { Text, TextStyle } from "react-native";
import Animated, { AnimatedStyleProp } from "react-native-reanimated";

interface PropsText {
  animatedStyle: AnimatedStyleProp<TextStyle>;
  title: string;
  text: string;
}

const TextContent: React.FC<PropsText> = ({ animatedStyle, title, text }) => (
  <Animated.View
    style={animatedStyle}
    className="font-montserratMedium text-center flex flex-col gap-y-2 w-full z-20 "
  >
    <Text className="text-3xl font-montserratBold">{title}</Text>
    <Text className="font-montserratItalic">{text}</Text>
  </Animated.View>
);

export default TextContent;
