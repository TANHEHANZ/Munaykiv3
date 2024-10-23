import { Text, View } from "react-native";
import React, { Component } from "react";
import { Slot } from "expo-router";

export class layaut extends Component {
  render() {
    return (
      <View>
        <Text>Arriba</Text>
        <Slot />  
        <Text>Abajo</Text>
      </View>
    );
  }
}

export default layaut;
