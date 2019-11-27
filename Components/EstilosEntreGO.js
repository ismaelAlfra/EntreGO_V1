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
    containerAuto: {
        padding: 30,
        backgroundColor: 'white',
        width: 'auto',
        height: 'auto',
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
    title: {
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
    },
    myInput: {
        backgroundColor: 'white',
        width: '70%',
        height: 'auto',
        borderRadius: 7,
        fontFamily: 'Manjari-Regular'
    },
    myForm: {
        backgroundColor: 'white',
        width: '80%',
        height: 'auto',
        borderRadius: 7,
        fontFamily: 'Manjari-Regular'
    },
    myDados: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 7,
        fontFamily: 'Manjari-Regular',
        borderWidth: 1.5,
        borderColor: '#282d64',
        padding: 15
    },
    textTop: {
        margin: 10,
        fontFamily: 'Manjari-Bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#282d64',
        height: 20,
    },
    barra:{
        width: '18%',
        height: 10,
        borderRadius: 10,
        margin: 2
    },
    mensagem_enviada:{
        padding: 5,
        marginLeft: '9%',
        width: '90%',
        height: 'auto',
        backgroundColor: '#edbb33',
        marginBottom: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#000000',
        borderWidth: 0.5,
    },
    mensagem_respondida:{
        padding: 5,
        width: '90%',
        height: 'auto',
        backgroundColor: '#ffffff',
        marginBottom: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#000000',
        borderWidth: 0.5,
    },
    texto_mensagem:{
        fontFamily: 'Manjari-Bold',
        fontSize: 20,
        margin: 5
    },
    input_mensagem: {
        backgroundColor: 'white',
        width: '90%',
        height: 'auto',
        borderRadius: 7,
        fontFamily: 'Manjari-Regular',
        height: 40,
        borderWidth: 0.5,
        // marginBottom: 0,
        // position: "absolute",
        alignSelf: "auto",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
})