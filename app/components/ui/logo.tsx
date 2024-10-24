import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import logo from "../../assets/logoH.png";
import mujer from "../../assets/backgraund/mujer.jpg"; // Asegúrate de que la ruta sea correcta

const Logo = () => (
  <View className="w-[80px] h-[150px] absolute z-10 rounded-b-full top-0 p-2 left-0 border border-violet-200 border-t-0">
    <Image
      source={logo}
      className="w-full h-full"
      contentFit="contain"
      transition={200}
    />
  </View>
);

const BackgroundImage = () => (
  <View className="w-screen h-full absolute">
    <Image
      source={mujer}
      className="w-full h-full"
      contentFit="cover" // Puedes cambiar a "contain" si lo prefieres
      transition={200}
    />
  </View>
);

export { BackgroundImage, Logo }; // Exportando cada componente
