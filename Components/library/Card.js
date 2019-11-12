import { TouchableOpacity, Text } from 'react-native';
import React, { Component } from 'react';

import EstilosEntreGO from '../EstilosEntreGO';

export default class Card extends Component {
    render() {
        return (
            <TouchableOpacity style={EstilosEntreGO.card}>
                <Text style={EstilosEntreGO.text}>Encomenda: {this.props.encomenda}</Text>
                <Text style={EstilosEntreGO.text}>Cliente: {this.props.cliente}</Text>
            </TouchableOpacity>
        )
    }
}