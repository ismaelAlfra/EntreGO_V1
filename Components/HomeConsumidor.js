import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import Container from './library/Container';
import Title from './library/Title';
import MyButton from './library/MyButton';
import Card from './library/Card';

export default class HomeConsumidor extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    render(){
        return(
            <View style={EstilosEntreGO.fundo}>
                <View style={{alignItems: 'center', width: '100%'}}>
                    <View style={EstilosEntreGO.container}>
                        <Image style={{width: 80, height: 80, marginRight:20}}
                        source={require('../assets/images/Rute.png')}/>
                        <View style={{ maxWidth: 220 }}>
                            <Text style={EstilosEntreGO.text}>Rute HTA</Text>
                            <Text style={EstilosEntreGO.text}>Av. José de Freitas Queiroz, 5003, Quixadá - CE</Text>
                        </View>
                    </View>
                </View>
                <TextInput
                    style={{
                        margin:'5%',
                        marginBottom:'1%',
                        backgroundColor: 'white',
                        width: '90%',
                        height: 'auto',
                        borderRadius: 7,
                        fontFamily: 'Manjari-Regular'
                    }}
                    onChangeText={()=>{}}
                    value={'Buscar entrega'}
                />
                <ScrollView horizontal={true} style={{}}>
                    <View style={{ width: 300, margin: 5}}>
                        <Title>Entregas em andamento</Title>
                        <Container>
                            <TouchableOpacity style={EstilosEntreGO.card} onPress={()=>this.props.navigation.navigate('StatusConsumidor')}>
                                <Text style={EstilosEntreGO.text}>Encomenda: Camisa branca Polo</Text>
                                <Text style={EstilosEntreGO.text}>Cliente: Julia Brandão</Text>
                            </TouchableOpacity>
                        </Container>
                    </View>
                    <View style={{ width: 300, margin: 5}}>
                        <Title>Entregas Concluidas</Title>
                        <Container>
                            <TouchableOpacity style={EstilosEntreGO.card} onPress={()=>this.props.navigation.navigate('StatusEntregaRealizada')}>
                                <Text style={EstilosEntreGO.text}>Encomenda: Mochila Bagstyle</Text>
                                <Text style={EstilosEntreGO.text}>Cliente: Rute HTA</Text>
                            </TouchableOpacity>
                        </Container>
                    </View>
                </ScrollView>
            </View>
        )
    }
}