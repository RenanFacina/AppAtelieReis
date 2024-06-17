import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginRoute } from "./loginRoute";
import { HomeRoute } from "./homeRoute";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="LoginRoute">
      <Stack.Screen
        name="LoginRoute"
        component={LoginRoute}
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
