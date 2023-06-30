import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Home = () => {
    return (
        <View style={styles.fundo1}>
            <View style={styles.view1}>

                <Image
                    source={require('../../../assets/pictures/rushlogo.jpg')}
                    style={styles.imagem1} />
                <Image
                    source={require('../../../assets/pictures/logo3.png')}
                    style={styles.imagem2} />
                <Image
                    source={require('../../../assets/pictures/logo2.png')}
                    style={styles.imagem3} />
                <Image
                    source={require('../../../assets/pictures/logo4.png')}
                    style={styles.imagem4} />

                <TextInput placeholder='Criar' placeholderTextColor={'white'} style={styles.criar} />

            </View>

            <Text style={styles.seguindo}>
                Seguindo
            </Text>
            <Text style={styles.cat1}>
                Categorias seguidas
            </Text>

            <View>

                <ScrollView horizontal={true}>
                    <View style={styles.nomes}>

                    </View>

                    <View>
                        <Image
                            source={require('../../../assets/pictures/vava.png')}
                            style={styles.imagem5} />
                        <Text style={styles.vava1}>
                            VALORANT
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/pictures/fort.png')}
                            style={styles.imagem6} />

                        <Text style={styles.fort3}>
                            FORTNITE
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/pictures/lol.png')}
                            style={styles.imagem7} />

                        <Text style={styles.lol}>
                            LEAGUE OF LEG...
                        </Text>
                    </View>

                    <View>

                        <Image
                            source={require('../../../assets/pictures/Mine.png')}
                            style={styles.imagem8} />

                        <Text style={styles.mine}>
                            MINECRAFT
                        </Text>


                    </View>

                    <View>
                        <Image
                            source={require('../../../assets/pictures/cod.png')}
                            style={styles.imagem9} />

                        <Text style={styles.cod}>
                            WAR ZONE
                        </Text>
                    </View>

                    <View>
                        <Image
                            source={require('../../../assets/pictures/sims.png')}
                            style={styles.imagem10} />

                        <Text style={styles.sims4}>
                            THE SIMS 4
                        </Text>
                    </View>
                    <View>
                        <View style={styles.nomes}>

                        </View>

                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/pictures/csgo.png')}
                            style={styles.imagemCS} />

                        <Text style={styles.csgo}>
                            CS GO
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/pictures/gta.png')}
                            style={styles.imagemgta} />

                        <Text style={styles.gtatext}>
                            GTA
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/pictures/phasmo.png')}
                            style={styles.imagemphasmo} />

                        <Text style={styles.phasmotext}>
                            PHASMOPHOBIA
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/pictures/FIFA.png')}
                            style={styles.imagemfifa} />

                        <Text style={styles.fifatext}>
                            FIFA 23
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/pictures/conversa.png')}
                            style={styles.imagemjust} />

                        <Text style={styles.justtext}>
                            JUST CHATTING
                        </Text>

                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/pictures/up.png')}
                            style={styles.imagemup} />

                        <Text style={styles.uptext}>
                            ONLY UP!
                        </Text>

                    </View>
                </ScrollView>


            </View>

            <Text style={styles.canais}>
                Seus canais ao vivo
            </Text>


            <ScrollView style={styles.rolagem}>

                <View style={styles.espaçorolagem2}>
                    <Image
                        source={require('../../../assets/pictures/vava1.png')}
                        style={styles.imagem11} />

                    <Image
                        source={require('../../../assets/pictures/mwicon.png')}
                        style={styles.imagemmw} />
                    <View>
                        <Text style={styles.nomemw}>mwzera</Text>
                        <Text style={styles.valorantmw}>VALORANT</Text>
                        <Text style={styles.titulomw}>Jogando com o chat</Text>

                        <View>
                            <TextInput placeholder='FPS' placeholderTextColor={'white'} style={styles.fpsmw}></TextInput>

                        </View>


                    </View>
                </View>

                <View style={styles.espaçorolagem3}>

                    <Image
                        source={require('../../../assets/pictures/vava2.png')}
                        style={styles.imagem12} />

                    <Image
                        source={require('../../../assets/pictures/xand.png')}
                        style={styles.imagemxand} />

                    <View>
                        <Text style={styles.nomexand}>xand</Text>
                        <Text style={styles.valorantxand}>VALORANT</Text>
                        <Text style={styles.tituloxand}>To ao vivo</Text>

                        <View>
                            <TextInput placeholder='FPS' placeholderTextColor={'white'} style={styles.fpsxand}></TextInput>

                        </View>


                    </View>
                </View>

                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/lol4.png')}
                        style={styles.imagem13} />
                    <Image
                        source={require('../../../assets/pictures/lollukas.png')}
                        style={styles.imagemlukas} />

                    <View>
                        <Text style={styles.nomelukas}>lukas</Text>
                        <Text style={styles.lollukas}>LEAGUE OF LEGENDS</Text>
                        <Text style={styles.titulolukas}>To on no lolzinho</Text>

                        <View style={styles.blocos3}>
                            <TextInput placeholder='MOBA' placeholderTextColor={'white'}></TextInput>
                        </View>


                    </View>
                </View>
                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/case.png')}
                        style={styles.imagem14} />
                    <Image
                        source={require('../../../assets/pictures/caselogo.png')}
                        style={styles.imagemcase} />

                    <View>
                        <Text style={styles.nomecase}>casemiro</Text>
                        <Text style={styles.jogocase}>SÓ NA CONVERSA</Text>
                        <Text style={styles.titulocase}>Vamos querer</Text>

                        <View style={styles.blocos5}>
                            <TextInput placeholder='CHAT' placeholderTextColor={'white'}></TextInput>
                        </View>


                    </View>
                </View>
                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/livemine.png')}
                        style={styles.imagem15} />
                    <Image
                        source={require('../../../assets/pictures/ojames.png')}
                        style={styles.imagemcase} />

                    <View>
                        <Text style={styles.nomejames}>o james</Text>
                        <Text style={styles.jogojames}>MINECRAFT</Text>
                        <Text style={styles.titulojames}>Zerando mine em 24h</Text>

                        <View style={styles.blocos6}>
                            <TextInput placeholder='MINE' placeholderTextColor={'white'}></TextInput>
                        </View>


                    </View>
                </View>
                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/todyn.png')}
                        style={styles.imagem16} />
                    <Image
                        source={require('../../../assets/pictures/todynlogo.png')}
                        style={styles.imagemcase} />

                    <View>
                        <Text style={styles.nometodyn}>todyn</Text>
                        <Text style={styles.jogotodyn}>GTA RP</Text>
                        <Text style={styles.titulotodyn}> França vs Ruf Ruf</Text>

                        <View style={styles.blocos7}>
                            <TextInput placeholder='GTA RP' placeholderTextColor={'white'}></TextInput>
                        </View>


                    </View>
                </View>
                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/black.png')}
                        style={styles.imagem17} />
                    <Image
                        source={require('../../../assets/pictures/blacklogo.png')}
                        style={styles.imagemcase} />

                    <View>
                        <Text style={styles.nomeblack}>blackoutz</Text>
                        <Text style={styles.jogoblack}>FORTNITE</Text>
                        <Text style={styles.tituloblack}>Cashcup duo pulga</Text>

                        <View style={styles.blocos8}>
                            <TextInput placeholder='TÁTICO' placeholderTextColor={'white'}></TextInput>
                        </View>


                    </View>
                </View>
                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/gaulesnovo.png')}
                        style={styles.imagem18} />
                    <Image
                        source={require('../../../assets/pictures/gauleslogo.png')}
                        style={styles.imagemcase} />

                    <View>
                        <Text style={styles.nomegaules}>gaules</Text>
                        <Text style={styles.jogogaules}>CS GO</Text>
                        <Text style={styles.titulogaules}>Abrindo caixas gold</Text>

                        <View>
                            <TextInput placeholder='FPS' placeholderTextColor={'white'} style={styles.fpsgaules}></TextInput>
                        </View>


                    </View>
                </View>
                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/xandaoonline.png')}
                        style={styles.imagem19} />
                    <Image
                        source={require('../../../assets/pictures/xandaologo.png')}
                        style={styles.imagemcase} />

                    <View>
                        <Text style={styles.nomexandao}>xandão</Text>
                        <Text style={styles.jogoxandao}>SÓ NA CONVERSA</Text>
                        <Text style={styles.tituloxandao}>Videos com o chat</Text>

                        <View>
                            <TextInput placeholder='CHAT' placeholderTextColor={'white'} style={styles.chatxandao}></TextInput>
                        </View>


                    </View>
                </View>
                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/alan.png')}
                        style={styles.imagem20} />
                    <Image
                        source={require('../../../assets/pictures/alanlogo.png')}
                        style={styles.imagemcase} />

                    <View>
                        <Text style={styles.nomealan}>alanzoka</Text>
                        <Text style={styles.jogoalan}>SÓ NA CONVERSA</Text>
                        <Text style={styles.tituloalan}>Rindo sem parar :)</Text>

                        <View>
                            <TextInput placeholder='CHAT' placeholderTextColor={'white'} style={styles.chatalan}></TextInput>
                        </View>


                    </View>
                </View>
                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/f1.png')}
                        style={styles.imagem21} />
                    <Image
                        source={require('../../../assets/pictures/liminhalogo.png')}
                        style={styles.imagemcase} />

                    <View>
                        <Text style={styles.nomelima}>liminhag0d</Text>
                        <Text style={styles.jogolima}>FORMULA 1</Text>
                        <Text style={styles.titulolima}>Corrida na roma</Text>

                        <View>
                            <TextInput placeholder='F1 23' placeholderTextColor={'white'} style={styles.chatlima}></TextInput>
                        </View>


                    </View>
                </View>
                <View style={styles.espaçorolagem4}>

                    <Image
                        source={require('../../../assets/pictures/onlylogo1.png')}
                        style={styles.imagem22} />
                    <Image
                        source={require('../../../assets/pictures/coroalogo.png')}
                        style={styles.imagemcase} />

                    <View>
                        <Text style={styles.nometorres}>torres14x</Text>
                        <Text style={styles.jogotorres}>ONLY UP</Text>
                        <Text style={styles.titulotorres}>É hoje o dia... slots</Text>

                        <View>
                            <TextInput placeholder='CASH' placeholderTextColor={'white'} style={styles.chattorres}></TextInput>
                        </View>


                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;