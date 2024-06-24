import { TouchableOpacity, View, Text, TextInput } from "react-native";
import {styles} from "./styles";
import {useState} from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../../services/firebase.config";

import * as Animatable from 'react-native-animatable';

export function EsqueciSenha({navigation}) {
  const[userMail,setUserMail] = useState('');

    function replacePass(){
        if(userMail !== ''){ //Evitar conteudo vazio
            sendPasswordResetEmail(auth,userMail)
            .then(()=>{
                alert("Foi enviado um email para: " +userMail+".\nVerifique a sua caixa de email.");
                navigation.navigate('Login');
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert("Ops! Alguma coisa não deu certo. " + errorMessage + ". Tente novamente ou pressione voltar");
                return;
            });
        } else{
            alert("É preciso informar um e-mail válido para efetuar a redefinição de senha");
            return;
        }
    }
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.cabecalho}>
            <Text style={styles.titulo}>Redefinição de Senha</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.form}>
                <Text style={styles.subTitulo}>Email</Text>
            <TextInput style={styles.input}
                placeholder="Informe o E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={setUserMail}
            />
            <TouchableOpacity style={styles.botao} onPress={replacePass}>
                <Text style={styles.textoBotao}>Enviar</Text>
            </TouchableOpacity>
            <View>
               <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.textoBotao} >Voltar</Text>
                </TouchableOpacity> 
            </View>
            </Animatable.View>
        </View>
    );
}