import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const TAB_WIDTH = 32;
const TABS = ["1", "2", "3"];

const NavBar = () => {
  const offset = useSharedValue<number>(-TAB_WIDTH);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const handlePress = (tab: string) => {
    const newOffset = (() => {
      switch (tab) {
        case "1":
          return -TAB_WIDTH;
        case "2":
          return 0;
        case "3":
          return TAB_WIDTH;
        default:
          return -TAB_WIDTH;
      }
    })();

    offset.value = withTiming(newOffset);
  };

  return (
    <View className="flex h-full justify-center items-center">
      <Animated.View style={animatedStyles} className="w-8 h-2 bg-black" />
      <View className=" flex-row gap-2 ">
        {TABS.map((tab, i) => (
          <Pressable
            key={tab}
            onPress={() => handlePress(tab)}
            className=" flex flex-row border rounded-full w-8 h-8 justify-center items-center"
          >
            <Text className="text-sm">{tab}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
export default NavBar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  tabs: {
    flexDirection: "row",
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: TAB_WIDTH,
  },
  tabLabel: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000", // Cambia el color según tu preferencia
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: "#ddd",
  },
  animatedBorder: {
    height: 8,
    width: 64,
    backgroundColor: "#200",
    borderRadius: 20,
  },
});
