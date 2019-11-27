import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Container from './library/Container';
import Title from './library/Title';
import MyButton from './library/MyButton';
import { ruan } from '../ruan';

export default class Status extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    render() {
        return (
            <ScrollView style={EstilosEntreGO.fundo}>
                <View style={{ marginTop: 20, height: 'auto' }}>
                    <Title>Abajur Azul 220v</Title>
                    <Container>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    width: '18%',
                                    height: 10,
                                    borderRadius: 10,
                                    margin: 2,
                                    borderWidth: 1.5,
                                    borderColor: '#282d64',
                                }}></View>
                                <View style={{
                                    width: '18%',
                                    height: 10,
                                    borderRadius: 10,
                                    margin: 2,
                                    borderWidth: 1.5,
                                    borderColor: '#282d64',
                                }}></View>
                                <View style={{
                                    width: '18%',
                                    height: 10,
                                    borderRadius: 10,
                                    margin: 2,
                                    borderWidth: 1.5,
                                    borderColor: '#282d64',
                                }}></View>
                                <View style={{
                                    width: '18%',
                                    height: 10,
                                    borderRadius: 10,
                                    margin: 2,
                                    borderWidth: 1.5,
                                    borderColor: '#282d64',
                                }}></View>
                                <View style={{
                                    width: '18%',
                                    height: 10,
                                    borderRadius: 10,
                                    margin: 2,
                                    borderWidth: 1.5,
                                    borderColor: '#282d64',
                                }}></View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    width: '18%',
                                    textAlign: 'center',
                                    fontFamily: 'Manjari-Bold',
                                    color: '#282d64',
                                    margin: 2,
                                    fontSize: 11
                                }}>
                                    Aceito
                                </Text>
                                <Text style={{
                                    width: '18%',
                                    textAlign: 'center',
                                    fontFamily: 'Manjari-Bold',
                                    color: '#282d64',
                                    margin: 2,
                                    fontSize: 11
                                }}>
                                    Enviado
                                </Text>
                                <Text style={{
                                    width: '18%',
                                    textAlign: 'center',
                                    fontFamily: 'Manjari-Bold',
                                    color: '#282d64',
                                    margin: 2,
                                    fontSize: 11
                                }}>
                                    Em trânsito
                                </Text>
                                <Text style={{
                                    width: '18%',
                                    textAlign: 'center',
                                    fontFamily: 'Manjari-Bold',
                                    color: '#282d64',
                                    margin: 2,
                                    fontSize: 11
                                }}>
                                    Entregue
                                </Text>
                                <Text style={{
                                    width: '18%',
                                    textAlign: 'center',
                                    fontFamily: 'Manjari-Bold',
                                    color: '#282d64',
                                    margin: 2,
                                    fontSize: 11
                                }}>
                                    Finalizado
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            width: '100%',
                            height: 300,
                            borderRadius: 7,
                            fontFamily: 'Manjari-Regular',
                            borderWidth: 1.5,
                            borderColor: '#282d64',
                        }}>
                            <Image style={{ width: 305, height: 296 }}
                                source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=-4.979756,-39.0565699&zoom=17&size=300x296&maptype=roadmap&markers=color:red%7Clabel:E%7C-4.979756,-39.056569&key=' + ruan }} />
                        </View>
                    </Container>
                </View>
                <View>
                    <Title> Dados da entrega</Title>
                    <View style={EstilosEntreGO.containerAuto}>
                        <View style={{ alignItems: 'center', marginTop: 0 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Nome do produto</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Abajur Azul 220v
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Dimensões</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    20 x 20 x 20cm
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Peso</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    400g
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Tipo de caixa</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Média
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Descrição</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Abajur branco da marca Lwmmi com voltagem 220v
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Endereço de entrega </Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Av. José de Freitas Queiroz, 5003, Quixadá - CE, Cantina da Márcia
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Data de retirada na loja</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    26/11/2019
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Data de entrega ao cliente</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    27/11/2019
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Código de recebimento</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text style={{
                                    fontFamily: "Manjari-Bold",
                                    fontSize: 35,
                                    color: '#282d64',
                                    textAlign: 'center'
                                }}> jsx87</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={EstilosEntreGO.button} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={EstilosEntreGO.textButton}>
                        Cancelar entrega
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}