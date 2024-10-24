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

const ButtonPrimary: React.FC<PropsButton> = ({
  title,
  icon,
  iconType,
  propclass,
  onPress,
}) => (
  <Pressable
    className={`bg-violet-800 py-4 px-4 flex justify-center items-center rounded-full my-4  ${propclass}`}
    onPress={onPress}
  >
    {icon && iconType && (
      <Icon name={icon} type={iconType} size={18} color="white" />
    )}
    {title && (
      <Text className="text-white font-montserratBold  text-sm">{title}</Text>
    )}
  </Pressable>
);

export default ButtonPrimary;
