import { router } from "expo-router";
import React, { useState } from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";
import Animated, { Keyframe, Easing } from "react-native-reanimated";

const Login = () => {
  const redirect = () => {
    router.push("./preView");
  };
  return (
    
    <View className="flex justify-center items-center h-full">
      <Text>Login</Text>
      <Pressable
        className="bg-purple-800 rounded-sm  py-2 px-4  "
        onPress={redirect}
      >
        <Text className=" text-white">Iniciar secion</Text>
      </Pressable>
    </View>
  );
};
export default Login;
