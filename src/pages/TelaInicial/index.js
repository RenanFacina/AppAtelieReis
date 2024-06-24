import React from 'react';
import{
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from "./styles";

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export function TelaInicial(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
         <View style={styles.logo}>
            <Animatable.Image
                animation={'flipInY'}
                source={require('../../assets/logo_ateliereis.png')}
                style={{width:'75%'}}
                resizeMode='contain'
            />
         </View>
         <Animatable.View delay={600} animation= 'fadeInUp' style={styles.form}> 
            <Text style={styles.title1}>Ateliê Reis</Text>
            <Text style={styles.title2}>Costurando histórias únicas para cada cliente.</Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity style={styles.botao}
            onPress={() => navigation.navigate('Login')}>
                <Text style={styles.botaoTexto}>Acessar</Text>
            </TouchableOpacity>
         </Animatable.View>
        </View>
    );
}