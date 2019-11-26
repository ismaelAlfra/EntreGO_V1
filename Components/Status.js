import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Container from './library/Container';
import Title from './library/Title'
import MyButton from './library/MyButton'

export default class Status extends Component {
    render() {
        return (
            <ScrollView style={EstilosEntreGO.fundo}>
                <View style={{ marginTop: 20, height: 'auto'}}>
                    <Title> Encomenda X</Title>
                    <Container>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    width: '18%',
                                    height: 10,
                                    borderRadius: 10,
                                    margin: 2,
                                    backgroundColor: '#282d64',
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
                        </View>
                    </Container>
                </View>
                <MyButton> Chat </MyButton>
                <View>
                    <Title> Dados da entrega</Title>
                    <View style={EstilosEntreGO.containerAuto}>
                        <View style={{ alignItems: 'center', marginTop: 0 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Nome do produto</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Ismael
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Dimensões</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Ismael
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Peso</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Ismael
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Tipo de caixa</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Ismael
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Descrição</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Ismael
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Endereço de entrega </Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Ismael
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Data de retirada na loja</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Ismael
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                                <Text style={EstilosEntreGO.textTop}>Data de entrega ao cliente</Text>
                            </View>
                            <View style={EstilosEntreGO.myDados}>
                                <Text>
                                    Ismael
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
                                }}> kdcck</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}