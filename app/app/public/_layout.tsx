import { Text, View } from "react-native";
import React, { Component } from "react";
import { Slot } from "expo-router";
import Header from "../../components/ui/header";
import NavBar from "../../components/ui/navBar";

export class layaut extends Component {
  render() {
    return (
      <View>
        <Header />
        <Slot />
        <NavBar />
      </View>
    );
  }
}

export default layaut;
