import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../components/ui/buttons/primary";
import BottonSecundary from "../../components/ui/buttons/secudary";
import * as Linking from "expo-linking";
import { router } from "expo-router";
const MetodLogin = () => {
  const [token, setToken] = useState("");
  const redirectToGoogle = () => {
    const appUrl = Linking.createURL("");
    Linking.openURL(
      "https://munaykiv3.vercel.app/auth/google/?appurl=" + appUrl,
    );
  };

  const redirectToFacebook = () => {
    Linking.openURL("http://192.168.0.7:3000/auth/facebook");
  };

  const getUserData = async (result: any) => {
    const { url } = result;
    if (url) {
      const params = Linking.parse(url);
      const paramToken = params.queryParams?.token;
      if (paramToken) {
        setToken(paramToken as string);
      }
    }
  };

  useEffect(() => {
    const subscription = Linking.addEventListener("url", getUserData);
    return () => {
      subscription.remove();
    };
  }, []);
  useEffect(() => {
    if (token) {
      router.replace("./public");
    }
  }, [token]);

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
    </View>
  );
};

export default MetodLogin;
