import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
interface AppProps {
  width: number;
}

export default function App() {
  const sv = useSharedValue<number>(1);

  // Animaciones para el círculo
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: sv.value }],
  }));

  React.useEffect(() => {
    sv.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 800, easing: Easing.exp }),
        withTiming(0.8, { duration: 500, easing: Easing.ease }),
        withTiming(1, { duration: 800, easing: Easing.ease }),
      ),
      -1,
      true,
    );
  }, []);

  return (
    <View className="flex justify-center items-center h-full">
      <Text className="text-3xl font-montserratExtraBold text-purple-800 ">
        Munayki
      </Text>
      <Animated.View
        style={animatedStyle}
        className="w-32 h-32 bg-violet-500 rounded-full  border-8 border-gray-700/5 my-8 "
      />
      <View className=" felx flex-col gap-4 justify-center items-center">
        <Text className="text-sm font-montserratMedium ">
          Aplicacion contra la violencia
        </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: "#b58df1",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
