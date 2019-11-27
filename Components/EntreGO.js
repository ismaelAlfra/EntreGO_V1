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
                <View style={{alignItems: 'center', width: '100%'}}>
                    <View style={EstilosEntreGO.container}>
                        <Image style={{width: 80, height: 80, marginRight:20}}
                        source={require('../assets/images/usericonpng.png')}/>
                        <View style={{ maxWidth: 220 }}>
                            <Text style={EstilosEntreGO.text}>Ismael Almeida Fragoso</Text>
                            <Text style={EstilosEntreGO.text}>Lojas Alfra</Text>
                            <Text style={EstilosEntreGO.text}>Rua Estudante Antônio Brito 828</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={EstilosEntreGO.button}
                    onPress={()=>this.props.navigation.navigate('Login')}
                >
                    <Text style={EstilosEntreGO.textButton}>Solicitar entrega</Text>
                </TouchableOpacity>
                <ScrollView horizontal={true} style={{}}>
                    <View style={{ width: 300, margin: 5}}>
                        <Title>Contai</Title>
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
                    <View style={{ width: 300, margin: 5}}>
                        <Title>Contai</Title>
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
                    <View style={{ width: 300, margin: 5}}>
                        <Title>Contai</Title>
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