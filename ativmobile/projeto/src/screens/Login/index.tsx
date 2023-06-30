import { View, Image, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { styles } from './styles';
import Register from '../Register';
import { useState } from 'react';
import Home from '../Home';
import Rotas from '../Routas';

const Login = ({navigation}:any) => {

    const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
        const [loggedIn, setLoggedIn] = useState(false);
        
        const handleLogin = () => {
            console.log(username)
            if (username === 'Nobru' && password === '007') {
              setLoggedIn(true);
              alert('Nobru sua Conta foi acessada em outro dispositivo entre em contato para mais detalhes!')
              alert('Você está acessando uma conta já existente!')
              console.log('Login bem-sucedido! Bem-Vindo Nobru');
            } else {
                console.log('Nome de usuário ou senha incorretos.');
                alert('Acesso negado! Senha ou Usuário invalidos')
            }
            
          };
        
          if (loggedIn) {
            
            return <Home/>;
          }
          
          const handleSignUp = () => {
            navigation.navigate('Register');
          };


    return (
        <View>

            <View style={styles.logosuperior}>
                <Image
                    source={require('../../../assets/pictures/icon_big.png')}
                    style={{ width: 50, height: 50 }}
                />

                <Text style={styles.twitchentrar}>
                    Entrar na Twitch
                </Text>
            </View>

            <View style={styles.olho1}>


            <TouchableOpacity>
                <Text style={styles.sign2}>
                    Entrar
                    </Text>
                    </TouchableOpacity>


                    <TouchableOpacity>
                <Text style={styles.cadastro}>Cadastrar-se</Text>
                </TouchableOpacity>

                </View>
                <TextInput style={styles.Input10} />


            <Text style={styles.usu}>Usuário</Text>
            <TextInput style={styles.input} onChangeText={(text) => setUsername (text)} />

            <Text style={styles.sign}>
                Senha
                </Text>
            <TextInput style={styles.input} onChangeText={(text) => setPassword (text)} 
            value={password}
            secureTextEntry />

            <TouchableOpacity>
            <Text style={styles.login2}>Problemas para efetuar login?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}onPress={handleLogin}>

                <Text style={styles.buttontext}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    )
};


export default Login;