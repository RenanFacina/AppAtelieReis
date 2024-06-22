import{Pressable, Text,TextInput,View} from 'react-native';
import{styles} from '../Login/styles';
import { useState } from 'react';
import {auth} from '../../services/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function Cadastro({navigation}) {
  const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');
    const [forcaSenha, setforcaSenha] = useState('');


    function newUser(){
        if(userMail === '' || userPass === '' || userRePass === ''){
            alert('Todos os campos devem ser preenchidos!');
            return; //Verifica se há algum campo vazio
        }
        if(userPass !== userRePass){
            alert('As senhas não são iguais. Tente novamente');
            return; //Verifica se a senha e sua confirmação estão diferentes
        } 

        const senhaforte = VerificaForcaSenha(userPass);
        if (senhaforte.includes('Senha fácil de adivinhar')) {
            alert(senhaforte);
            return; // Impede a criação da senha se for fraca
        } else {
            alert(senhaforte); // Mostra a força da senha
        }

            createUserWithEmailAndPassword(auth, userMail, userPass)
            .then((UserCredencial)=>{
                const user = UserCredencial.user; //Captura as informações do novo usuario
                alert('O usuário ' + userMail + ' foi criado. Faça o login');
                navigation.navigate('Login');
            })
            .catch((error)=>{
                const errorMessage = error.message;
                alert(errorMessage);
                navigation.navigate('Login');
            });
        }
    

    function VerificaForcaSenha(senha) {
        if (!senha) return "Senha não pode ser vazia.";
        let strength = 0;
        let tips = "";
      
        // Verifica tamanho da senha
        if (senha.length < 8) {
          tips += "\n\nA senha deve ter no mínimo 8 caracteres. ";
        } else {
          strength += 1;
        }
      
        // Recomenda letra minuscula e maiuscula
        if (/[a-z]/.test(senha) && /[A-Z]/.test(senha)) { 
          strength += 1;
        } else {
          tips += "\nUse letras maiúsculas e minúsculas. ";
        }
      
        // Checando numero
        if (/\d/.test(senha)) { // \d/ = corresponde a qualquer digito(0-9)
          strength += 1;
        } else {
          tips += "\nInclua no mínimo um número. ";
        }
      
        // Caracteres especias
        if (/[^a-zA-Z\d]/.test(senha)) { //metodo .test retorna true ou false
          strength += 1;
        } else {
          tips += "\nInclua no mínimo um caractere especial. ";
        }
      
        // Retornando força da senha
        if (strength < 2) {
          return "Senha fácil de adivinhar. " + tips;
        } else if (strength === 2) {
          return "Senha de dificuldade média. " + tips;
        } else if (strength === 3) {
          return "Senha difícil " + tips;
        } else {
          return "Senha extremamente difícil. " + tips;
        }
      }

    const alteraSenha = (senha) => {   //Atualiza o userPass, calcula força da senha e atualiza oferecendo feedback da força da senha.
    setUserPass(senha);
    const feedbackSenha = VerificaForcaSenha(senha);
    setforcaSenha(feedbackSenha);
  };


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Novo Usuário</Text>
            <TextInput style={styles.input}
                placeholder='E-mail de usuário'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                value={userMail}
                onChangeText={setUserMail}
            />
            <TextInput style={styles.input}
                placeholder='Senha de usuário'
                autoCapitalize='none'
                secureTextEntry
                value={userPass}
                onChangeText={alteraSenha}
            />
            <Text style={styles.forcaSenha}>{forcaSenha}</Text>

            <TextInput style={styles.input}
                placeholder='Confirme a senha'
                autoCapitalize='none'
                secureTextEntry
                value={userRePass}
                onChangeText={setUserRePass}
            />  
            <Pressable style={styles.botao} onPress={newUser}>
                <Text style={styles.textoBotao}>
                    Cadastrar
                </Text>
            </Pressable>
        </View>
    );
  }

