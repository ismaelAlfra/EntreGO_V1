import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    fundo: {
        backgroundColor: '#fed438',
        flex: 1,
    },
    foto: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 20,

    },
    container: {
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20
    },
    text: {
        fontFamily: 'Manjari-Bold',
        fontSize: 15,
        lineHeight: 22,
        color: '#282d64'
    },
    textExpli: {
        fontFamily: 'Manjari-Bold',
        fontSize: 20,
        lineHeight: 22,
        color: '#282d64',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#282d64',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 7,
        alignItems: 'center'
    },
    textButton: {
        fontSize: 22,
        color: 'white',
        fontFamily: 'Manjari-Bold'
    },
    containerCard: {
        padding: 30,
        backgroundColor: 'white',
        width: 'auto',
        height: 400,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        margin: 20,
        marginTop: 0
    },
    card: {
        padding: 15,
        width: 'auto',
        height: 'auto',
        backgroundColor: '#edbb33',
        marginBottom: 30,
        borderRadius: 10
    },
    title:{
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        backgroundColor: '#282d64',
        paddingLeft: 114,
        paddingRight: 114,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textTitle: {
        fontSize: 20,
        fontFamily: 'Manjari-Bold',
        color: '#fed438',
        width: 350,
        textAlign: 'center'
    }

})