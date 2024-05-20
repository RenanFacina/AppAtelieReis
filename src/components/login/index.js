import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {TextInput, Text, View,Pressable } from 'react-native';
import styles from "./style";
import {auth} from './firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth"; // Efetua login atraves da API
import CadastroUser from "./cadastrouser";

export default function TelaLogin({navigation}){

   const[userMail,setUserMail] = useState('');  //constantes para alocar email e senha
  const[userPass,setUserPass] = useState('');

  function userLogin(){
    signInWithEmailAndPassword(auth,userMail,userPass)
      .then((userCredential) => {
        const user = userCredential.user; //captura os dados e armazena
        alert('Login realizado com sucesso!')
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })

  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login Ateliê Reis</Text>
      <TextInput style={styles.input}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput style={styles.input}
        placeholder="Informe a senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <Pressable style={styles.botao}
        onPress={userLogin}
      >  
        <Text style={styles.textoBotao}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subBotao}>
            <Text style={styles.subTextoBotao}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subBotao}>
            <Text style={styles.subTextoBotao} onPress={CadastroUser}>Novo usuário</Text>
        </Pressable>
      </View>
      <StatusBar style="auto"/>
    </View>
    );
  }
