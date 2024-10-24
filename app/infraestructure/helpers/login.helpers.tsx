import { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import ButtonPrimary from "../../components/ui/buttons/primary";
import { Text, View } from "react-native";
import BottonSecundary from "../../components/ui/buttons/secudary";

const MetodLogin = () => {
  const [token, setToken] = useState("");

  const redirectToGoogle = () => {
    const appurl = Linking.createURL("");
    Linking.openURL("http://192.168.0.7:3000/auth/google/?appurl=" + appurl);
  };
  const getUserData = async (result: any) => {
    const { url } = result;
    if (url) {
      const params = Linking.parse(url);
      const { iduser } = params.queryParams as any;
      console.log(iduser);
    }
  };
  useEffect(() => {
    const clean = Linking.addEventListener("url", getUserData);
    return () => {
      clean.remove();
    };
  }, []);

  return (
    <View className="flex flex-col w-full  h-full justify-center  ">
      <ButtonPrimary
        icon="facebook"
        iconType="FontAwesome"
        onPress={redirectToGoogle}
        title="Continuar con Facebook"
        propclass="flex-row gap-x-2 mb-2 bg-blue-800"
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
