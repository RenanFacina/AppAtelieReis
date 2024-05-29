import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";

const Drawer = createDrawerNavigator();

export function HomeRoute() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}
