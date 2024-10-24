import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "../icon";
import ButtonPrimary from "./primary";

const ActionButtons = ({
  index,
  informacion,
  moveWindow,
  moveBackWindow,
}: any) => (
  <View className="flex-row w-[80%] justify-center items-center mx-auto  h-full">
    {index != 0 && (
      <ButtonPrimary
        icon="left"
        iconType="AntDesign"
        onPress={moveBackWindow}
        propclass="mr-2 px-5 "
      />
    )}
    <ButtonPrimary
      title={
        index === 0
          ? "¡Empecemos!"
          : index === informacion.length - 1
            ? "Iniciar sesión"
            : "Siguiente"
      }
      propclass="w-full"
      onPress={moveWindow}
    />
  </View>
);

export default ActionButtons;
