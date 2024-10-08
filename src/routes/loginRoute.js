import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TelaInicial } from "../pages/TelaInicial";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { EsqueciSenha } from "../pages/EsqueciSenha";

const Stack = createNativeStackNavigator();

export function LoginRoute() {
  return (
    <Stack.Navigator
      initialRouteName="TelaInicial"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Esqueci a Senha" component={EsqueciSenha} />
    </Stack.Navigator>
  );
}
