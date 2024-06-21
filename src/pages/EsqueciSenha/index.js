import { Pressable, View, Text, TextInput } from "react-native";
import {styles} from "../Login/styles";
import {useState} from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../../services/firebase.config";

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
            <Text style={styles.titulo}>Redefinição de Senha</Text>
            <TextInput style={styles.input}
                placeholder="Informe o E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={setUserMail}
            />
            <Pressable style={styles.subBotao} onPress={replacePass}>
                <Text style={styles.botao}>Enviar</Text>
            </Pressable>
            <View>
               <Pressable onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.botao}>Voltar</Text>
                </Pressable> 
            </View>
        </View>
    );
}
