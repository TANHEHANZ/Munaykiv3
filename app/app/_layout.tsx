import React from "react";
import { Slot, Stack } from "expo-router";
import { FontProvider } from "../components/context/FontContext";
import Login from "./public/login";

const Layout: React.FC = () => {
  return (
    <FontProvider >
      <Slot />
    </FontProvider>
  );
};

export default Layout;
