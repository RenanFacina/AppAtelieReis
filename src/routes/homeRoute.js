import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { MeusPedidos } from '../pages/MeusPedidos'
import { NovoPedido } from '../pages/NovoPedido'
import { House, Info, Plus, Scroll } from "phosphor-react-native";

const Drawer = createDrawerNavigator();

export function HomeRoute() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ drawerLabelStyle: { fontSize: 20 } }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => {
            return <House color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Novo Pedido"
        component={NovoPedido}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Plus color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Meus Pedidos"
        component={MeusPedidos}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Scroll color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Info color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
