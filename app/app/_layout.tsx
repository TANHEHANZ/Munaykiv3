import React from "react";
import { Slot, Stack } from "expo-router";
import { FontProvider } from "../components/context/FontContext";
import Login from "./public/login";
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

const Layout: React.FC = () => {
  return (
    <SafeAreaView>
      <FontProvider>
        <Slot />
      </FontProvider>
    </SafeAreaView>
  );
};

export default Layout;
