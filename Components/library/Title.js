import { View, ScrollView, Text } from 'react-native';
import React, { Component } from 'react';

import EstilosEntreGO from '../EstilosEntreGO';
import { defaultProps } from 'react-native/Libraries/Components/Picker/Picker';

export default class Title extends Component {
    render() {
        return (
            <View style={EstilosEntreGO.title}>
                <Text style={EstilosEntreGO.textTitle}>{this.props.children}</Text>
            </View>
        )
    }
}