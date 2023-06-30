import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Home from '../Home';
import { useState } from 'react';
import Login from '../Login';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
       const handleLogin = () => {
           console.log(username)
           if (username === 'Nobru' && password === '007') {
             setLoggedIn(true);
             alert('Cadastro já existente')
             console.log('Usuário Já possui cadastro!');
           } else {
             console.log('Nome de usuário ou senha incorretos.');
             alert('Cadastro não efetuado, Digite certo e Tente Novamente!')
           }
           
         };
       
         if (loggedIn) {
           
           return <Login/>;
         }

    return (
        <View>
            <View style={styles.logosuperior}>
                <Image
                    source={require('../../../assets/pictures/icon_big.png')}
                    style={{ width: 50, height: 50 }}
                />
                <Text style={styles.titulo1}>
                    Junte-se hoje à Twitch
                </Text>
            </View>

            <View style={styles.espaço1}>
                <TouchableOpacity>
                    <Text style={styles.entrar1}>
                        Entrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.cadastro}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
            
            <TextInput style={styles.Input10} />

            <Text style={styles.usu}>Usuário</Text>
            <TextInput style={styles.Input} onChangeText={(text) => setUsername (text)} />

            <Text style={styles.sign}>Senha</Text>
            <TextInput style={styles.Input} onChangeText={(text) => setPassword (text)} 
            value={password}
            secureTextEntry />

            <Text style={styles.sign2}>Confirmação de senha</Text>
            <TextInput style={styles.Input} onChangeText={(text) => setPassword2 (text)} 
            value={password2}
            secureTextEntry />

            <Text style={styles.date}>Data de nascimento</Text>
            <View style={styles.espaço2}>
                <TextInput style={styles.Input4} />
                <TextInput style={styles.Input5} />
                <TextInput style={styles.Input6} />
            </View>

            <View style={styles.espaço4}>
                <Text style={styles.number}>Número de telefone</Text>
                <Text style={styles.verify}>(Requer Verificação)</Text>
            </View>

            <View style={styles.espaço3}>

                <TextInput placeholder='Brasil +55' style={styles.Input7} />
                <TextInput style={styles.Input8} />
            </View>
            <View style={styles.espaçoimg}>

                <Image
                    source={require('../../../assets/pictures/icon2.png')}
                    style={{ width: 25, height: 25 }}
                />

                <TouchableOpacity>
                    <Text style={styles.titulo2}>
                        Em vez disso, use o e-mail
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.linhatext}>
                <Text style={styles.texto6}>
                    A twitch pode usar seu número de telefone para ligar ou
                    enviar mensagens de texto com informações sobre a sua conta.

                </Text>

                <Text style={styles.texto7}>
                    Ao clicar em Cadastrar-se, você confirma que
                    leu e reconhece os Termos de Serviços e o Aviso
                    de privacidade.


                </Text>
            </View>
            <TouchableOpacity style={styles.buttoncad} onPress={handleLogin}>

                <Text style={styles.buttontext1}>
                    Cadastrar-se
                </Text>
            </TouchableOpacity>



        </View>
    )

};

export default Register;