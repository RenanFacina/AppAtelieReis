import React, { useContext, useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { auth, database } from "../../services/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth"; // Efetua login atraves da API
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { get, ref } from "firebase/database";

export function Login() {
  const [userMail, setUserMail] = useState(""); //constantes para alocar email e senha
  const [userPass, setUserPass] = useState("");

  const navigation = useNavigation();

  const { setUser } = useContext(AuthContext);

  function userLogin() {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        let uid = userCredential.user.uid;

        //Capturar informações do usuário e armazenar no contexto
        get(ref(database, `usuarios/${uid}`))
          .then((snapshot) => {
            const newUser = {
              uid: snapshot.key,
              admin: snapshot.val().admin,
              email: snapshot.val().email,
              nome: snapshot.val().nome,
            };

            setUser(newUser);
          })
          .catch((error) => {
            alert(`Ocorreu um erro ao buscar dados do usuário:\n${error}`);
          });
      })
      .catch((error) => {
        alert(`Ocorreu um erro, verifique usuário e senha:\n${error}`);
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
