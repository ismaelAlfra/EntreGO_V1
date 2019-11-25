import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import MyButton from './library/MyButton';
import Container from './library/Container';
import Card from './library/Card';
import Title from './library/Title';

export default class Home extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    }
    render() {
        return (
            <View style={EstilosEntreGO.fundo}>
                <View style={EstilosEntreGO.container}>
                    <View style={EstilosEntreGO.foto}></View>
                    <View style={{ maxWidth: 220 }}>
                        <Text style={EstilosEntreGO.text}>Ismael Almeida Fragoso</Text>
                        <Text style={EstilosEntreGO.text}>Lojas Alfra</Text>
                        <Text style={EstilosEntreGO.text}>Rua Estudante Antônio Brito 828</Text>
                    </View>
                </View>
                <MyButton>
                    Aperte me
                </MyButton>
                <ScrollView horizontal={true} style={{ width: 'auto' }}>

                    <View style={{ width: '50%' }}><Title>Contai</Title>
                        <Container>
                            <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                            <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                            <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                            <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                            <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                            <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                            <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                            <Card cliente='Fulano' encomenda='Caneta Azul'></Card>
                        </Container>
                    </View>
                    <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} 
                            source={require('../assets/images/arranjo_01.png')}/>
                    {/* <View style={{width: 'auto', height: 'auto'}}>
                        <Title> Container</Title>
                        <Container titulo='kkkkk'>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card encomenda='aaa' cliente='qqq'></Card>
                        </Container>
                    </View>
                    <View style={{width: 'auto', height: 'auto'}}>
                        <Title> Container</Title>
                        <Container titulo='kkkkk'>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card encomenda='aaa' cliente='qqq'></Card>
                        </Container>
                    </View>
                    <View style={{width: 'auto', height: 'auto'}}>
                        <Title> Container</Title>
                        <Container titulo='kkkkk'>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card encomenda='aaa' cliente='qqq'></Card>
                        </Container>
                    </View> */}
                </ScrollView>
            </View>
        )
    }
}