import React, { useState } from "react";
import { Text, View } from "react-native";
import { informacion } from "../../infraestructure/constants/preview.constanst";
import { useAnimations } from "../../components/hooks/useAnimations";
import { BackgroundImage, Logo } from "../../components/ui/logo";
import Animated from "react-native-reanimated";
import TextContent from "../../components/ui/textContent";
import ActionButtons from "../../components/ui/buttons/action";
import MetodLogin from "../../infraestructure/helpers/login.helpers";
const Login = () => {
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const { fadeInOut, animatedStyle, scaleAnimation } = useAnimations();

  const moveWindow = () => {
    fadeInOut(() => {
      if (index < informacion.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        setShowButton(false);
      }
    });
  };

  const moveBackWindow = () => {
    fadeInOut(() => {
      if (index > 0) {
        setIndex((prev) => prev - 1);
      }
    });
  };

  return (
    <View className="flex justify-center relative h-full items-center w-[80%] mx-auto">
      <Logo />
      {showButton ? (
        <Animated.View
          style={scaleAnimation}
          className="w-24 h-24 rounded-full bg-violet-700 mb-8"
        />
      ) : (
        <BackgroundImage />
      )}

      {showButton && (
        <TextContent
          animatedStyle={animatedStyle}
          title={informacion[index].title}
          text={informacion[index].text}
        />
      )}

      <View
        className={`flex justify-start flex-col py-8 pt-10 h-[45%] absolute bottom-0 w-screen rounded-t-3xl px-[10%]  border border-white/20 ${!showButton && "bg-black/50"}`}
      >
        {showButton ? (
          <ActionButtons
            index={index}
            informacion={informacion}
            moveWindow={moveWindow}
            moveBackWindow={moveBackWindow}
          />
        ) : (
          <View className="w-full h-full  justify-center">
            <Text className="font-montserratBold text-3xl text-white ">
              Inicia seción
            </Text>
            <Text className="font-montserratItalic text-md mb-4 text-white">
              con:
            </Text>
            <MetodLogin />
            <Text className="font-montserratItalic text-md text-center mt-4 text-white ">
              Terminos y condiciones
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default Login;
