import React from "react";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  EvilIcons,
} from "@expo/vector-icons";

export type IconType = "AntDesign" | "FontAwesome" | "MaterialIcons" | "EvilIcons";

interface IconProps {
  name: any;
  type: IconType;
  size?: number;
  color?: string;
}

const iconSets = {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  EvilIcons,
};

const Icon: React.FC<IconProps> = ({
  name,
  type,
  size = 24,
  color = "black",
}) => {
  const IconComponent = iconSets[type];
  return <IconComponent name={name} size={size} color={color} />;
};

export default Icon;
