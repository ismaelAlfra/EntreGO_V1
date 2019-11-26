import React, { Component } from 'react';

import { ScrollView, View, TouchableOpacity, Text, TextInput, Picker, DatePickerAndroid } from 'react-native';
import EstilosEntreGO from './EstilosEntreGO';
import MyButton from './library/MyButton'

export default class CadEntrega extends Component {
    render() {
        return (
            <ScrollView style={EstilosEntreGO.fundo}>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Nome do Produto</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}></TextInput>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Dimensão</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}></TextInput>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Peso</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}></TextInput>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Picker style={{ width: "80%", fontFamily: 'Manjari-Bold' }}>
                        <Picker.Item label="Tipo de caixa" value="" />
                        <Picker.Item label="Caixa 01" value="1" />
                        <Picker.Item label="Caixa 02" value="2" />
                        <Picker.Item label="Caixa 03" value="3" />
                    </Picker>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Descrição</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}
                        multiline={true}
                        numberOfLines={4}>
                    </TextInput>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Estado</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}></TextInput>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Cidade</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}></TextInput>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Bairro</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}></TextInput>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Endereço</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}></TextInput>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Número</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}></TextInput>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Complemento</Text>
                    </View>
                    <TextInput style={EstilosEntreGO.myForm}></TextInput>
                </View>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={EstilosEntreGO.textTop}>Código de recebimento</Text>
                    </View>
                    <View style={{ width: '80%', height: 'auto', backgroundColor: 'white', 
                                borderRadius: 7}}>
                        <Text style={{
                            fontFamily: "Manjari-Bold", 
                            fontSize: 35,
                            color: '#282d64',
                            textAlign: 'center'
                        }}> kdcck</Text>
                    </View>
                </View>
                <MyButton>
                    Avançar
                </MyButton>
            </ScrollView>
        )
    }
}