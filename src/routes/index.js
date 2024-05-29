import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TelaLogin } from "../pages/Login";
import { HomeRoute } from "./homeRoute";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={TelaLogin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeRoute"
        component={HomeRoute}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
