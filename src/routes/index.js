import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginRoute } from "./loginRoute";
import { HomeRoute } from "./homeRoute";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName={user ? "HomeRoute" : "LoginRoute"}>
      {user ? (
        <Stack.Screen
          name="HomeRoute"
          component={HomeRoute}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="LoginRoute"
          component={LoginRoute}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
}
