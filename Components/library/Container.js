import {ScrollView} from 'react-native';
import React, { Component } from 'react';

import EstilosEntreGO from '../EstilosEntreGO';

export default class Container extends Component {
    render() {
        return (
            <ScrollView style={EstilosEntreGO.containerCard}>
                {this.props.children}
            </ScrollView>

        )
    }
}
