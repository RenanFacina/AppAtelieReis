import React, { useState } from "react";
import { TextInput, Text, View, Pressable } from "react-native";
import { auth } from "../../services/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth"; // Efetua login atraves da API
import CadastroUser from "./cadastrouser";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

export function TelaLogin() {
  const navigation = useNavigation();

  const [userMail, setUserMail] = useState(""); //constantes para alocar email e senha
  const [userPass, setUserPass] = useState("");

  function userLogin() {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user; //captura os dados e armazena
        alert("Login realizado com sucesso!");
        //console.log(user);
        navigation.navigate("HomeRoute");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login Ateliê Reis</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput
        style={styles.input}
        placeholder="Informe a senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <Pressable style={styles.botao} onPress={userLogin}>
        <Text style={styles.textoBotao}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subBotao}>
          <Text style={styles.subTextoBotao}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subBotao}>
          <Text style={styles.subTextoBotao} onPress={CadastroUser}>
            Novo usuário
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
