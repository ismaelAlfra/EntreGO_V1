import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import MyButton from './library/MyButton';
import Container from './library/Container'
import Card from './library/Card'
import Title from './library/Title'

export default class Home extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    }
    render() {
        return (
            <ScrollView style={EstilosEntreGO.fundo}>
                <View style={EstilosEntreGO.container}>
                    <View style={EstilosEntreGO.foto}></View>
                    <View style={{ maxWidth: 220 }}>
                        <Text style={EstilosEntreGO.text}>Ismael Almeida Fragoso</Text>
                        <Text style={EstilosEntreGO.text}>Lojas Alfra</Text>
                        <Text style={EstilosEntreGO.text}>Rua Estudante Antônio Brito 828</Text>
                    </View>
                </View>
                <View style={{ padding: 30 }}>
                    <TouchableOpacity style={EstilosEntreGO.button}>
                        <Text style={EstilosEntreGO.textButton}>
                            Solicitar entrega
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={EstilosEntreGO.title}>
                        <Text style={EstilosEntreGO.textTitle}>Entregas em aberto</Text>
                    </View>
                    <ScrollView style={EstilosEntreGO.containerCard}>
                        <Card encomenda='jjj' cliente='kkkk'></Card>
                        <TouchableOpacity style={EstilosEntreGO.card}>
                            <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                            <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={EstilosEntreGO.card}>
                            <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                            <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={EstilosEntreGO.card}>
                            <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                            <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={EstilosEntreGO.card}>
                            <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                            <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={EstilosEntreGO.card}>
                            <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                            <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={EstilosEntreGO.card}>
                            <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                            <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={EstilosEntreGO.card}>
                            <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                            <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={EstilosEntreGO.title}>
                    <Text style={EstilosEntreGO.textTitle}>Entregas em aberto</Text>
                </View>
                <ScrollView style={EstilosEntreGO.containerCard}>
                    <Card encomenda='gdg' cliente='ncng' > </Card>
                    <TouchableOpacity style={EstilosEntreGO.card}>
                        <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                        <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EstilosEntreGO.card}>
                        <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                        <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EstilosEntreGO.card}>
                        <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                        <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EstilosEntreGO.card}>
                        <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                        <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EstilosEntreGO.card}>
                        <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                        <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EstilosEntreGO.card}>
                        <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                        <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EstilosEntreGO.card}>
                        <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                        <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EstilosEntreGO.card}>
                        <Text style={EstilosEntreGO.text}>Encomenda: Caneta azul</Text>
                        <Text style={EstilosEntreGO.text}>Cliente: Monoel Gomes</Text>
                    </TouchableOpacity>
                </ScrollView>
                <MyButton>
                    Aperte me
                </MyButton>
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
            </ScrollView>
        )
    }
}