import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import MyButton from './library/MyButton';
import Container from './library/Container';
import Card from './library/Card';
import Title from './library/Title';


export default class Chat extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    render() {
        return (
            <View style={EstilosEntreGO.fundo}>

                <View style={{ width: 420, height: '95%', marginTop: 25, justifyContent: "center", alignContent: "center", alignSelf: "center" }}>
                    <Title>Chat - Ana, Pedro e Julia</Title>
                    <Container >
                        <ScrollView style={{ marginBottom: 30 }} >


                            <View style={EstilosEntreGO.mensagem_enviada} cliente='Fulano' encomenda='Caneta Azul'>
                                <Text style={{ fontFamily: 'Manjari-Bold' }}> Ana Claudia</Text>
                                <Text style={EstilosEntreGO.texto_mensagem} >Tem como levar a encomenda no seu colo durante a viagem? Ela é um pouco frágil  </Text>
                            </View>

                            <View style={EstilosEntreGO.mensagem_respondida} cliente='Fulano' encomenda='Caneta Azul'>
                                <Text style={{ fontFamily: 'Manjari-Bold' }} > Pedro Correia </Text>
                                <Text style={EstilosEntreGO.texto_mensagem} >Eu também prefiro, tenho medo que quebre </Text>
                            </View>

                            <View style={EstilosEntreGO.mensagem_respondida} cliente='Fulano' encomenda='Caneta Azul'>
                                <Text style={{ fontFamily: 'Manjari-Bold' }}> Julia Brandão </Text>
                                <Text style={EstilosEntreGO.texto_mensagem} >Claro, posso levar sim, vamos fechar negócio então? </Text>
                            </View>

                        </ScrollView>

                    </Container>

                    <TextInput style={EstilosEntreGO.input_mensagem} placeholder={'Digite sua mensagem'} placeholderStyle={{ fontFamily: 'Manjari-Bold', borderColor: 'red' }} /* { height: 40, borderWidth: 0.5} onChangeText={text => onChangeText(text)} value={value} */ />
                </View>
            </View>
        )
    }
}