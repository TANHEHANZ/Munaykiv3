import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon, { IconType } from "../icon";

interface PropsButton {
  title?: string;
  icon?: string;
  iconType?: IconType;
  propclass?: string;
  onPress?: () => void;
}

const BottonSecundary: React.FC<PropsButton> = ({
  title,
  icon,
  iconType,
  propclass = "",
  onPress,
}) => (
  <Pressable
    className={`bg-white py-4 px-4 flex justify-center items-center rounded-full border border-gray-400  ${propclass}`}
    onPress={onPress}
  >
    {icon && iconType && (
      <Icon name={icon} type={iconType} size={18} color="black" />
    )}
    {title && (
      <Text className="text-black font-montserratBold  text-sm">
        {title}
      </Text>
    )}
  </Pressable>
);

export default BottonSecundary;
