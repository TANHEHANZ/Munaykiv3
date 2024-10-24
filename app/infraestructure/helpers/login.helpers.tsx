import { Linking, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../components/ui/buttons/primary";
import BottonSecundary from "../../components/ui/buttons/secudary";

const MetodLogin = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const handleDeepLink = (event: any) => {
      const url = event.url;
      const tokenParam = url.split("?token=")[1];

      if (tokenParam) {
        setToken(tokenParam);
        // Aquí podrías navegar al dashboard
        // navigation.navigate("Dashboard"); // Si estás usando react-navigation
      }
    };

    Linking.addEventListener("url", handleDeepLink);

    Linking.getInitialURL()
      .then((url) => {
        if (url) {
          handleDeepLink({ url });
        }
      })
      .catch((err) => console.error("Error getting initial URL:", err));
  }, []);

  const redirectToGoogle = () => {
    Linking.openURL("http://192.168.0.7:3000/auth/google");
  };

  const redirectToFacebook = () => {
    Linking.openURL("http://192.168.0.7:3000/auth/facebook");
  };

  return (
    <View className="flex flex-col w-full h-1/2 justify-center">
      <ButtonPrimary
        icon="facebook"
        iconType="FontAwesome"
        onPress={redirectToFacebook}
        title="Continuar con Facebook"
        propclass="flex-row gap-x-2 my-2 bg-blue-900"
      />
      <BottonSecundary
        icon="google"
        iconType="AntDesign"
        onPress={redirectToGoogle}
        title="Continuar con Google"
        propclass="flex-row gap-x-2"
      />
      {token ? (
        <Text>Token: {token}</Text> // Mostrar el token
      ) : (
        <Text>No hay token</Text>
      )}
    </View>
  );
};

export default MetodLogin;
