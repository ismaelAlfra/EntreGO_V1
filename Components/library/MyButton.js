import {View, TouchableOpacity, Text} from 'react-native';
import React, { Component } from 'react';

import EstilosEntreGO from '../EstilosEntreGO';

export default class MyButton extends Component{
    render(){
        return(
            <View style={{padding: 30}}>
                <TouchableOpacity style={EstilosEntreGO.button}>
                    <Text style={EstilosEntreGO.textButton}>{this.props.children}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}