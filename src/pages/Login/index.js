import React, { useContext, useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { auth, database } from "../../services/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth"; // Efetua login atraves da API
import { styles } from "./styles";

import * as Animatable from 'react-native-animatable';
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
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.cabecalho}>
      <Text style={styles.titulo}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={styles.form}>
        <Text style={styles.subTitulo}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <Text style={styles.subTitulo}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe a senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <TouchableOpacity style={styles.botao} onPress={userLogin}>
        <Text style={styles.textoBotao}>Acessar</Text>
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
      </Animatable.View>
    </View>
  );
}
