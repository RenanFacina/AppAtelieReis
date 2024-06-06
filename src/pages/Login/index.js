import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../services/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth"; // Efetua login atraves da API
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();

  const [userMail, setUserMail] = useState(""); //constantes para alocar email e senha
  const [userPass, setUserPass] = useState("");

  function userLogin() {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user; //captura os dados e armazena
        alert("Login realizado com sucesso!");
        //console.log(user);
        navigation.replace("HomeRoute");
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
      <TouchableOpacity style={styles.botao} onPress={userLogin}>
        <Text style={styles.textoBotao}>Logar</Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.subBotao}
          onPress={() => navigation.navigate("Esqueci a Senha")}
        >
          <Text style={styles.subTextoBotao}>Esqueci a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.subBotao}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.subTextoBotao}>Novo usuário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
