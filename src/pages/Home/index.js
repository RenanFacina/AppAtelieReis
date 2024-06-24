import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { IconButton } from "../../components/IconButton";
import { globalStyles } from "../../global/globalStyles";
import { AuthContext } from '../../context/AuthContext'

import * as Animatable from "react-native-animatable";

export function Home({ navigation }) {
  const { user, setUser } = useContext(AuthContext)

  return (
    <Animatable.View style={globalStyles.container}
    delay = {600}
    animation = {'fadeInUp'}>
      <Text style={globalStyles.title}>Olá, {user.nome}! </Text>
      <View style={styles.buttonContainer}>
      <IconButton style={globalStyles.wideButton}
          iconName="Plus"
          title="Novo Pedido"
          onPress={() => navigation.navigate("Novo Pedido")}
        />
        <IconButton style={globalStyles.wideButton}
          iconName="Scroll"
          title="Meus Pedidos"
          onPress={() => navigation.navigate("Meus Pedidos")}
        />
        <IconButton style={globalStyles.wideButton}
          iconName="SignOut"
          title="Sair"
          onPress={() => setUser(null)}
          // onPress={() => navigation.navigate("Sobre")}
        />
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});